<script>
import { random_key, show_hints, info_message } from "$lib/config.svelte.js";
import { play_key } from "$lib/index.js";
import BlackKey from "./black-key.svelte";
import PlainWhiteKey from "./plain-white-key.svelte";
</script>

<main
	class="flex flex-col gap-10 items-center justify-center min-h-screen bg-gray-200"
>
	<section>
		<h1 class="text-neutral-800 text-lg">
			Find the <span class="font-bold">&ldquo;{random_key.value}&rdquo;</span> key
		</h1>
		<div>
			<p class="text-sm">
				Show Hints:
				<input
					type="checkbox"
					class="rounded"
					bind:checked={show_hints.value}
				/>
			</p>
			<p>Info: {info_message.value || "N/A"}</p>
		</div>
	</section>

	<section>
		<div class="relative flex items-center space-x-1 shadow-xl">
			<PlainWhiteKey key_name={"C"} />

			<button
				type="button"
				class="white-key bg-white border border-gray-400 relative"
			>
				<BlackKey key_name={"C#"} />
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					class="flex items-end justify-center absolute bottom-0 top-0 w-full font-bold text-xl"
					onclick={() => play_key("D")}
				>
					{#if show_hints.value}
						D
					{/if}
				</div>
			</button>

			<button
				type="button"
				class="white-key bg-white border border-gray-400 relative"
			>
				<BlackKey key_name={"D#"} />
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					class="flex items-end justify-center absolute bottom-0 top-0 w-full font-bold text-xl"
					onclick={() => play_key("E")}
				>
					{#if show_hints.value}
						E
					{/if}
				</div>
			</button>

			<PlainWhiteKey key_name={"F"} />

			<button
				type="button"
				class="white-key bg-white border border-gray-400 relative"
			>
				<BlackKey key_name={"F#"} />
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					class="flex items-end justify-center absolute bottom-0 top-0 w-full font-bold text-xl"
					onclick={() => play_key("G")}
				>
					{#if show_hints.value}
						G
					{/if}
				</div>
			</button>

			<button
				type="button"
				class="white-key bg-white border border-gray-400 relative"
			>
				<BlackKey key_name={"G#"} />
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					class="flex items-end justify-center absolute bottom-0 top-0 w-full font-bold text-xl"
					onclick={() => play_key("A")}
				>
					{#if show_hints.value}
						A
					{/if}
				</div>
			</button>

			<button
				type="button"
				class="white-key bg-white border border-gray-400 relative"
			>
				<BlackKey key_name={"A#"} />
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					class="flex items-end justify-center absolute bottom-0 top-0 w-full font-bold text-xl"
					onclick={() => play_key("B")}
				>
					{#if show_hints.value}
						B
					{/if}
				</div>
			</button>

			<PlainWhiteKey key_name={"C5"} />
		</div>
	</section>
</main>
