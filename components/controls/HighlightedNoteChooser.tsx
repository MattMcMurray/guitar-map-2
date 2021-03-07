import { ActionType, useMapDispatch, useMapState } from "@/context/MapContext";
import { FLAT, Notes, SHARP } from "@/model/Note";
import { Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";
import React from "react";

function HighlightedNoteChooser() {
  const { highlightedNotes } = useMapState();
  const dispatch = useMapDispatch();

  const onNoteChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    let newHighlightedNotes = [...highlightedNotes];
    const intValue = parseInt(event.target.value);

    if (checked) {
      newHighlightedNotes.push(intValue as Notes);
    } else {
      newHighlightedNotes = newHighlightedNotes.filter(v => v !== intValue)
    }

    dispatch({
      type: ActionType.UPDATE_HIGHLIGHTED_NOTES,
      payload: {
        highlightedNotes: newHighlightedNotes,
      },
    });
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={highlightedNotes.indexOf(Notes.A) >= 0}
            onChange={onNoteChange}
            color="primary"
            value={Notes.A}
          />
        }
        label="A"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={highlightedNotes.indexOf(Notes.A_SHARP_B_FLAT) >= 0}
            onChange={onNoteChange}
            color="primary"
            value={Notes.A_SHARP_B_FLAT}
          />
        }
        label={`A${SHARP} / B${FLAT}`}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={highlightedNotes.indexOf(Notes.B) >= 0}
            onChange={onNoteChange}
            color="primary"
            value={Notes.B}
          />
        }
        label="B"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={highlightedNotes.indexOf(Notes.C) >= 0}
            onChange={onNoteChange}
            color="primary"
            value={Notes.C}
          />
        }
        label="C"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={highlightedNotes.indexOf(Notes.C_SHARP_D_FLAT) >= 0}
            onChange={onNoteChange}
            color="primary"
            value={Notes.C_SHARP_D_FLAT}
          />
        }
        label={`C${SHARP} / D${FLAT}`}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={highlightedNotes.indexOf(Notes.D) >= 0}
            onChange={onNoteChange}
            color="primary"
            value={Notes.D}
          />
        }
        label="D"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={highlightedNotes.indexOf(Notes.D_SHARP_E_FLAT) >= 0}
            onChange={onNoteChange}
            color="primary"
            value={Notes.D_SHARP_E_FLAT}
          />
        }
        label={`D${SHARP} / E${FLAT}`}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={highlightedNotes.indexOf(Notes.E) >= 0}
            onChange={onNoteChange}
            color="primary"
            value={Notes.E}
          />
        }
        label="E"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={highlightedNotes.indexOf(Notes.E) >= 0}
            onChange={onNoteChange}
            color="primary"
            value={Notes.F}
          />
        }
        label="F"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={highlightedNotes.indexOf(Notes.F_SHARP_G_FLAT) >= 0}
            onChange={onNoteChange}
            color="primary"
            value={Notes.F_SHARP_G_FLAT}
          />
        }
        label={`F${SHARP} / G${FLAT}`}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={highlightedNotes.indexOf(Notes.G) >= 0}
            onChange={onNoteChange}
            color="primary"
            value={Notes.G}
          />
        }
        label="G"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={highlightedNotes.indexOf(Notes.G_SHARP_A_FLAT) >= 0}
            onChange={onNoteChange}
            value={Notes.G_SHARP_A_FLAT}
            color="primary"
          />
        }
        label={`G${SHARP} / A${FLAT}`}
      />
    </FormGroup>
  );
}

export default HighlightedNoteChooser;
