import { Box, makeStyles, Theme } from "@material-ui/core";
import { NUM_FRETS } from "model/String";
import React from "react";
import Fret from "./Fret";
import range from "lodash/range";
import styles from "styles/String.module.scss";

interface Props {
  baseNote: string;
}

function String({ baseNote }: Props) {
  return (
    <Box className={styles.string}>
      {range(NUM_FRETS).map((interval) => (
        <Fret note={baseNote} />
      ))}
    </Box>
  );
}

export default String;