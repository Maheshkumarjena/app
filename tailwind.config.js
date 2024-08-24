


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#f7f7f7',
          dark: '#1c1c1e',
        },
        secondary: {
          light: '#ffffff',
          dark: '#2c2c2e',
        },
        text: {
          light: '#333333',
          dark: '#e5e5e7',
        },
        accent: {
          light: '#0066cc',
          dark: '#ff4081',
        },
        button: {
          light: '#0066cc',
          dark: '#ff4081',
        },
        'button-hover': {
          light: '#004999',
          dark: '#e60073',
        },
      }
      ,
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