<script lang="ts">
	import type { ImageItem } from '$lib/data/projects';
	import { onMount, onDestroy } from 'svelte';

	interface Props {
		images: ImageItem[];
		interval?: number;
	}

	let { images = [], interval = 3000 }: Props = $props();

	let currentIndex = $state<number>(0);
	let autoPlayTimer: ReturnType<typeof setInterval> | undefined;

	const nextSlide = (): void => {
		currentIndex = (currentIndex + 1) % images.length;
		resetTimer();
	};

	const prevSlide = (): void => {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
		resetTimer();
	};

	const startTimer = (): void => {
		autoPlayTimer = setInterval(nextSlide, interval);
	};

	const resetTimer = (): void => {
		if (autoPlayTimer) clearInterval(autoPlayTimer);
		startTimer();
	};

	onMount(() => {
		if (images.length > 1) startTimer();
	});

	onDestroy(() => {
		if (autoPlayTimer) clearInterval(autoPlayTimer);
	});
</script>

<div class="carousel-container">
	<div class="carousel-track" style:transform="translateX(-{currentIndex * 100}%)">
		{#each images as img}
			<div class="carousel-slide">
				<img src={img.url} alt={img.alt} loading="lazy" />
			</div>
		{/each}
	</div>

	{#if images.length > 1}
		<button class="nav-btn prev" onclick={prevSlide} aria-label="Anterior"> &#10094; </button>
		<button class="nav-btn next" onclick={nextSlide} aria-label="Siguiente"> &#10095; </button>

		<div class="indicators">
			{#each images as _, i}
				<span class="dot" class:active={i === currentIndex}></span>
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	.carousel-container {
		position: relative;

		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 12px;

		width: 100%;
		aspect-ratio: 1;

		overflow: hidden;

		background: #090909;

		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);

		transition:
			transform 0.25s ease,
			box-shadow 0.25s ease;

		&::after {
			content: '';

			position: absolute;
			inset: 0;

			pointer-events: none;

			box-shadow:
				inset 0 0 0 1px rgba(255, 255, 255, 0.05),
				inset 0 -80px 60px rgba(0, 0, 0, 0.15);
		}
	}

	.project:hover .carousel-container {
		transform: translateY(-2px);

		box-shadow: 0 18px 45px rgba(0, 0, 0, 0.45);
	}

	.carousel-track {
		display: flex;
		width: 100%;
		height: 100%;
		transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
	}

	.carousel-slide {
		min-width: 100%;
		height: 100%;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			user-select: none;
		}
	}
	.nav-btn {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);

		display: flex;
		align-items: center;
		justify-content: center;

		width: 38px;
		height: 38px;

		border-radius: 50%;
		border: 1px solid rgba(255, 255, 255, 0.08);

		background: color-mix(in oklab, var(--background-color) 70%, transparent);
		color: white;

		cursor: pointer;

		backdrop-filter: blur(8px);

		opacity: 0;
		transition:
			opacity 0.2s ease,
			transform 0.2s ease,
			background 0.2s ease,
			border-color 0.2s ease;

		z-index: 10;

		&.prev {
			left: 12px;
		}

		&.next {
			right: 12px;
		}

		&:hover {
			background: var(--primary-700);
			border-color: var(--primary-500);
			transform: translateY(-50%) scale(1.05);
		}
	}

	.carousel-container:hover .nav-btn {
		opacity: 1;
	}

	.indicators {
		position: absolute;
		bottom: 12px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		gap: 4px;

		.dot {
			width: 8px;
			height: 8px;

			border-radius: 999px;

			transition: 0.3s;

			background: rgba(255, 255, 255, 0.2);

			&.active {
				width: 22px;

				background: var(--primary-400);
			}
		}
	}
</style>
