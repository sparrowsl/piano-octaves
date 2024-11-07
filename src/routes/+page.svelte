<script>
	import { get_random_key, play_key } from "$lib/index.js";
	import C5 from "$lib/notes/c5.mp3";

	let random_key = $state(get_random_key());
</script>

<main
	class="flex flex-col gap-20 items-center justify-center h-screen bg-gray-200"
>
	<section>
		<h1 class="text-neutral-800 text-lg">
			Find the <span class="font-bold">&ldquo;{random_key}&rdquo;</span> key
		</h1>
	</section>

	<section>
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
	</section>
</main>
