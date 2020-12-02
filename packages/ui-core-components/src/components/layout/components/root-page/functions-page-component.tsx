import {hexToRgb} from "@dgtx/ui-scl";
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import {createStyles, fade, makeStyles, Theme} from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Update from "@material-ui/icons/Update";
import clsx from 'clsx';
import React from 'react';
import {I18n, Translate} from 'react-redux-i18n';
import {Card, CardFooter, CardHeader} from '../../../card';
import {getHref} from '../../actions';
import {KEY_TRANSLATE} from '../../constants';
const useStyle: any = makeStyles((theme: Theme): any =>
  createStyles({
    root: {
      height: (props: any) => `${props.height - 106}px`,
      maxHeight: (props: any) => `${props.height - 106}px`,
      width: 'calc(100% - 16px)',
      margin: '8px',
      overflow: 'hidden',
      position: 'relative'
    },
    title: {
      height: '54px',
      lineHeight: '54px',
      display: 'flex',
      // position: 'absolute',
      zIndex: 10,
      backgroundColor: '#f5f5f5',
      boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)'
    },
    content: {
      width: '100%',
      // height: '100%',
      maxHeight: (props: any) => `${props.height - 106 - 54}px`,
      paddingTop: '10px',
      overflow: 'auto',
    },
    iconRefresh: {
      padding: '5px 0px 0px 0px',
      marginLeft: '5px',

    },
    divEmpty: {
      width: '100%',
      height: '250px',
    },
    backIcon: {
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
    marginItem: {
      margin: '0px 10px 10px 10px',
    },
    buttonContainer: {
      display: 'flex',
      position: 'relative',
      padding: '4px',
      '&:hover': {
        color: theme.palette.primary.main,
        fontWeight: 'bold',
        boxShadow: `4px 4px 4px 0px ${theme.palette.primary.light}`,
      },
      '&:hover > $buttonDriver': {
        backgroundColor: fade(theme.palette.primary.main, 0.8)
      },
      height: 35,
      lineHeight: '30px',
      fontSize: '17px',
      cursor: 'pointer',
      width: 'fit-content'
    },
    buttonLabel: {
      paddingLeft: 10
    },
    buttonIcon: {
      padding: '3px 0px 0px 0px'
    },
    buttonDriver: {
      position: 'absolute',
      bottom: 0,
      height: 2,
      width: 'calc(100% - 4px)',
      backgroundColor: theme.palette.common.black,
    },
    gridItem: {
      position: 'relative',
      padding: '10px',
      // maxHeight: '190px',
      // height: '190px'
    },
    cardWapper: {
      position: 'relative',
      cursor: 'pointer',
      "&:hover,&:focus": {
        background: "#FFFFFF",
        top: -6,
        transition: "0.3s",
        boxShadow:
          "0 0px 0px 0px rgba(" +
          hexToRgb(theme.palette.primary.light) +
          ", 0), 0 0px 0px 14px rgba(" +
          hexToRgb(theme.palette.primary.light) +
          ", 0), 13px 20px 8px 0px rgba(" +
          hexToRgb(theme.palette.primary.light) +
          ", 1)"
      }
    },
    cardTitle: {
      color: theme.palette.common.black,
      minHeight: "auto",
      fontWeight: 500,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      // marginBottom: "3px",
      textDecoration: "none",
      fontSize: "17px",
      // marginTop: '20px',
      lineHeight: "1",
      [theme.breakpoints.up("sm")]: {
        lineHeight: "1",
        fontSize: "14px",
      },
      [theme.breakpoints.up("md")]: {
        lineHeight: "1",
        fontSize: "14px",
      }
    },
    instance: {
      width: "40%",
      textOverflow: "ellipsis",
      overflow: "hidden",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      display: "-webkit-box",
      fontSize: "12px",
      lineHeight: "22px",
      padding: '0px 16px 0px 0px',
      opacity: '100%',
      textAlign: 'left',
      fontStyle: 'italic'
    },
    description: {
      width: "60%",
      textOverflow: "ellipsis",
      overflow: "hidden",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      display: "-webkit-box",
      fontSize: "12px",
      lineHeight: "22px",
      padding: '0px 16px 0px 0px',
      opacity: '50%',
      textAlign: 'right',
      fontStyle: 'italic'
    },
    aTag: {
      textDecoration: 'none'
    },
  })
)

