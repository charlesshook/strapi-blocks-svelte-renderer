<script>
	import { defaultComponents, defaultModifiers } from './defaults.js';
	import Block from './Block.svelte';

	const { content, components = {}, modifiers = {} } = $props();

	const blockComponents = { ...defaultComponents, ...components };
	const blockModifiers = { ...defaultModifiers, ...modifiers };
</script>

{#each content as blockContent}
	<Block components={blockComponents} modifiers={blockModifiers} content={blockContent} />
{/each}
