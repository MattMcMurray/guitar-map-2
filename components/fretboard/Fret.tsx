import { useMapState } from "@/context/MapContext";
import { convertStringToNote } from "@/util/util";
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
  highlighted: {
    background: theme.palette.secondary.light,
    color: theme.palette.common.white,
  },
}));

function Fret({ note }: Props) {
  const classes = useStyles();
  const { highlightedNotes } = useMapState();

  return (
    <Box
      className={clsx(styles.fret, classes.fret, {
        [classes.highlighted]:
          highlightedNotes.indexOf(convertStringToNote(note)) >= 0,
      })}
    >
      <Typography>{note}</Typography>
    </Box>
  );
}

export default Fret;
