import React, { useState } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Fretboard from "components/fretboard/Fretboard";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  makeStyles,
  SwipeableDrawer,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ChevronLeft, ExpandMore, Menu as MenuIcon } from "@material-ui/icons";
import clsx from "clsx";
import HighlightedNoteChooser from "@/components/controls/HighlightedNoteChooser";
import { MapProvider } from "@/context/MapContext";

const drawerWidth = 350;

const useStyles = makeStyles((theme: Theme) => ({
  drawerContent: {
    width: `${drawerWidth}px`,
    maxWidth: "100vw",
  },
  root: {
    display: "flex",
  },
  appBar: {
    textTransform: "uppercase",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Home() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <MapProvider>
      <div className={classes.root}>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: drawerOpen,
          })}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(!drawerOpen)}
              className={clsx(classes.menuButton, drawerOpen && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography>Guitar Map 2.0</Typography>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          onOpen={() => setDrawerOpen(true)}
          variant="persistent"
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Box className={classes.drawerContent}>
            <div className={classes.drawerHeader}>
              <Typography variant="h6">Control Panel</Typography>
              <IconButton
                color="inherit"
                aria-label="close menu"
                onClick={() => setDrawerOpen(false)}
              >
                <ChevronLeft />
              </IconButton>
            </div>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>Highlight Notes</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <HighlightedNoteChooser />
              </AccordionDetails>
            </Accordion>
          </Box>
        </SwipeableDrawer>

        <div
          className={clsx(classes.content, {
            [classes.contentShift]: drawerOpen,
          })}
        >
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
            <Fretboard />
          </main>

          <footer className={styles.footer}></footer>
        </div>
      </div>
    </MapProvider>
  );
}
