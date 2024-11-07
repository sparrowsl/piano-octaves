import A from "./notes/a.mp3";
import ASharp from "./notes/a-sharp.mp3";
import B from "./notes/b.mp3";
import C from "./notes/c.mp3";
import CSharp from "./notes/c-sharp.mp3";
import D from "./notes/d.mp3";
import DSharp from "./notes/d-sharp.mp3";
import E from "./notes/e.mp3";
import F from "./notes/f.mp3";
import FSharp from "./notes/f-sharp.mp3";
import G from "./notes/g.mp3";
import GSharp from "./notes/g-sharp.mp3";

/** @param {"C" | "D" | "E" | "F" | "G" | "A" | "B" | "C#" | "D#" | "F#" | "G#" | "A#"} key */
export const get_sound = (key) => {
	switch (key) {
		case "C":
			return C;
		case "D":
			return D;
		case "E":
			return E;
		case "F":
			return F;
		case "G":
			return G;
		case "A":
			return A;
		case "B":
			return B;
		case "C#":
			return CSharp;
		case "D#":
			return DSharp;
		case "F#":
			return FSharp;
		case "G#":
			return GSharp;
		case "A#":
			return ASharp;
	}
};
