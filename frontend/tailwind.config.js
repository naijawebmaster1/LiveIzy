module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" , './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    		fontSize: {
      'xs': '10px',
      'sm': '12px',
      'tiny': '14px',
      'base': '16px',
      'lg': '18px',
      'xl': '24px',
      '2xl': '32px',
      '3xl': ['46px', '56px'],
      '4xl': '48px',
      '5xl': ['56px', '68px'],
      '6xl': '4rem',
      '7xl': '5rem',
		},
		colors: {

			blue: {
				light: "#A65FC3",
				100: "#81668F",
				300: "#9884A4",
				600: "#9140BB",
				500: "#8E3DBB",
				900: "#10609F",
			},
			green: {
				light: "#A65FC3",
				100: "#90EE90",
				800: "#006400",
				900: "#61C690",
			},
			red: {
				light: "#A65FC3",
				100: "#BA4C15",
				200: "#C8202D",
				800: "#FFEEE5",
			},

			black: "#262626",
			offblack: "#052137",
			white: "#fff",
			yellow: "#FFF382",
			teal: "#FCF7FF",
			gold: "#ED8448",
			gray: {
				light: "#6a6a6a",
				100: "#F9F2FC",
				200: "#F6F3F8",
				300: "#F7E5FF",
				500: "#718096",
				600: "#B1A3B8",
				900: "#FCFAFC",
			},
		},

    extend: {},
  },
  plugins: [
	// ...
	require('@tailwindcss/forms'),
	require('tw-elements/dist/plugin'),
	// require("daisyui")

  ],
}