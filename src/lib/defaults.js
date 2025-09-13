import Paragraph from './blocks/Paragraph.svelte';
import Heading from './blocks/Heading.svelte';
import List from './blocks/List.svelte';
import Image from './blocks/Image.svelte';
import Quote from './blocks/Quote.svelte';
import Link from './blocks/Link.svelte';
import Code from './blocks/Code.svelte';
import ListItem from './blocks/ListItem.svelte';

export const defaultComponents = {
	paragraph: Paragraph,
	heading: Heading,
	list: List,
	image: Image,
	quote: Quote,
	link: Link,
	code: Code,
	'list-item': ListItem
};

/**
 * @typedef {Object} ModifierProps
 * @property {string} children
 */

/** @type {{ [key: string]: (props: ModifierProps) => string }} */
export const defaultModifiers = {
	bold: ({ children }) => `<strong>${children}</strong>`,
	italic: ({ children }) => `<em>${children}</em>`,
	underline: ({ children }) => `<u>${children}</u>`,
	strikethrough: ({ children }) => `<s>${children}</s>`,
	code: ({ children }) => `<code>${children}</code>`
};
