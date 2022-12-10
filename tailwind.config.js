/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  daisyui: {
    themes: [
      
      {
        mytheme: {
        
"primary": "#1B1C41",
        
"secondary": "#E62B36",

"hoverRed" : "#87000D",
        
"accent": "#0f0c29",
        
"neutral": "#302b63",
        
"base-100": "#FFFFFF",
        
"info": "#3ABFF8",
        
"success": "#36D399",
        
"warning": "#FBBD23",
        
"error": "#F87272",
        },
      },
    ],},
  plugins: [require("daisyui")],
}