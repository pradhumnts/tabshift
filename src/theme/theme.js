import { createTheme } from "@mui/material/styles";

export const themeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#A74B56",
    },
    secondary: {
      main: "#C66B75",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        height: 48,
        padding: "0 30px",
      },
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "elementory" },
          style: {
            fontSize: "1rem",
            padding: "10px 30px",
            textTransform: "capitalize",
            backgroundColor: "#FA877A",
            boxShadow: "#E4BEB9 0px 0px 2px 0px, #E4BEB9 0px 2px 24px -4px;",
            color: "white",
            "&:hover": {
              boxShadow: "#E4BEB9 0px 0px 2px 0px, #E4BEB9 0px 2px 24px -4px;",
              backgroundColor: "#F79489",
            },
          },
        },
        {
          props: { variant: "elementory-light" },
          style: {
            fontSize: "1rem",
            padding: "10px 30px",
            textTransform: "capitalize",
            backgroundColor: "#FFFFFF",
            boxShadow: "#E4BEB9 0px 0px 2px 0px, #E4BEB9 0px 2px 24px -4px;",
            color: "#F79489",
            "&:hover": {
              boxShadow: "#E4BEB9 0px 0px 2px 0px, #E4BEB9 0px 2px 24px -4px;",
              backgroundColor: "#F6F6F6",
            },
          },
        },
      ],
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              backgroundColor: "#A74B56",
              color: "#fff",
              boxShadow:
                "#c66b75c9 0px 0px 2px 0px, #c66b75c9 0px 2px 24px -4px;",
              "&:hover": {
                boxShadow:
                  "#c66b75c9 0px 0px 2px 0px, #c66b75c9 0px 2px 24px -4px;",
                backgroundColor: "#C66B75",
              },
            }),
          borderRadius: "7px",
        }),
      },
    },
  },
});

let data = [
  "https://toddzemek.com/changing-your-relationship-patterns-psychology-dr-jacqui-winship",
  "https://toddzemek.com/why-should-i-stay-in-this-relationship-todd-zemek",
  "https://toddzemek.com/todd-zemek-interviewed-by-sunny-roberts-the-power-of-masculine-and-feminine-dynamics",
  "https://toddzemek.com/your-relationship-with-food-amy-pershing",
  "https://toddzemek.com/mens-groups-for-better-relationships-owen-marcus",
  "https://toddzemek.com/therapy-experiences-part-1",
  "https://toddzemek.com/growing-in-love-with-slow-sex-diana-richardson",
  "https://toddzemek.com/understanding-narcissism-in-relationships-wendy-behary",
  "https://toddzemek.com/transforming-sexual-narratives-suzanne-iasenza",
  "https://toddzemek.com/attachment-styles-meditation-george-haas",
  "https://toddzemek.com/menopause-intimacy-tantra-janet-mcgeever",
  "https://toddzemek.com/the-five-personality-patterns-in-relationships-steven-kessler"
]