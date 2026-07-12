type Period = {
	start: Date;
	end: Date;
};

type ExperienceItem = {
	title: String;
	place: String;
	period: Period;
	tech: String[];
	description: String;
};

const experience: ExperienceItem[] = [
	{
		title: 'Fullstack Software Engineer',
		place: 'DC Connected Car GmbH',
		period: {
			start: new Date(2024, 1, 22),
			end: new Date(2026, 0, 10)
		},
		tech: ['Rust', 'Svelte'],
		description: `Developed production backend services in Rust for a connected vehicle platform used by automotive clients. Designed REST APIs with Axum and Tokio, implemented business logic, integrated SQL databases and third-party services, and contributed to cloud deployments on AWS. Also collaborated on frontend development using SvelteKit and TypeScript while working in an Agile team.`
	},
	{
		title: 'Software Developer',
		place: 'Administrative Tribunal of Accounts of San Luis',
		period: {
			start: new Date(2022, 9, 1),
			end: new Date(2023, 9, 31)
		},
		tech: ['Node.js'],
		description: `Developed and maintained internal software used by public administration. Worked on business applications, database integration, feature implementation, and maintenance of existing systems while collaborating with a multidisciplinary team to support day-to-day institutional operations.`
	}
];

export default experience;
