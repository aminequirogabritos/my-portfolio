export type ImageItem = {
	url: string;
	alt: string;
};

type ProjectItem = {
	title: String;
	subtitle: String;
	tech: String[];
	description: String;
	images: ImageItem[];
	links: String[];
};

const projects: ProjectItem[] = [
	{
		title: 'Path Tracing',
		subtitle: 'Computer Engineering Thesis',
		tech: ['WebGL2', 'GLSL', 'Three.js', 'JavaScript', 'Computer Graphics'],
		description: `A physically based renderer developed as my Computer Engineering thesis. The project implements a GPU path tracer entirely in GLSL running on WebGL2, featuring progressive rendering, BVH acceleration, importance sampling, Next Event Estimation, Multiple Importance Sampling, Cook-Torrance materials, and physically based lighting.
        
        The project combines rendering theory with GPU optimization to achieve interactive performance while maintaining physically accurate light transport.`,
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
		description: `An augmented reality application developed with Unity and Vuforia that overlays interactive 3D models onto a physical cube using image markers. The project explores marker-based tracking, real-time rendering, and user interaction, demonstrating the integration of computer vision with 3D graphics.`,
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
