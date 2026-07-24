<script>
	import SocialGroup from './SocialGroup.svelte';
</script>

<section class="section">
	<div id="about" class="about container">
		<h2 class="section-title">About me</h2>
		<div class="about__content">
			<div class="about__image">
				<img src="images/me.png" alt="Profile" class="about__image-frame glow" />
			</div>
			<div class="about__description">
				<p>
					I'm a software engineer who enjoys solving challenging technical problems and
					understanding how software works across different levels of abstraction. Professionally,
					I've developed production web applications across the full stack, building responsive
					frontend interfaces, backend services, and REST APIs. Outside of work, my academic
					interests include computer graphics, real-time rendering, and systems programming.
					<br />
					<br />
					I'm interested in opportunities where I can build high-quality software, whether that's developing
					modern web applications, working on backend systems, or exploring graphics programming and performance-oriented
					technologies.
				</p>
				<SocialGroup></SocialGroup>
			</div>
		</div>
	</div>
</section>

<style>
</style>
