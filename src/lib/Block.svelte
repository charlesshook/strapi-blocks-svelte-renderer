<script>
	import Text from './Text.svelte';
	import Block from './Block.svelte';

	const { content, components, modifiers } = $props();
	const { type, children, ...rest } = content;

	const BlockComponent = components[type];
</script>

{#if BlockComponent}
	<BlockComponent {...rest}>
		{#if children}
			{#if type === 'paragraph' && children.length === 1 && children[0].type === 'text' && children[0].text === ''}
				<br />
			{:else}
				{#each children as child}
					{#if child.type === 'text'}
						<Text {...child} {modifiers} />
					{:else}
						<Block content={child} {components} {modifiers} />
					{/if}
				{/each}
			{/if}
		{/if}
	</BlockComponent>
{/if}
