/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				"main-grey": "#ACACAC",
        "main-green": "#70D4A7",
        "darker-green": "#147147",
        "darker-grey": "#9C9C9C"
			},
		},
	},
	plugins: [],
};
