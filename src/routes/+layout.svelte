<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/styles/app.scss';

	let { children } = $props();
</script>

<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
/>

<svelte:head>
	<title>Amine Quiroga Britos - Portfolio</title>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
