<script>
	import SocialGroup from './SocialGroup.svelte';
</script>

<section class="section">
	<div id="section-title" class="container hero">
		<h1>
			Hello! My name is
			<span class="glow glow-animated">Amine</span>
		</h1>
		<h2>Full-Stack Software Engineer</h2>
		<div class="hero__profile">
			<div>
				<i class="fa-solid fa-code"></i>
				<h3>Front-End Development</h3>
			</div>
			<h3 class="hero__dot">•</h3>
			<div>
				<i class="fa-solid fa-globe"></i>
				<h3>Web Applications</h3>
			</div>
			<h3 class="hero__dot">•</h3>
			<div>
				<i class="fa-solid fa-cube"></i>
				<h3>Computer Graphics</h3>
			</div>
		</div>
		<hr />
		<p>
			<strong>Full-Stack Software Engineer</strong> with 2 years of professional experience
			developing production software in <strong>SvelteKit</strong>, <strong>TypeScript</strong>,
			<strong>Rust</strong>
			and modern web technologies. Experienced developing responsive user interfaces, integrating REST
			APIs, and collaborating across the full stack. Passionate about
			<strong>systems programming</strong>,
			<strong>computer graphics</strong>, and <strong>performance-oriented software</strong>, with a
			strong academic background in <strong>GPU programming</strong>,
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
