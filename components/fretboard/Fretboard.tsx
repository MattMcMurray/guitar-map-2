import React from "react";
import String from "./String";
import styles from "@/styles/Fretboard.module.scss";
import { Box } from "@material-ui/core";

interface Props {}

function Fretboard(props: Props) {
  const {} = props;

  return (
    <Box className={styles.fretboard}>
      <String baseNote="E" />
      <String baseNote="B" />
      <String baseNote="G" />
      <String baseNote="D" />
      <String baseNote="A" />
      <String baseNote="E" />
    </Box>
  );
}

export default Fretboard;
