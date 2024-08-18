/** @type {import('tailwindcss').Config} */

function range(start, end, increment = 1) {
  const count = Math.floor((end - start + increment) / increment);
  return Array(count).fill(0).map((_, idx) => start + idx * increment);
}

function range1(start, end, increment = 10) {
  const count = Math.floor((end - start + 1 / increment) * increment);
  return Array(count).fill(0).map((_, idx) => start + idx / increment);
}

const minFont = 5;
const maxFont = 80;

const minPixel = 0;
const maxPixel = 1500;

const minFontWeight = 100;
const maxFontWeight = 1000;

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    screens: {
      sx: '450px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },

    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        unset: '#00000000',
      },

      fontWeight: {
        ...range(minFontWeight, maxFontWeight, 100).reduce((merged, f) => (
          { ...merged, [f]: `${f}` }
        ), {})
      },

      borderRadius: {
        DEFAULT: '5px',
        ...range(0, 100).reduce((merged, f) => ({ ...merged, [f]: `${f}px !important` }), {}),
      }
    },

    fontSize: {
      ...range(minFont, maxFont).reduce((merged, f) => ({ ...merged, [f]: `${f}px !important` }), {}),
      ...range1(0.5, 5, 10).reduce((merged, f) => ({ ...merged, [f + 'r']: `${f}rem !important` }), {})
    },

    spacing: {
      ...range(minPixel, maxPixel).reduce((merged, f) => ({ ...merged, [f]: `${f}px !important` }), {}),
      ...range(1, 100).reduce((merged, f) => ({ ...merged, [f + 'vw']: `${f}vw !important` }), {}),
      ...range(1, 100).reduce((merged, f) => ({ ...merged, [f + 'vh']: `${f}vh !important` }), {}),
      ...range(1, 500).reduce((merged, f) => ({ ...merged, [f + '%']: `${f}% !important` }), {}),
      ...range1(0.5, 5, 10).reduce((merged, f) => ({ ...merged, [f + 'r']: `${f}rem !important` }), {})
    },

    maxWidth: {
      ...range(minPixel, maxPixel).reduce((merged, f) => ({ ...merged, [f]: `${f}px !important` }), {}),
      ...range(1, 100).reduce((merged, f) => ({ ...merged, [f + 'vw']: `${f}vw !important` }), {}),
      ...range(1, 500).reduce((merged, f) => ({ ...merged, [f + '%']: `${f}% !important` }), {})
    },

    minWidth: {
      ...range(minPixel, maxPixel).reduce((merged, f) => ({ ...merged, [f]: `${f}px !important` }), {}),
      ...range(1, 100).reduce((merged, f) => ({ ...merged, [f + 'vw']: `${f}vw !important` }), {}),
      ...range(1, 500).reduce((merged, f) => ({ ...merged, [f + '%']: `${f}% !important` }), {})
    },

    maxHeight: {
      ...range(minPixel, maxPixel).reduce((merged, f) => ({ ...merged, [f]: `${f}px !important` }), {}),
      ...range(1, 100).reduce((merged, f) => ({ ...merged, [f + 'vh']: `${f}vh !important` }), {}),
      ...range(1, 500).reduce((merged, f) => ({ ...merged, [f + '%']: `${f}% !important` }), {})
    },

    minHeight: {
      ...range(minPixel, maxPixel).reduce((merged, f) => ({ ...merged, [f]: `${f}px !important` }), {}),
      ...range(1, 100).reduce((merged, f) => ({ ...merged, [f + 'vh']: `${f}vh !important` }), {}),
      ...range(1, 500).reduce((merged, f) => ({ ...merged, [f + '%']: `${f}% !important` }), {})
    },

    zIndex: {
      ...range(0, 99).reduce((merged, f) => ({ ...merged, [f]: `${f}` }), {}),
      ...range(100, 990, 10).reduce((merged, f) => ({ ...merged, [f]: `${f}` }), {}),
      ...range(1000, 10000, 100).reduce((merged, f) => ({ ...merged, [f]: `${f}` }), {}),
    },

    borderWidth: {
      DEFAULT: '1px',
      ...range(0, 50).reduce((merged, f) => ({ ...merged, [f]: `${f}px !important` }), {}),
    },
  },

  plugins: []
}