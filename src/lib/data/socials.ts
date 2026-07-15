export interface SocialLink {
	label: string;
	iconClass?: string;
	href?: string;
	action?: () => void;
}

const getSocials = (copyEmailCallback: () => void): SocialLink[] => [
	{
		label: 'LinkedIn',
		iconClass: 'fa-brands fa-linkedin',
		href: 'https://www.linkedin.com/in/amine-quiroga-britos'
	},
	{
		label: 'GitHub',
		iconClass: 'fa-brands fa-github-alt',
		href: 'https://github.com/aminequirogabritos'
	},
	{
		label: 'Download CV',
		iconClass: 'fa-solid fa-file',
		href: 'assets/resume.pdf'
	},
	{
		label: 'Copy Email',
		iconClass: 'fa-solid fa-envelope',
		action: copyEmailCallback
	}
];

export default getSocials;
