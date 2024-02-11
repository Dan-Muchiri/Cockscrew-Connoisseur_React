import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: 'light', // Initial color mode (light or dark)
    useSystemColorMode: false, // Use system color mode (optional)
  },
  fonts: {
    heading: "Playfair Display, serif",
    body: "Montserrat, sans-serif",
  },
  colors: {
    wine: {
      red: "#8B0000", // Deep red, reminiscent of red wine
      white: "#F5F5F5", // Off-white, like the color of wine labels or corks
      gold: "#FFD700", // Golden, representing the richness of wine
    },
  },
  components: {
    Button: {
      // Define button styles
      baseStyle: {
        fontWeight: "bold",
        borderRadius: "full",
      },
      // Define different button variants
      variants: {
        solid: {
          bg: "wine.red", // Background color for light mode
          color: "white", // Text color for light mode
          _hover: {
            bg: "wine.gold", // Background color on hover for light mode
          },
        },
      },
    },
    Text: {
      // Define text styles
      baseStyle: {
        fontFamily: "body",
      },
    },
    Link: {
      // Define link styles
      baseStyle: {
        color: "wine.red",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
});

export default theme;
