import {hexToRgb} from "@dgtx/ui-scl";
import Grid from '@material-ui/core/Grid';
import {createStyles, fade, makeStyles, Theme} from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import {Translate} from 'react-redux-i18n';
import {Card, CardFooter, CardHeader} from '../../../card';
import {getHref} from '../../actions';
import {ICON, ISideBar, KEY_TRANSLATE, OPERATION_KEY, TRAINING_KEY} from '../../constants';
import {TableProjectsContainers} from '../../containers';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
    marginItem: {
      margin: '0px 10px 10px 10px',
    },
    buttonSelected: {
        color: theme.palette.primary.main,
        fontWeight: 'bold',
        boxShadow: `4px 4px 4px 0px ${theme.palette.primary.light}`,
      '&:$buttonDriver': {
        backgroundColor: fade(theme.palette.primary.main, 0.8)
      },
    },
    buttonContainer: {
      display: 'flex',
      position: 'relative',
      padding: '4px',
      // boxShadow: `6px 5px 8px -2px ${theme.palette.common.black}`,
      // backgroundColor: theme.palette.common.white,
      '&:hover': {
        color: theme.palette.primary.main,
        fontWeight: 'bold',
        boxShadow: `4px 4px 4px 0px ${theme.palette.primary.light}`,
        // margin: '12px'
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

    },
    buttonDriver: {
      position: 'absolute',
      bottom: 0,
      height: 2,
      width: 'calc(100% - 4px)',
      backgroundColor: theme.palette.common.black,
    },
    buttonProject: {
      display: 'flex',
    },
    marginBP: {
      margin: '0px 10px 0px 0px',
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
    description: {
      width: "100%",
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

interface IRootPageComponent {
  sideBarData: ISideBar[]
}


function RootPageComponent(props: IRootPageComponent | any) {
  const {
    sideBarData = [],
    isSelectedTab = 0,
    // sideBarSearchValue = "",
    // breakpoint = "lg",
    // sideBarSelectedItem = {}
    setTabIndex = () => null
  } = props;
  const classes = useStyles();
  let projects: any = [];

  const handleCLickTab = (index:any) => () =>{
    setTabIndex(index)
  }

  if (sideBarData.length > 0) {
    return (
      <div className={clsx(classes.root)}>
        <div style={{width: '100%', height: '100%'}}>
          {
            sideBarData.map((item: ISideBar, index: any) => {
              const Icon = ICON[item.name];
              if (item.name !== OPERATION_KEY && item.name !== TRAINING_KEY) {
                return (
                  <>
                    <div key={index + 1} className={clsx(classes.buttonContainer, classes.marginItem)}>
                      <div className={clsx(classes.buttonIcon)}>
                        <Icon />
                      </div>

                      <div className={clsx(classes.buttonLabel)}>
                        {item.display_name}
                      </div>

                      <span className={clsx(classes.buttonDriver)}>
                      </span>
                    </div>

                    <Grid key={index + 20} container spacing={0} >
                      {
                        item.children.length > 0 && item.children.map((child: any) => {
                          return (
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} className={classes.gridItem} >
                              <a href={getHref(child.path)} className={classes.aTag}>
                                <Card className={classes.cardWapper}>
                                  <CardHeader color="info" stats icon>
                                    <p className={classes.cardTitle}>
                                      {child.display_name && child.display_name.length > 30 ? `${child.display_name.substr(0, 20).toUpperCase()}....` : child.display_name.toUpperCase()}
                                    </p>
                                  </CardHeader>
                                  <CardFooter stats>
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
              } else {
                projects.push(item);
                return "";
              }
            })
          }
        </div>
        {
          projects && projects.length > 0 &&
          <>
            <div className={clsx(classes.buttonProject, classes.marginItem)}>
              {
                projects.map((item: ISideBar, index:any) => {
                  const Icon = ICON[item.name];
                  const btnSelected = clsx({
                    [" " + classes["buttonSelected"]]: isSelectedTab === index
                });
                  return (
                    <div key={index + 30} className={clsx(classes.buttonContainer, classes.marginBP)+ btnSelected} onClick={handleCLickTab(index)}>
                      <div className={clsx(classes.buttonIcon)}>
                        <Icon />
                      </div>

                      <div className={clsx(classes.buttonLabel)}>
                        {item.display_name}
                      </div>

                      <span className={clsx(classes.buttonDriver)}>
                      </span>
                    </div>
                  )
                })
              }
            </div>
            <TableProjectsContainers />
          </>
        }
      </div>
    )
  }
  return <></>
}

export {RootPageComponent};
export default RootPageComponent
