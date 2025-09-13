<script>
	const { url, children } = $props();
</script>

<a href={url} target="_blank" rel="noopener noreferrer">
	{@render children()}
</a>
