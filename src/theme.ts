import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      body: {
        padding: "0",
        margin: "0",
        height: "100vh",
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage:
          "url('https://images.pexels.com/photos/6101957/pexels-photo-6101957.jpeg')",
        fontFamily: "Ubuntu",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    }
  },
  colors: {
    primary: {
      50: "#FFF9BD",
      100: "#FFF693",
      200: "#FFF693",
      300: "#FFF583",
      400: "#FFF372",
      500: "#fff159",
      600: "#E6D950",
      700: "#CCC147",
      800: "#BFB543",
      900: "#BFB543"
    },
    secondary: {
      ...theme.colors.messenger,
      100: theme.colors.messenger[50],
      50: `rgba(65,137,230,.15)`
    },
    success: theme.colors.whatsapp,
    error: theme.colors.red,
    warning: theme.colors.orange
  },
  sizes: {},
  fonts: {
    body: "Proxima Nova",
    heading: "Proxima Nova"
  },
  components: {
    Link: {
      variants: {
        unstyled: ({ colorScheme = "blackAlpha" }) => ({
          color: `${colorScheme}.700`,
          _hover: {
            color: `${colorScheme}.800`,
            textDecoration: "none"
          }
        }),
        color: ({ colorScheme = "secondary" }) => ({
          color: `${colorScheme}.500`,
          _hover: {
            color: `${colorScheme}.600`,
            textDecoration: "none"
          }
        })
      },
      defaultProps: {
        variant: "color"
      }
    },
    Button: {
      baseStyle: {
        border: "1px solid rgba(255, 255, 255, 0.575)",
        borderRadius: "base" // <-- border radius is same for all variants and sizes
      },
      sizes: {
        lg: {
          fontSize: "md"
        }
      }
    },
    Text: {
      baseStyle: {
        color: "black" // <-- border radius is same for all variants and sizes
      },
      sizes: {
        lg: {
          fontSize: "md"
        }
      }
    },
    Input: {
      parts: ["field"],
      defaultProps: {
        focusBorderColor: "secondary.500"
      },
      variants: {
        filled: {
          field: {
            borderRadius: "sm",
            color: "blackAlpha.800",
            backgroundColor: "white",
            ":hover, :focus": {
              backgroundColor: "white"
            }
          }
        },
        outline: {
          field: {
            borderColor: "gray.300"
          }
        }
      }
    }
  }
});
