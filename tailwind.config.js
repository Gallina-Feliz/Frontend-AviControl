/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // add this line
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F1AB0F ',  // Azul fuerte, como el del botón de éxito
        secondary: '#9333EA',  // Un morado
        accent: '#EAB308',  // Amarillo dorado
        danger: '#DC2626',  // Rojo
        success: '#16A34A',  // Verde
        warning: '#F59E0B',  // Amarillo
      },
    },
  },
  plugins: [],
};
