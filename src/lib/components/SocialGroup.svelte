<script lang="ts">
	import Button from './Button.svelte';
	import getSocials from '$lib/data/socials';

	let emailLabel = $state('Copy Email');

	const copyEmail = async () => {
		const user = 'aminequirogabritos';
		const domain = 'gmail.com';

		try {
			await navigator.clipboard.writeText(`${user}@${domain}`);
			emailLabel = 'Copied!';
			setTimeout(() => {
				emailLabel = 'Copy Email';
			}, 2000);
		} catch (err) {
			console.error('Clipboard failed', err);
		}
	};

	const socials = $derived(getSocials(copyEmail));
</script>

<div class="social-group">
	{#each socials as social}
		<Button
			variant="secondary"
			href={social.href}
			target={social.href ? '_blank' : undefined}
			rel={social.href ? 'noopener noreferrer' : undefined}
			onclick={social.action}
		>
			{#if social.iconClass}
				<i class={social.iconClass}></i>
			{/if}
			{social.label === 'Copy Email' ? emailLabel : social.label}
		</Button>
	{/each}
</div>

<style>
	.social-group {
		display: flex;
		gap: 12px;
		flex-wrap: wrap;
	}
</style>
