import {redirect} from '@dgtx/ui-utils';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import SvgIcon, {SvgIconProps} from '@material-ui/core/SvgIcon';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import AccountCircle from "@material-ui/icons/AccountCircle";
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Folder from "@material-ui/icons/Folder";
import FormatListNumbered from "@material-ui/icons/FormatListNumbered";
import Settings from "@material-ui/icons/Settings";
import TreeItem, {TreeItemProps} from '@material-ui/lab/TreeItem';
import TreeView from '@material-ui/lab/TreeView';
import clsx from 'clsx';
import {get} from 'lodash';
import React from 'react';
import {ILeftData} from '../../constants';

export const ICON: any = {
    "system": AccountCircle,
    "functional": Settings,
    "operation": Folder,
    "project": FormatListNumbered,
    "function": AssignmentInd,
}
function getHref(path: string) {
    const baseHref = window.location.origin;
    return `${baseHref}${path}`;
}
function MinusSquare(props: SvgIconProps) {
    return (
        <SvgIcon fontSize="inherit" style={{width: 14, height: 14}} {...props}>
            {/* tslint:disable-next-line: max-line-length */}
            <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
        </SvgIcon>
    );
}
function PlusSquare(props: SvgIconProps) {
    return (
        <SvgIcon fontSize="inherit" style={{width: 14, height: 14}} {...props}>
            {/* tslint:disable-next-line: max-line-length */}
            <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
        </SvgIcon>
    );
}

function CloseSquare(props: SvgIconProps) {
    return (
        <SvgIcon className="close" fontSize="inherit" style={{width: 14, height: 14}} {...props}>
            {/* tslint:disable-next-line: max-line-length */}
            <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
        </SvgIcon>
    );
}
declare module 'csstype' {
    interface Properties {
        '--tree-view-color'?: string;
        '--tree-view-bg-color'?: string;
    }
}

type StyledTreeItemProps = TreeItemProps & {
    bgColor?: string;
    color?: string;
    LabelIcon?: any;
    labelInfo?: string;
    labelText: string;
};

const useTreeItemStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            color: theme.palette.text.secondary,
            '&:hover > $content': {
                backgroundColor: theme.palette.primary.light,
                color: `${theme.palette.primary.contrastText}`,
                fontWeight: 'bold'
            },
            '&:focus > $content, &$selected > $content': {
                backgroundColor: `var(--tree-view-bg-color, ${theme.palette.primary.main})`,
                color: `${theme.palette.primary.contrastText}`,
                fontWeight: 'bold'
            },
            '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
                backgroundColor: 'transparent',
            },
            overflow: 'auto',
            marginTop: 8
        },
        content: {
            color: theme.palette.text.secondary,
            borderTopRightRadius: theme.spacing(2),
            borderBottomRightRadius: theme.spacing(2),
            paddingRight: theme.spacing(1),
            fontWeight: theme.typography.fontWeightMedium,
            '$expanded > &': {
                fontWeight: theme.typography.fontWeightRegular,
            },
        },
        group: {
            marginLeft: 15,
            '& $content': {
                paddingLeft: theme.spacing(1),
            },
        },
        expanded: {},
        selected: {},
        label: {
            fontWeight: 'inherit',
            color: 'inherit',
        },
        labelRoot: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0.5, 0),
            height: '45px'
        },
        labelIcon: {
            marginRight: theme.spacing(1),
        },
        labelText: {
            fontWeight: 'inherit',
            flexGrow: 1,
        },
        labelInfo: {
            marginRight: '12px',
            fontWeight: 'bold'

        }
    }),
);

function StyledTreeItem(props: StyledTreeItemProps) {
    const classes = useTreeItemStyles();
    const {labelText, LabelIcon, labelInfo, color, bgColor, ...other} = props;
    return (
        <TreeItem
            label={
                <div>
                    <div className={classes.labelRoot}>
                        {
                            LabelIcon ? <LabelIcon color="inherit" className={classes.labelIcon} />
                                :
                                <div style={{width: 30}}></div>
                        }
                        {
                            labelText && labelText.length > 35 ?
                                <Tooltip title={labelText} placement="top">
                                    <Typography variant="body2" className={classes.labelText}>
                                        {labelText.slice(0, 35) + "..."}
                                    </Typography>
                                </Tooltip>
                                :
                                <Typography variant="body2" className={classes.labelText}>
                                    {labelText || ""}
                                </Typography>
                        }
                        <Typography variant="caption" color="inherit" className={classes.labelInfo}>
                            {labelInfo}
                        </Typography>
                    </div>
                    <Divider />
                </div>
            }
            style={{
                '--tree-view-color': color,
                '--tree-view-bg-color': bgColor,
            }}
            classes={{
                root: classes.root,
                content: classes.content,
                expanded: classes.expanded,
                selected: classes.selected,
                group: classes.group,
                label: classes.label,
            }}
            {...other}
        />
    );
}