function FunctionsPageComponent(props: any) {
  const {
    rowsSelected = {children: []},
    height,
    setBack = () => null
  } = props;
  const classes = useStyle({height});
  const [displayItem, setDisplayItem]: any = React.useState({});

  const handleClickBack = () => {
    setBack()
  }

  const handleItem = (item: any) => () => {
    console.log('====================================');
    console.log('item: ', item);
    console.log('====================================');
    if (displayItem[item.root_app] === "flex") {
      setDisplayItem({...displayItem, [item.root_app]: 'none'})
    } else {
      setDisplayItem({...displayItem, [item.root_app]: 'flex'})
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.title} >
        <Tooltip title={I18n.t(`${KEY_TRANSLATE}.back_to_project_list`)} placement="top">
          <IconButton className={classes.backIcon} onClick={handleClickBack}>
            <ArrowBack fontSize="small" />
          </IconButton>
        </Tooltip>
        {rowsSelected.display_name}
        <Divider variant="middle" />
      </div>

      <div className={classes.content}>
        {
          rowsSelected && rowsSelected.children.length > 0 && rowsSelected.children.map((item: any, index: any) => {

            return (
              <>
                <div style={{display: 'flex'}}>
                  <div key={`${index}-div`} className={clsx(classes.buttonContainer, classes.marginItem)} onClick={handleItem(item[0])}>
                    <div className={clsx(classes.buttonIcon)}>
                      {!displayItem[item[0].root_app] || displayItem[item[0].root_app] === 'none' ? <ExpandMore /> : <ExpandLess />}
                    </div>

                    <div className={classes.buttonLabel}>
                      {item[0].display_root_app}
                    </div>

                    <span className={classes.buttonDriver}>
                    </span>
                  </div>
                  {
                    item[0].type === 'workflow' &&
                    <Tooltip
                      title={item[0].display_root_app}
                      placement="top"
                    >
                      <IconButton className={clsx(classes.iconRefresh, classes.marginItem)}>
                        <Update color="primary" />
                      </IconButton>
                    </Tooltip>
                  }
                </div>

                <Grid key={`${index}-Grid`} container spacing={0} style={{display: displayItem[item[0].root_app] || 'none'}}>
                  {
                    item.length > 0 && item.map((child: any, indexChild: any) => {
                      return (
                        <Grid key={`${indexChild}-GridItem`} item xs={12} sm={6} md={4} lg={3} xl={3} className={classes.gridItem} >
                          <a href={getHref(child.path)} className={classes.aTag}>
                            <Card className={classes.cardWapper}>
                              <CardHeader color="info" stats icon>
                                <p className={classes.cardTitle}>
                                  {child.display_name && child.display_name.length > 30 ? `${child.display_name.substr(0, 20).toUpperCase()}....` : child.display_name.toUpperCase()}
                                </p>
                              </CardHeader>
                              <CardFooter stats>
                                <span className={classes.instance}>
                                  {
                                    child.type === 'workflow' &&
                                    child.info
                                  }
                                </span>
                                <span className={classes.description}>
                                  <Translate value={`${KEY_TRANSLATE}.get_more_info`} />
                                </span>
                              </CardFooter>
                            </Card>
                          </a>
                        </Grid>
                      )
                    })
                  }
                </Grid>
              </>
            )
          })
        }
        <div className={classes.divEmpty}></div>
      </div>
    </div>
  );
}
export {FunctionsPageComponent};
export default (FunctionsPageComponent);
