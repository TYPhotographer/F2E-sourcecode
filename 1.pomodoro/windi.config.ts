import { defineConfig } from 'vite-plugin-windicss'
import defaultColors from 'windicss/colors'

const gray = {
  50: '#FCFCFC',
  100: '#EAEAEA',
  200: '#ACACAC',
  300: '#6E6E6E',
  400: '#606060',
  500: '#414141',
  600: '#333333',
}
export default defineConfig({
  theme: {
    colors: {
      ...defaultColors,
      gray,
      primary: '#EA5548',
      success: '#B5E254',
    },
  },
})