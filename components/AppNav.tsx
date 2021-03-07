import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import styles from "styles/AppNav.module.scss";

interface Props {}

function AppNav(props: Props) {
  const {} = props;

  return (
    <AppBar position="static" className={styles["app-nav"]}>
      <Toolbar>
        <Typography>Guitar Map 2.0</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default AppNav;
