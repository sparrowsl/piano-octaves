import C5 from "$lib/notes/c5.mp3";
import ASharp from "./notes/a-sharp.mp3";
import A from "./notes/a.mp3";
import B from "./notes/b.mp3";
import CSharp from "./notes/c-sharp.mp3";
import C from "./notes/c.mp3";
import DSharp from "./notes/d-sharp.mp3";
import D from "./notes/d.mp3";
import E from "./notes/e.mp3";
import FSharp from "./notes/f-sharp.mp3";
import F from "./notes/f.mp3";
import GSharp from "./notes/g-sharp.mp3";
import G from "./notes/g.mp3";

import { info_message, random_key } from "./config.svelte.js";

/** @typedef {"C" | "D" | "E" | "F" | "G" | "A" | "B" | "C#" | "D#" | "F#" | "G#" | "A#"} keys */

/** @param {keys} key */
export async function play_key(key) {
	const sound = get_sound(key);
	await new Audio(sound).play();

	check_correct_key(key);
}

/**
 * Checks if the key pressed is the same as the random key.
 *
 * @param {string} key
 */
function check_correct_key(key) {
	if (random_key.value === key) {
		info_message.value = "Correct Key";
	} else {
		info_message.value = "Wrong Key";
	}

	random_key.value = get_random_key();
}

/** @param {keys} key */
function get_sound(key) {
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
		default:
			return C5;
	}
}

const keys = ["C", "D", "E", "F", "G", "A", "B", "C#", "D#", "F#", "G#", "A#"];

export function get_random_key() {
	const idx = Math.floor(Math.random() * keys.length);
	return keys[idx];
}
