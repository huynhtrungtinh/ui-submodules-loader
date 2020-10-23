import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
  ProjectsContainers,
  FunctionsContainers,
  FunctionsTasksContainers,
} from '../../../components'
import { useRouteMatch } from 'react-router';

interface ITabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: ITabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function BreadcrumbsItemComponent(props: any) {
  const classes = useStyles();
  const { tabs = [], tabIndex = - 1, children,
    createBreadcrumbsByPathName = () => null,
    projectsParent = [], functionsParent = []
  } = props;
  const match = useRouteMatch();

  React.useEffect(() => {
    createBreadcrumbsByPathName({ match })
  }, [projectsParent, functionsParent])

  if (tabs[0] && tabs.length === 3 && tabs[0].breadcrumbKey === "app" && tabs[1].breadcrumbKey === "project") {
    return (
      <div className={classes.root}>
        {
          tabs.map((t: any, index: any) => {
            if (t.breadcrumbKey === "function") {
              return (
                <TabPanel value={tabIndex} index={index}>
                  {children && children}
                </TabPanel>
              )
            } else if (t.breadcrumbKey === "app") {
              return (
                <TabPanel value={tabIndex} index={index}>
                  <ProjectsContainers />
                </TabPanel>
              )
            } else if (t.breadcrumbKey === "project") {
              return (
                <TabPanel value={tabIndex} index={index}>
                  <FunctionsTasksContainers />
                </TabPanel>
              )
            } else {
              return <></>
            }
          })
        }
      </div>
    )
  } else if (tabs && tabs.length === 2 && tabs[0].breadcrumbKey === "app" && tabs[1].breadcrumbKey === "function") {
    return (
      <div className={classes.root}>
        {
          tabs.map((t: any, index: any) => {
            if (t.breadcrumbKey === "function") {
              return (
                <TabPanel value={tabIndex} index={index}>
                  {children && children}
                </TabPanel>
              )
            } else if (t.breadcrumbKey === "app") {
              return (
                <TabPanel value={tabIndex} index={index}>
                  <FunctionsContainers />
                </TabPanel>
              )
            } else {
              return <></>
            }
          })
        }
      </div>
    )
  } else if (tabs && tabs.length === 1 && tabs[0].breadcrumbKey === "app") {
    return (
      <div className={classes.root}>
        <TabPanel value={tabIndex} index={0}>
          <FunctionsContainers />
        </TabPanel>
      </div>
    )
  } else {
    return (
      <div className={classes.root} />
    )
  }
}

export default BreadcrumbsItemComponent;
export { BreadcrumbsItemComponent }
