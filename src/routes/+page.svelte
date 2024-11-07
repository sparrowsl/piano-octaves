<script>
	import { get_sound } from "$lib/index.js";
	import C5 from "$lib/notes/c5.mp3";

	/** @param {"C" | "D" | "E" | "F" | "G" | "A" | "B" | "C#" | "D#" | "F#" | "G#" | "A#"} key */
	async function play_key(key) {
		const sound = get_sound(key);
		await new Audio(sound).play();
	}
</script>

<main class="flex items-center justify-center h-screen bg-gray-200">
	<div class="relative flex items-center space-x-1 shadow-xl">
		<button
			type="button"
			class="white-key bg-white border border-gray-400 relative"
			onclick={() => play_key("C")}
		>
			<p class="absolute bottom-0 w-full text-center font-bold text-xl">C</p>
		</button>

		<button
			type="button"
			class="white-key bg-white border border-gray-400 relative"
		>
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="black-key bg-black rounded-t-lg top-0 relative"
				onclick={() => play_key("C#")}
			>
				<p class="absolute bottom-2 w-full text-center text-white">C#</p>
			</div>
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="flex items-end justify-center absolute bottom-0 top-0 w-full font-bold text-xl"
				onclick={() => play_key("D")}
			>
				D
			</div>
		</button>

		<button
			type="button"
			class="white-key bg-white border border-gray-400 relative"
		>
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="black-key bg-black rounded-t-lg top-0 relative"
				onclick={() => play_key("D#")}
			>
				<p class="absolute bottom-2 w-full text-center text-white">D#</p>
			</div>
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="flex items-end justify-center absolute bottom-0 top-0 w-full font-bold text-xl"
				onclick={() => play_key("E")}
			>
				E
			</div>
		</button>

		<button
			type="button"
			class="white-key bg-white border border-gray-400 relative"
			onclick={() => play_key("F")}
		>
			<p class="absolute bottom-0 w-full text-center font-bold text-xl">F</p>
		</button>

		<button
			type="button"
			class="white-key bg-white border border-gray-400 relative"
		>
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="black-key bg-black rounded-t-lg top-0 relative"
				onclick={() => play_key("F#")}
			>
				<p class="absolute bottom-2 w-full text-center text-white">F#</p>
			</div>
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="flex items-end justify-center absolute bottom-0 top-0 w-full font-bold text-xl"
				onclick={() => play_key("G")}
			>
				G
			</div>
		</button>

		<button
			type="button"
			class="white-key bg-white border border-gray-400 relative"
		>
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="black-key bg-black rounded-t-lg top-0 relative"
				onclick={() => play_key("G#")}
			>
				<p class="absolute bottom-2 w-full text-center text-white">G#</p>
			</div>
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="flex items-end justify-center absolute bottom-0 top-0 w-full font-bold text-xl"
				onclick={() => play_key("A")}
			>
				A
			</div>
		</button>

		<button
			type="button"
			class="white-key bg-white border border-gray-400 relative"
		>
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="black-key bg-black rounded-t-lg top-0 relative"
				onclick={() => play_key("A#")}
			>
				<p class="absolute bottom-2 w-full text-center text-white">A#</p>
			</div>
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="flex items-end justify-center absolute bottom-0 top-0 w-full font-bold text-xl"
				onclick={() => play_key("B")}
			>
				B
			</div>
		</button>

		<button
			type="button"
			class="white-key bg-white border border-gray-400 relative"
			onclick={async () => await new Audio(C5).play()}
		>
			<p class="absolute bottom-0 w-full text-center font-bold text-xl">C</p>
		</button>
	</div>
</main>
