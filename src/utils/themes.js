import { orange, red, yellow, green, blue, grey, neutral, purple } from "./colors";
import { lightShadow } from "./shadows";
import { primaryFontFamily, secondaryFont } from "./typography";

export const defaultTheme = {
  primaryColors: {
    blue: blue[100],
    orange: orange[60],
    red: red[60],
    yellow: yellow[100],
    green: green[60],
    white: grey[0],
  },
  secondaryColors: {
    blue: blue[100],
    red: red[60],
    white: grey[0],

    linkBlue: blue.secondaryLinkBlue,
  },
  hoveredColors: {
    button: blue[120],
    control: blue[20],
  },
  disabledColors: {
    text: grey[60],
    control: grey.disabled[40],
    button: grey[20],
  },
  outline: grey[20],
  
  shadows: {
    light: lightShadow,
  },

  primaryFontFamily,
  secondaryFont,
};

export const darkTheme = {};
