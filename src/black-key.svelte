<script>
	import { show_hints } from "$lib/config.svelte.js";
	import { play_key } from "$lib/index.js";

	/** @type {{key_name: import("$lib/index.js").keys }} */
	const { key_name } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	role="button"
	tabindex="0"
	class="black-key block bg-black rounded-t-lg top-0 relative"
	onclick={() => play_key(key_name)}
>
	{#if show_hints.value}
		<p class="absolute bottom-2 w-full text-center text-white">{key_name}</p>
	{/if}
</div>
