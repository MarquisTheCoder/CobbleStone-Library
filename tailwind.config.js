/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
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
				primary: ['Syne']
			},
			colors: {
				background: '#F4F4F2',
				white: '#ffffff',
				purple: '#3f3cbb',
				midnight: '#121063',
				metal: '#565584',
				tahiti: '#3ab7bf',
				silver: '#ecebff',
				'bubble-gum': '#ff77e9',
				bermuda: '#78dcca',
				black: colors.black,
				gray: colors.gray,
				emerald: colors.emerald,
				indigo: colors.indigo,
				yellow: colors.yellow
			}
		}
	},
	plugins: []
};
