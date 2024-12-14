/* eslint-disable no-mixed-spaces-and-tabs */
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
	   fontFamily: {
				sans:["Roboto Mono, monospace"]
		},
  	extend: {
			height: {
				screen:"100dvh"
		},
  		colors: {}
  	}
  },
  // eslint-disable-next-line no-undef
  plugins: [],
};
