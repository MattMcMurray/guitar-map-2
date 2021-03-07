import { FLAT, Notes, NUM_NOTES, SHARP } from "model/Note";

/**
 * Given a note and an offset, in semitones, return the sum of the base note +
 * the offset.
 *
 * @param baseNote
 * @param semitoneOffset the number of semitones to add to the baseNote
 * @returns {Notes} the result of the sum
 */
const calculateNoteSum = (baseNote: Notes, semitoneOffset: number): Notes => {
  return (baseNote + semitoneOffset) % NUM_NOTES;
};

const convertInputToMusicalSymbol = (input: string): string => {
  let normalizedInput = input.trim();

  if (normalizedInput.length === 2) {
    if (normalizedInput.charAt(1) === "b") {
      return `${normalizedInput.slice(0, 1)}${FLAT}`;
    }

    if (normalizedInput.charAt(1) === "#") {
      return `${normalizedInput.slice(0, 1)}${SHARP}`;
    }
  }

  return normalizedInput;
};

const convertStringToNote = (note: string): Notes => {
  const normalizedNote = convertInputToMusicalSymbol(note).toUpperCase();

  switch (normalizedNote) {
    case `A${FLAT}`:
      return Notes.G_SHARP_A_FLAT;
    case "A":
      return Notes.A;
    case `A${SHARP}`:
      return Notes.A_SHARP_B_FLAT;
    case `B${FLAT}`:
      return Notes.A_SHARP_B_FLAT;
    case "B":
      return Notes.B;
    case "C":
      return Notes.C;
    case `C${SHARP}`:
      return Notes.C_SHARP_D_FLAT;
    case `D${FLAT}`:
      return Notes.C_SHARP_D_FLAT;
    case "D":
      return Notes.D;
    case `D${SHARP}`:
      return Notes.D_SHARP_E_FLAT;
    case `E${FLAT}`:
      return Notes.D_SHARP_E_FLAT;
    case "E":
      return Notes.E;
    case "F":
      return Notes.F;
    case `F${SHARP}`:
      return Notes.F_SHARP_G_FLAT;
    case `G${FLAT}`:
      return Notes.F_SHARP_G_FLAT;
    case "G":
      return Notes.G;
    case `G${SHARP}`:
      return Notes.G_SHARP_A_FLAT;

    default:
      throw new Error(
        `${note} (normalized to: ${normalizedNote}) is invalid input`
      );
  }
};

const convertNoteToString = (
  note: Notes,
  useSharp: boolean = false
): string => {
  switch (note) {
    case Notes.A:
      return "A";
    case Notes.A_SHARP_B_FLAT:
      return useSharp ? `A${SHARP}` : `B${FLAT}`;
    case Notes.B:
      return "B";
    case Notes.C:
      return "C";
    case Notes.C_SHARP_D_FLAT:
      return useSharp ? `C${SHARP}` : `D${FLAT}`;
    case Notes.D:
      return "D";
    case Notes.D_SHARP_E_FLAT:
      return useSharp ? `D${SHARP}` : `E${FLAT}`;
    case Notes.E:
      return "E";
    case Notes.F:
      return "F";
    case Notes.F_SHARP_G_FLAT:
      return useSharp ? `F${SHARP}` : `G${FLAT}`;
    case Notes.G:
      return "G";
    case Notes.G_SHARP_A_FLAT:
      return useSharp ? `G${SHARP}` : `A${FLAT}`;

    default:
      break;
  }
};

export {
  calculateNoteSum,
  convertInputToMusicalSymbol,
  convertStringToNote,
  convertNoteToString,
};
