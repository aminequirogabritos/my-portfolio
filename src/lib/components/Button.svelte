<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';

	interface Props extends Omit<HTMLButtonAttributes, 'href'>, HTMLAnchorAttributes {
		variant?: 'primary' | 'secondary';
		children: Snippet;
		iconLeft?: Snippet;
		iconRight?: Snippet;
		href?: string;
	}

	let {
		variant = 'primary',
		children,
		iconLeft,
		iconRight,
		href,
		class: className = '',
		...rest
	}: Props = $props();

	const elementTag = $derived(href ? 'a' : 'button');
</script>

<svelte:element this={elementTag} {href} class="button button-{variant} {className}" {...rest}>
	{#if iconLeft}
		<span class="icon icon-left">
			{@render iconLeft()}
		</span>
	{/if}

	<span class="btn-text">
		{@render children()}
	</span>

	{#if iconRight}
		<span class="icon icon-right">
			{@render iconRight()}
		</span>
	{/if}
</svelte:element>
