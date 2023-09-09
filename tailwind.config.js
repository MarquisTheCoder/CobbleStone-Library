/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		colors: {
			background: '#F4F4F2'
		},
		extend: {
			fontFamily: {
				primary: ['Inter']
			},
			colors: {
				background: '#F4F4F2'
			}
		}
	},
	plugins: []
};
