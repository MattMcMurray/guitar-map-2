import React from "react";
import range from "lodash/range";

import { Box } from "@material-ui/core";

import { NUM_FRETS } from "@/model/String";
import styles from "@/styles/String.module.scss";
import {
  calculateNoteSum,
  convertNoteToString,
  convertStringToNote,
} from "@/util/util";
import Fret from "./Fret";

interface Props {
  baseNote: string;
}

const getFret = (base: string, offset: number) => {
  const baseNote = convertStringToNote(base);
  const note = calculateNoteSum(baseNote, offset);
  const noteString = convertNoteToString(note, true);

  return <Fret note={noteString} key={offset} />;
};

function String({ baseNote }: Props) {
  return (
    <Box className={styles.string}>
      {range(NUM_FRETS).map((interval) => getFret(baseNote, interval))}
    </Box>
  );
}

export default String;
