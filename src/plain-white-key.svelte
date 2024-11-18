<script>
	import { show_hints } from "$lib/config.svelte.js";
	import { play_key } from "$lib/index.js";

	/** @type {{key_name: import("$lib/index.js").keys }} */
	const { key_name } = $props();
</script>

<button
	type="button"
	class="white-key bg-white border border-gray-400 relative"
	onclick={() => play_key(key_name)}
>
	{#if show_hints.value}
		<p class="absolute bottom-0 w-full text-center font-bold text-xl">
			{String(key_name) === "C5" ? "C" : key_name}
		</p>
	{/if}
</button>
