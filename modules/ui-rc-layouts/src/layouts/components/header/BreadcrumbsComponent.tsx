import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { ICON } from '../../../components';
import { useHistory } from 'react-router-dom';
import Tooltip from "@material-ui/core/Tooltip";

function a11yProps(index: any, tabIndex: any) {
  return {
    id: `simple-tab-${index}`,
    tabIndex,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function BreadcrumbsComponent(props: any) {
  const classes = useStyles();
  const { setTabIndex, tabIndex, tabs = {}, tabIndexIcon = {}, substrMax, breakpoints = "lg" } = props;
  const history = useHistory();
  const handleClick = (tab: any) => () => {
    setTabIndex(tab, history);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={tabIndex}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="simple tabs example"
      >
        {
          tabs.map((t: any, index: any) => {
            if (t.name) {
              let label = "";
              if (breakpoints !== "xs" && breakpoints !== "sm") {
                label = t.display_name && t.display_name.length > 20 ? `${t.display_name.substr(0, (substrMax >= 30 ? 20 : substrMax)).toUpperCase()}....` : t.display_name.toUpperCase();
              }
              return (
                <Tooltip
                  title={t.display_name}
                  placement="top"
                >
                  <Tab
                    icon={t.breadcrumbKey === "app" ? ICON[t.name] : ICON[t.breadcrumbKey]}
                    label={label}
                    onClick={handleClick(t)}
                    {...a11yProps(index, tabIndexIcon.app_icon)}
                  />
                </Tooltip>
              )
            } else {
              return ""
            }
          })
        }
      </Tabs>
    </div>
  );
}

export default BreadcrumbsComponent;
export { BreadcrumbsComponent }
