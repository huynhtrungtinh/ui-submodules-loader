import {useWindowSize} from '@dgtx/ui-utils';
import Paper from '@material-ui/core/Paper';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUp from "@material-ui/icons/KeyboardArrowUp";
import {isEqual} from 'lodash';
import React from 'react';
import {useHistory} from 'react-router-dom';
import {ROWS_PER_PAGE_OPTIONS} from '../constants';

const useStyle: any = makeStyles((theme: Theme): any =>
    createStyles({
        rootTable: {
            height: (props: any) => `${props.heightRoot - 16}px`,
            width: (props: any) => `${props.widthRoot - 16}px`,
            margin: '8px'
        },
        containerTable: {
            maxHeight: (props: any) => `${props.maxHeightTable - 16}px`,
        },
        rowEmpty: {
            height: (props: any) => `${props.heightBody - 16}px`,
        },
        cellHeader: {
            maxHeight: '24px',
            display: 'flex',
        }
    })
)
function getHref(path: string) {
    const baseHref = window.location.origin;
    return `${baseHref}${path}`;
}

const ID_DIV_ROOT = 'table-projects-root';
const sizeWindowDefault = {height: 0, width: 0}

function TableProjectsComponent(props: any) {
    const {rows = [], columns = [],
        setSort = () => null,
        page = 0,
        rowsPerPage = ROWS_PER_PAGE_OPTIONS[0],
        setPage = () => null,
        setRowsPerPage = () => null,
        setClick = () => null,
    } = props;
    const [sizeWindow, setSizeWindow] = React.useState(sizeWindowDefault);
    const [heightRoot, setHeightRoot] = React.useState(0);
    const [maxHeightTable, setMaxHeightTable] = React.useState(0);
    const [heightBody, setHeightBody] = React.useState(0);
    const [rowsView, setRowsView] = React.useState([]);
    const history = useHistory();
    const size: any = useWindowSize();
    const classes = useStyle({heightRoot, widthRoot: sizeWindow.width, maxHeightTable, heightBody});

    React.useEffect(() => {
        if (!isEqual(sizeWindow.height, size.height)) {
            setSizeWindow(size);
            const root: any = size.height - 128;
            const table: any = root - 52;
            const body: any = table - 57;
            setHeightRoot(root);
            setMaxHeightTable(table);
            setHeightBody(body);
        }
    }, [size])

    React.useEffect(() => {
        setRowsView(rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage))
    }, [rows])

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleSort = (column: unknown) => () => {
        setSort(column);
    };
    const handleClickItem = (project: any) => () => {
        setClick(project, history)
    }
    return (
        <Paper className={classes.rootTable} id={ID_DIV_ROOT}>
            <TableContainer className={classes.containerTable}>
                <Table stickyHeader aria-label="project table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column: any) => (
                                <TableCell
                                    key={column.id}
                                    style={{minWidth: column.minWidth, cursor: "pointer"}}
                                    onClick={handleSort(column)}
                                >
                                    <div className={classes.cellHeader}>
                                        <div>
                                            {
                                                column.sortColumn === true && (column.sortDirection === 'asc' ?
                                                    <KeyboardArrowDown fontSize="small" /> : <KeyboardArrowUp fontSize="small" />)
                                            }
                                        </div>
                                        <div>
                                            {column.label}
                                        </div>
                                    </div>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rowsView.length > 0 && rowsView.map((row: any) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}
                                        onClick={handleClickItem(row)}>
                                        {columns.map((column: any) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} >
                                                    <a href={getHref(`/projects/${row.id}`)} style={{width: '100%', color: 'inherit'}}>
                                                        {value}
                                                    </a>
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow >
                                );
                            })
                        }
                        <TableRow style={{height: `${rowsView.length === 0 ? heightBody - 16 : heightBody - (53 * rowsView.length) - 16}px`}}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
export {TableProjectsComponent};
export default (TableProjectsComponent);
