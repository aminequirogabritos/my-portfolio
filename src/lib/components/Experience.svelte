<script lang="ts">
	import experience from '$lib/data/experience';

	function displayDate(date: Date) {
		return date.toLocaleString('default', {
			month: 'long',
			year: 'numeric'
		});
	}
</script>

<section class="section">
	<div id="experience" class="container">
		<h2 class="section-title">Experience</h2>
		<ul>
			<hr class="list-separator" />
			{#each experience as experience_item}
				<li class="experience-item">
					<div class="experience-item__info">
						<small class="experience-item__period"
							>{displayDate(experience_item.period.start)} - {displayDate(
								experience_item.period.end
							)}</small
						>
						<h3 class="experience-item__title">{experience_item.title}</h3>
						<span class="experience-item__company">{experience_item.place}</span>
						<div class="experience-item__tech">
							{#each experience_item.tech as tech}
								<span class="pill pill-secondary">{tech}</span>
							{/each}
						</div>
					</div>
					<div class="experience-item__description">
						<p style="white-space: pre-line;">
							{experience_item.description}
						</p>
					</div>
				</li>
				<hr class="list-separator" />
			{/each}
		</ul>
	</div>
</section>