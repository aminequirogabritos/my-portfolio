<section class="section">
	<div id="section-title" class="container">
		<div></div>
		<h1>
			Hello! My name is
			<span class="hero-name">Amine</span>
		</h1>
		<h2>Computer Engineer (Thesis in Progress)</h2>
		<p>
			Backend software engineer with professional experience building production applications in
			Rust and modern web technologies. Passionate about computer graphics, rendering, and systems
			programming, with a strong academic background in GPU algorithms, computer architecture, and
			low-level software.
		</p>
		<div>↓ ↓ ↓</div>
	</div>
</section>

<style>
	section {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: transparent;
	}

	.hero-name {
		color: var(--primary-300);

		text-shadow:
			0 0 4px var(--primary-500),
			0 0 12px color-mix(in oklab, var(--primary-500) 70%, transparent),
			0 0 28px color-mix(in oklab, var(--primary-400) 40%, transparent);

		animation: glow 2.8s ease-in-out infinite;
	}

	@keyframes glow {
		0%,
		100% {
			text-shadow:
				0 0 4px var(--primary-500),
				0 0 12px color-mix(in oklab, var(--primary-500) 60%, transparent),
				0 0 24px color-mix(in oklab, var(--primary-400) 25%, transparent);
		}

		50% {
			text-shadow:
				0 0 8px var(--primary-400),
				0 0 20px var(--primary-300),
				0 0 40px var(--primary-300);
		}
	}
</style>
