<script>
	import SocialGroup from './SocialGroup.svelte';
</script>

<section class="section">
	<div id="section-title" class="container hero">
		<h1>
			Hello! My name is
			<span class="glow glow-animated">Amine</span>
		</h1>
		<h2>Backend Software Engineer</h2>
		<div class="hero__profile">
			<div>
				<i class="fa-solid fa-cube"></i>
				<h3>Computer Graphics</h3>
			</div>
			<h3 class="hero__dot">•</h3>
			<div>
				<i class="fa-solid fa-code"></i>
				<h3>Systems Programming</h3>
			</div>
			<h3 class="hero__dot">•</h3>
			<div>
				<i class="fa-solid fa-microchip"></i>
				<h3>Embedded Systems</h3>
			</div>
		</div>
		<hr />
		<p>
			<strong>Backend Software Engineer</strong> with 2 years of professional experience developing
			production software in <strong>Rust</strong> and modern web technologies. Passionate about
			<strong>systems programming</strong>, <strong>computer graphics</strong>, and
			<strong>performance-oriented software</strong>, with a strong academic background in
			<strong>GPU programming</strong>, <strong>computer architecture</strong>, and
			<strong>embedded systems</strong>.
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
