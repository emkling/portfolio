module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: { 
    extend: {
      backgroundImage:{
        'gradient-one': 'radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), radial-gradient(at 50% 100%, hsla(225,39%,25%,1) 0, transparent 50%)',
        'gradient-two': 'radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%)',
        'gradient-three': 'radial-gradient(at 0% 100%, hsla(253,16%,7%,1) 0, transparent 50%),  radial-gradient(at 50% 0%, hsla(225,39%,25%,1) 0, transparent 50%)',

      }
    },
  },
  plugins: [],
}
