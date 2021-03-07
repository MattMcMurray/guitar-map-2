import { FLAT, Notes, SHARP } from "model/Note";
import {
  calculateNoteSum,
  convertInputToMusicalSymbol,
  convertNoteToString,
  convertStringToNote,
} from "util/util";

describe("Test calculateNoteSum", () => {
  it("should calculate a simple offset from A", () => {
    expect(calculateNoteSum(Notes.A, 3)).toEqual(Notes.C);
  });

  it("should be able to 'wrap around' when given an offset that reaches the end of the enum", () => {
    expect(calculateNoteSum(Notes.G, 3)).toEqual(Notes.A_SHARP_B_FLAT);
  });
});

describe("Test convertInputToMusicalSymbol", () => {
  it("should leave a natural note alone", () => {
    expect(convertInputToMusicalSymbol("a")).toEqual("a");
  });

  it("should convert 'b' into the flat symbol", () => {
    expect(convertInputToMusicalSymbol("ab")).toEqual(`a${FLAT}`);
    expect(convertInputToMusicalSymbol("bb")).toEqual(`b${FLAT}`);
    expect(convertInputToMusicalSymbol("Cb")).toEqual(`C${FLAT}`);
    expect(convertInputToMusicalSymbol("CB")).toEqual("CB");
  });

  it("should spit back garbage input", () => {
    expect(convertInputToMusicalSymbol("lbajdlskfjaslkf")).toEqual(
      "lbajdlskfjaslkf"
    );
  });
});

describe("Test convertStringToNote", () => {
  it("should convert a natural note to its proper enum format", () => {
    expect(convertStringToNote("A")).toEqual(Notes.A);
    expect(convertStringToNote("a")).toEqual(Notes.A);
    expect(convertStringToNote("B")).toEqual(Notes.B);
    expect(convertStringToNote("b")).toEqual(Notes.B);
    expect(convertStringToNote("C")).toEqual(Notes.C);
    expect(convertStringToNote("c")).toEqual(Notes.C);
    expect(convertStringToNote("D")).toEqual(Notes.D);
    expect(convertStringToNote("d")).toEqual(Notes.D);
    expect(convertStringToNote("E")).toEqual(Notes.E);
    expect(convertStringToNote("e")).toEqual(Notes.E);
    expect(convertStringToNote("F")).toEqual(Notes.F);
    expect(convertStringToNote("f")).toEqual(Notes.F);
    expect(convertStringToNote("G")).toEqual(Notes.G);
    expect(convertStringToNote("g")).toEqual(Notes.G);
  });

  it("should convert a accidentals to their proper enum format", () => {
    expect(convertStringToNote("A#")).toEqual(Notes.A_SHARP_B_FLAT);
    expect(convertStringToNote("Bb")).toEqual(Notes.A_SHARP_B_FLAT);
    expect(convertStringToNote("C#")).toEqual(Notes.C_SHARP_D_FLAT);
    expect(convertStringToNote("Db")).toEqual(Notes.C_SHARP_D_FLAT);
    expect(convertStringToNote("D#")).toEqual(Notes.D_SHARP_E_FLAT);
    expect(convertStringToNote("Eb")).toEqual(Notes.D_SHARP_E_FLAT);
    expect(convertStringToNote("F#")).toEqual(Notes.F_SHARP_G_FLAT);
    expect(convertStringToNote("Gb")).toEqual(Notes.F_SHARP_G_FLAT);
    expect(convertStringToNote("g#")).toEqual(Notes.G_SHARP_A_FLAT);
    expect(convertStringToNote(`a${FLAT}`)).toEqual(Notes.G_SHARP_A_FLAT);
  });

  it("should throw an error on invalid input", () => {
    expect(() => convertStringToNote("foo")).toThrow(
      "foo (normalized to: FOO) is invalid input"
    );
  });
});

describe("Test convertNoteToString", () => {
  it("should convert the natural notes to a human readable string", () => {
    expect(convertNoteToString(Notes.A)).toEqual("A");
    expect(convertNoteToString(Notes.B)).toEqual("B");
    expect(convertNoteToString(Notes.C)).toEqual("C");
    expect(convertNoteToString(Notes.D)).toEqual("D");
    expect(convertNoteToString(Notes.E)).toEqual("E");
    expect(convertNoteToString(Notes.F)).toEqual("F");
    expect(convertNoteToString(Notes.G)).toEqual("G");
  });

  it("should convert accidentals to flat by default", () => {
    expect(convertNoteToString(Notes.A_SHARP_B_FLAT)).toEqual(`B${FLAT}`);
    expect(convertNoteToString(Notes.C_SHARP_D_FLAT)).toEqual(`D${FLAT}`);
    expect(convertNoteToString(Notes.D_SHARP_E_FLAT)).toEqual(`E${FLAT}`);
    expect(convertNoteToString(Notes.F_SHARP_G_FLAT)).toEqual(`G${FLAT}`);
    expect(convertNoteToString(Notes.G_SHARP_A_FLAT)).toEqual(`A${FLAT}`);
  });

it("should convert accidentals to sharp when passed the boolean flag", () => {
    expect(convertNoteToString(Notes.A_SHARP_B_FLAT, true)).toEqual(`A${SHARP}`);
    expect(convertNoteToString(Notes.C_SHARP_D_FLAT, true)).toEqual(`C${SHARP}`);
    expect(convertNoteToString(Notes.D_SHARP_E_FLAT, true)).toEqual(`D${SHARP}`);
    expect(convertNoteToString(Notes.F_SHARP_G_FLAT, true)).toEqual(`F${SHARP}`);
    expect(convertNoteToString(Notes.G_SHARP_A_FLAT, true)).toEqual(`G${SHARP}`);
  });
});
