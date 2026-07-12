<script>
	import projects from '$lib/data/projects';
	import Carousel from './Carousel.svelte';
</script>

<section class="section">
	<div id="projects" class="container">
		<h2 class="section-title">Projects</h2>
		<ul>
			<hr class="list-separator" />
			{#each projects as project_item}
				<li class="project-item">
					<div class="project-item__content">
						<div class="project-item__image">
							<Carousel images={project_item.images} interval={4000} />
						</div>
						<div class="project-item__description">
							<div class="project-item__header">
								<h3 class="project-item__title">{project_item.title}</h3>
								<span class="project-item__subtitle">{project_item.subtitle}</span>
								<div class="project-item__tech">
									{#each project_item.tech as tech}
										<span class="pill pill-secondary">{tech}</span>
									{/each}
								</div>
							</div>
							<p style="white-space: pre-line;">
								{project_item.description}
							</p>
						</div>
					</div>
				</li>
				<hr class="list-separator" />
			{/each}
		</ul>
	</div>
</section>

<style>
</style>
