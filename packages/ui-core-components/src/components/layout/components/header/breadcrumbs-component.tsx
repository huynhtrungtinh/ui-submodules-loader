import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import {makeStyles, Theme} from '@material-ui/core/styles';
import Tooltip from "@material-ui/core/Tooltip";
import Typography from '@material-ui/core/Typography';
import React from 'react';
import {I18n} from 'react-redux-i18n';
import {useHistory} from 'react-router-dom';
import {ICON, KEY_TRANSLATE} from '../../constants';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.primary.contrastText
  },
  link: {
    display: 'flex',
    maxHeight: 44,
    minHeight: 44,
    lineHeight: '45px',
    // color: theme.palette.primary.contrastText
  },
  icon: {
    marginRight: theme.spacing(0.5),
    marginTop: 12,
    width: 20,
    height: 20,
    // color: theme.palette.primary.contrastText
  },
}));

function BreadcrumbsComponent(props: any) {
  const classes = useStyles();
  const {tabs = [], breakpoint = "lg"} = props;
  const history = useHistory();

  const handleClick = (tab: any) => () => {
    history.push("/");
  };

  if (tabs && tabs.length > 0) {
    return (
      <Breadcrumbs aria-label="breadcrumb" className={classes.root}>
        {
          tabs.map((t: any, index: any) => {
            if (t.name) {
              let IconTab: any = <></>;
              let Item: any = <></>;
              let label = "";
              let labelFull = "";
              labelFull = I18n.t(`${KEY_TRANSLATE}.${t.name}`)
              label = labelFull.length > 20 ? `${labelFull.substr(0, 20)}....` : labelFull;
              if (breakpoint === "xs" || breakpoint === "sm") {
                if (index === tabs.length - 1) {
                  IconTab = ICON['home'];
                  return (
                    <Link color="inherit" onClick={handleClick(t)} className={classes.link}>
                      <IconTab className={classes.icon} />
                      {label}
                    </Link>
                  )
                }
                return ("")
              }

              switch (index) {
                case 0: {
                  IconTab = ICON[t.name];
                  Item = (
                    <Link color="inherit" onClick={handleClick(t)} className={classes.link}>
                      <IconTab className={classes.icon} />
                      {label}
                    </Link>
                  )
                  break;
                }
                case 1: {
                  IconTab = ICON['project'];
                  Item = (
                    <Typography className={classes.link}>
                      <IconTab className={classes.icon} />
                      {label}
                    </Typography>
                  )
                  break;
                }
                case 2: {
                  IconTab = ICON['function'];
                  Item = (
                    <Typography className={classes.link}>
                      <IconTab className={classes.icon} />
                      {label}
                    </Typography>
                  )
                  break;
                }
                default:
                  break;
              }
              if (labelFull.length > 20) {
                return (
                  <Tooltip
                    title={labelFull}
                    placement="top"
                    key={index}
                  >
                    {Item}
                  </Tooltip>
                )
              }
              return (Item)
            } else {
              return <></>
            }
          })
        }
      </Breadcrumbs>
    );
  }
  return <></>
}

export default BreadcrumbsComponent;
export {BreadcrumbsComponent};

