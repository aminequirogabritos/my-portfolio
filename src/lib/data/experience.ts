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
		title: 'Fullstack Software Engineer',
		place: 'DC Connected Car GmbH',
		period: {
			start: new Date(2024, 1, 22),
			end: new Date(2026, 0, 10)
		},
		tech: ['Rust', 'Axum', 'Tokio', 'SvelteKit', 'TypeScript', 'PostgreSQL', 'AWS'],
		description: `Developed production software for a connected vehicle platform, building asynchronous backend services in Rust with Axum and Tokio. Designed REST APIs, implemented business logic, managed PostgreSQL databases with sqlx, and integrated AWS services including S3, CloudWatch, and ECS. I also contributed to frontend development with SvelteKit and TypeScript, integrated AI-powered features using OpenAI and ElevenLabs APIs, and collaborated in an Agile team using GitHub-based workflows.`
	},
	{
		title: 'Software Developer',
		place: 'Administrative Tribunal of Accounts of San Luis',
		period: {
			start: new Date(2022, 9, 1),
			end: new Date(2023, 9, 31)
		},
		tech: ['Node.js', 'Express', 'MySQL', 'Prisma'],
		description: `Developed an automated bank reconciliation system for the public sector using Node.js, Express, MySQL, and Prisma ORM. Implemented PDF parsing and data extraction pipelines, designed relational databases, and automated financial reconciliation workflows that significantly reduced manual processing. I also built internal web interfaces and collaborated closely with accounting staff to translate business requirements into reliable software solutions.`
	}
];

export default experience;
