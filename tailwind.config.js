module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sm: "375px",
			xr: "400px",
			lg: "1440px",
		},
		borderRadius: {
			sm: "8px",
		},
		extend: {
			colors: {
				primary: {
					moderateBlue: "hsl(238, 40%, 52%)",
					softRed: "hsl(358, 79%, 66%)",
					lightGrayishBlue: "hsl(239, 57%, 85%)",
					paleRed: "hsl(357, 100%, 86%)",
				},
				neutral: {
					darkBlue: "hsl(212, 24%, 26%)",
					grayishBlue: "hsl(211, 10%, 45%)",
					lightGray: "hsl(223, 19%, 93%)",
					veryLightGray: "hsl(228, 33%, 97%)",
					white: "hsl(0, 0%, 100%)",
				},
			},
			spacing: {
				"8px": "8px",
				"16px": "16px",
				"32px": "32px",
			},
		},
	},
	plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};
