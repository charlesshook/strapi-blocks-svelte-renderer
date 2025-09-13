<script>
	const {
		text = '',
		bold = false,
		italic = false,
		underline = false,
		strikethrough = false,
		code = false,
		modifiers
	} = $props();

	let modifiedText = text;

	if (code) {
		modifiedText = `<code>${modifiedText}</code>`;
	}

	if (strikethrough) {
		modifiedText = `<del>${modifiedText}</del>`;
	}

	if (underline) {
		modifiedText = `<u>${modifiedText}</u>`;
	}

	if (italic) {
		modifiedText = `<em>${modifiedText}</em>`;
	}

	if (bold) {
		modifiedText = `<strong>${modifiedText}</strong>`;
	}

	// if (bold) {
	// 	modifiedText = modifiers.bold(modifiedText);
	// }

	// if (italic) {
	// 	modifiedText = modifiers.italic(modifiedText);
	// }

	// if (underline) {
	// 	modifiedText = modifiers.underline(modifiedText);
	// }

	// if (strikethrough) {
	// 	modifiedText = modifiers.strikethrough(modifiedText);
	// }

	// if (code) {
	// 	modifiedText = modifiers.code(modifiedText);
	// }
</script>

{@html modifiedText}
