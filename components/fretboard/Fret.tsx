import { Box, makeStyles, Theme, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import styles from "styles/Fret.module.scss";

interface Props {
  note: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  fret: {
    background: theme.palette.background.default,
    border: `1px solid ${theme.palette.secondary.dark}`,
  },
}));

function Fret({ note }: Props) {
  const classes = useStyles();

  return (
    <Box className={clsx(styles.fret, classes.fret)}>
      <Typography>{note}</Typography>
    </Box>
  );
}

export default Fret;
