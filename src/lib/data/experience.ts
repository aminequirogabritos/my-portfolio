type Period = {
	start: Date;
	end: Date;
};

type ExperienceItem = {
	title: string;
	place: string;
	period: Period;
	tech: string[];
	description: string;
};

const experience: ExperienceItem[] = [
	{
		title: 'Full-Stack Software Engineer',
		place: 'DC Connected Car GmbH',
		period: {
			start: new Date(2024, 1, 22),
			end: new Date(2026, 0, 10)
		},
		tech: ['Rust', 'Axum', 'Tokio', 'PostgreSQL', 'AWS', 'SvelteKit', 'TypeScript'],
		description: `Developed production software for a connected vehicle platform, primarily building asynchronous backend services in Rust using Axum, Tokio, and SQLx. Integrated PostgreSQL and AWS services (S3, CloudWatch, ECS), contributed AI-powered features through the OpenAI and ElevenLabs APIs, and collaborated on responsive frontend applications built with SvelteKit and TypeScript in an Agile development environment.`
	},
	{
		title: 'Software Developer',
		place: 'Administrative Tribunal of Accounts of San Luis',
		period: {
			start: new Date(2022, 9, 1),
			end: new Date(2023, 9, 31)
		},
		tech: ['JavaScript', 'Node.js', 'Express', 'MySQL', 'Prisma', 'HTML', 'CSS', 'Bootstrap'],
		description: `Developed an automated bank reconciliation system for the public sector using Node.js, Express, MySQL, and Prisma ORM. Implemented PDF parsing and data extraction pipelines, designed relational databases, and automated financial reconciliation workflows that significantly reduced manual processing. I also built internal web interfaces and collaborated closely with accounting staff to translate business requirements into reliable software solutions.`
	}
];

export default experience;
