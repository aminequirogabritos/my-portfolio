export type ImageItem = {
	url: string;
	alt: string;
};

type ProjectItem = {
	title: string;
	subtitle: string;
	tech: string[];
	description: string;
	images: ImageItem[];
	links: string[];
};

const projects: ProjectItem[] = [
	{
		title: 'Real Time Path Tracer',
		subtitle: 'Computer Engineering Thesis',
		tech: ['WebGL2', 'GLSL', 'Three.js', 'JavaScript', 'Computer Graphics'],
		description: `A physically based path tracer developed from scratch as my Computer Engineering thesis using WebGL2 and GLSL.

		The renderer implements Monte Carlo global illumination with progressive rendering, BVH acceleration structures, importance sampling, Next Event Estimation (NEE), Multiple Importance Sampling (MIS), Russian Roulette, and Cook-Torrance physically based materials.

		The project focuses on GPU programming, rendering algorithms, and performance optimization, exploring techniques commonly used in modern real-time rendering research.`,
		images: [
			{
				url: '/images/path-tracing-1.png',
				alt: 'Cornell Box rendered with Path Tracing algorithm'
			},
			{ url: '/images/path-tracing-2.png', alt: 'Room rendered with Path Tracing algorithm' },
			{ url: '/images/path-tracing-3.png', alt: 'Room rendered with Path Tracing algorithm' }
		],
		links: ['GitHub']
	},
	{
		title: 'RACube',
		subtitle: 'Augmented Reality App',
		tech: ['Unity', 'C#', 'Vuforia', 'Augmented Reality', '3D Graphics'],
		description: `An educational augmented reality application developed with Unity and Vuforia as part of a university research scholarship.

		The application overlays interactive 3D content onto a physical cube using marker-based tracking, allowing students to explore educational material through immersive visualizations. I was responsible for the complete software development process, from concept and UX design to implementation and deployment.`,
		images: [
			{ url: '/images/racube-1.jpg', alt: 'RACube app used at school' },
			{ url: '/images/racube-2.jpg', alt: 'RACube app used at school' },
			{ url: '/images/racube-3.jpg', alt: 'RACube app used at school' },
			{ url: '/images/racube-4.jpg', alt: 'RACube app used at school' }
		],
		links: ['GitHub']
	}
];

export default projects;
