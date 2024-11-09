import { get_random_key } from "$lib";

export const show_hints = $state({ value: false });

export const random_key = $state({ value: get_random_key() });

export const info_message = $state({ value: "" });
