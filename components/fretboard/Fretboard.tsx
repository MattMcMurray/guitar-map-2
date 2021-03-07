import React from "react";
import String from "./String";

interface Props {}

function Fretboard(props: Props) {
  const {} = props;

  return (
    <>
      <String baseNote="E" />
      <String baseNote="E" />
      <String baseNote="E" />
      <String baseNote="E" />
      <String baseNote="E" />
      <String baseNote="E" />
    </>
  );
}

export default Fretboard;
