// styled.d.ts
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColors: {
      blue: string
      grey: string
      white: string

      B500: string
      cdgBlue80: string
      B50: string
      cdgBlue40: string
      grey100: string
      BS120: string
      white
    }
    secondaryColors: {
      blue: string
      orange: string
      red: string
      yellow: string
      green: string

      secondaryButton: string
      cdgBlue60: string
      cdgBlue20: string
      red: red.secondary
      orange
      linkBlue: blue.secondaryLinkBlue

      R100: string
      R500: string
      R400: string
      R50: string

      Y500: string
      Y75: string

      G500: string
      G400: string
      G50: string

      N800: string
      N500: string
      N40: string
      N0: string

      P500: string
      P400: string
      P50: string
    }
    shades: {
      B20: string
    }
    disabled: string
    lightDisabled: string
    textOnDisabled: string
    outline: string

    shadows: {
      light: string
    }

    primaryFontFamily
    secondaryFont
  }
}
