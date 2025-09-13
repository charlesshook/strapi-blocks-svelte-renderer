# Strapi blocks renderer for Svelte

## Work in progress

This project is currently a work in progress and not fully complete. Suggestions are welcomed!

## Installation

```bash
npm install @charlesshook/strapi-blocks-svelte-renderer --save
```

## Components

- **Blocks**
  - paragraph
  - heading
  - list
  - quote
  - code
  - image
  - link
- **Modifiers**
  - bold
  - italic
  - underline
  - strikethrough
  - code

## Usage

```svelte
<script>
	import BlockRenderer from '@charlesshook/strapi-blocks-svelte-renderer';

	const content = [
		{ type: 'h1', level: 2, children: [{ text: 'My great title!' }] },
		{ type: 'paragraph', children: [{ text: 'Strapi blocks renderer in Svelte!' }] },
		{ type: 'paragraph', children: [{ text: 'This is cool!' }] }
	];
</script>

<BlockRenderer {content} />
```

## Custom components
Coming soon...

## Custom modifiers
Coming soon...

## Development

### Test locally

At the root of the project directory run:

```
npm link
```

Inside the project that you want to add this package to:

```
npm link @charlesshook/strapi-blocks-svelte-renderer
```
