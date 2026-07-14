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
					I've developed production software ranging from backend services in Rust to business
					applications, while academically I've focused on computer graphics, rendering, and systems
					programming.
					<br />
					<br />
					I'm particularly interested in opportunities involving backend engineering, graphics programming,
					rendering, or other performance-critical systems where I can continue learning and building
					reliable, efficient software.
				</p>
				<SocialGroup></SocialGroup>
			</div>
		</div>
	</div>
</section>

<style>
</style>
