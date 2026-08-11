<script>
	import SocialGroup from './SocialGroup.svelte';
</script>

<section class="section">
	<div id="section-title" class="container hero">
		<h1>
			Hello! My name is
			<span class="glow glow-animated">Amine</span>
		</h1>
		<h2>Software Engineer</h2>
		<div class="hero__profile">
			<div>
				<i class="fa-solid fa-code"></i>
				<h3>Backend Engineering</h3>
			</div>
			<h3 class="hero__dot">•</h3>
			<div>
				<i class="fa-solid fa-gears"></i>
				<h3>Systems Programming</h3>
			</div>
			<h3 class="hero__dot">•</h3>
			<div>
				<i class="fa-solid fa-cube"></i>
				<h3>Computer Graphics</h3>
			</div>
		</div>
		<hr />
		<p>
			<strong>Software Engineer</strong> with 2 years of professional experience building production
			software and backend services. Experienced in <strong>Rust</strong>,
			<strong>TypeScript</strong>, <strong>SvelteKit</strong>, REST APIs, and
			<strong>AWS</strong>, with a strong interest in <strong>systems programming</strong>,
			<strong>computer graphics</strong>, and <strong>performance-oriented software</strong>.
			Academic background in <strong>GPU programming</strong>,
			<strong>computer architecture</strong>, and <strong>embedded systems</strong>.
		</p>
		<div class="hero__socials">
			<SocialGroup></SocialGroup>
		</div>
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
</style>