const drawerWidth = 430;
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawerPaper: {
            border: "none",
            position: "fixed",
            top: "0",
            bottom: "0",
            left: "0",
            zIndex: 1,
            // backgroundColor: theme.palette.background.default,
            // backgroundColor: 'transparent',
            // ...boxShadow,
            width: drawerWidth,
            [theme.breakpoints.up("md")]: {
                width: drawerWidth,
                position: "fixed",
                height: "100%"
            },
            overflow: 'auto',
        },
        logo: {
            position: "relative",
            padding: "15px 15px",
            zIndex: 4,
            textAlign: "center",
            "&:after": {
                content: '""',
                position: "absolute",
                bottom: "0",
                height: "1px",
                right: "15px",
                width: "calc(100% - 30px)",
            }
        },
        logoLink: {
            textTransform: "uppercase",
            zIndex: 5,
            padding: "5px",
            fontSize: "18px",
            textAlign: "left",
            lineHeight: "30px",
            textDecoration: "none",
            display: "inline-block",
        },
        version: {
            left: '25px',
            bottom: 0,
            position: 'absolute',
            fontSize: '11px',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 'bold',
            letterSpacing: '0.03333em'
        },
        treeView: {
            overflow: 'auto',
            position: 'relative'
        },
        arrowDownward: {
            width: '40px',
            height: '40px',
            position: 'absolute',
            top: 100,
            left: drawerWidth + 10,
            backgroundColor: theme.palette.primary.light,
            '&:hover': {
                color: `${theme.palette.primary.contrastText}`,
                fontWeight: 'bold'
            },
        },
        arrowUpward: {
            width: '40px',
            height: '40px',
            position: 'absolute',
            bottom: 30,
            left: drawerWidth + 10

        },
    }),
);

function LeftMenuComponent(props: any) {
    const {isOpen = false, routers = [], setOpen = () => null,
        version = 0, routeFocus = {},

        leftMenuData = [],
        setClickItem = () => null
    } = props;

    const classes = useStyles();
    const refContainer: any = React.useRef();
    const [isViewScrollTop, setIsViewScrollTop] = React.useState(false);


    React.useEffect(() => {
        console.log('========React.useEffect==========');
        console.log('refContainer :', refContainer);
        console.log('====================================');
        // const childrens: any = Array.from(refContainer.current.children);
        // if (childrens) {
        // onChangeRefContainer(refContainer)
        // }
    }, [refContainer])

    const handleScroll = (e: any) => {
        if (get(refContainer, 'current.scrollTop', 0) > 150 && !isViewScrollTop) {
            setIsViewScrollTop(true);
            console.log('========handleScroll==========');
            console.log('refContainer: ', refContainer);
            console.log('==============================');
        }
    }

    // const history = useHistory();
    const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent, ) => {
        if (event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {return;}
        setOpen();
    };

    const handleClickHome = () => {
        const route = routers.filter((r: any) => r.app_name === 'home')[0];
        // history.push(route.path);
        redirect("")
        setOpen(false, route);
    }

    const brand = (
        <div className={classes.logo} onClick={handleClickHome}>
            <div className={classes.logoLink}>
                <img width={'250px'} height="50px" src="/company_logo.png" alt="logo" />
            </div>
            <div className={classes.version}><i>{`v${version}`}</i></div>
        </div>
    );

    const handleSelectedTreeItem = (event: any, nodeIds: string) => {
        setClickItem(nodeIds);
    }

    const renderTreeItem = (leftMenuData: ILeftData[]) => {
        if (leftMenuData && leftMenuData[0]) {
            return leftMenuData.map((data: ILeftData) => {
                return (
                    <StyledTreeItem key={data.id} nodeId={data.id} labelText={data.display_name} labelInfo={data.info} LabelIcon={ICON[data.name] || (data.children.length > 0 ? PlusSquare : MinusSquare)} >
                        {
                            data.children.length > 0 && renderTreeItem(data.children)
                        }
                    </StyledTreeItem>
                )
            })
        }
        return <></>
    }

    return (
        <Drawer
            variant="temporary"
            anchor={"left"}
            open={isOpen}
            classes={{
                paper: clsx(classes.drawerPaper)
            }}
            onClose={toggleDrawer}
            ModalProps={{
                keepMounted: true // Better open performance on mobile.
            }}
        >
            {brand}
            <Divider variant="middle" />
            <TreeView
                className={classes.treeView}
                defaultExpanded={[`${leftMenuData.length}`]}
                defaultCollapseIcon={<ArrowDropDownIcon />}
                defaultExpandIcon={<ArrowRightIcon />}
                defaultEndIcon={<div style={{width: 24}} />}
                onNodeSelect={handleSelectedTreeItem}
                ref={refContainer}
                onScroll={handleScroll}
            >
                {
                    renderTreeItem(leftMenuData)
                }

            </TreeView>
            <IconButton className={classes.arrowDownward}>
                <ArrowDownward fontSize="large" />
            </IconButton>

            <IconButton className={classes.arrowUpward}>
                <ArrowUpward fontSize="large" />
            </IconButton>
        </Drawer>
    )
}
export {LeftMenuComponent};
export default LeftMenuComponent;
