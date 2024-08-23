


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Define custom font families
        heading: ['Poppins', 'sans-serif'], // For headings
        body: ['Roboto', 'sans-serif'], // For body text
        accent: ['Montserrat', 'sans-serif'], // For accent text
        code: ['Courier New', 'monospace'], // For code or monospaced text
        special: ['Dancing Script', 'cursive'], // For special sections
      },
      colors: {
        'primary-orange': '#FF5722',
      },
      screens: {
        'xsm': '450px',   // Extra Small screen size
        'sm': '640px',    // Small screen size (default)
        'md': '768px',    // Medium screen size (default)
        'lg': '1024px',   // Large screen size (default)
        'xl': '1280px',   // Extra Large screen size (default)
        'xxl': '1536px',  // Extra Extra Large screen size
      },
    },
  },
  plugins: [],
}