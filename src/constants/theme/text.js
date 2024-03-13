import colors from "./colors";

export const text = {
  primary: {
    page: {
      title: {
        fontFamily: "GothicA1_900Black",
        textTransform: "capitalize",
        fontSize: 26,
        lineHeight: 32,
      },
    },
    header: {
      title: {
        fontFamily: "GothicA1_700Bold",
        textTransform: "capitalize",
        fontSize: 22,
        lineHeight: 28,
      },
      subTitle: {
        fontFamily: "GothicA1_500Medium",
        fontSize: 20,
        lineHeight: 28,
      },
      body: {
        fontFamily: "GothicA1_300Light",
        fontSize: 16,
        lineHeight: 24,
      },
    },
    row: {
      title: {
        fontFamily: "GothicA1_700Bold",
        textTransform: "capitalize",
        fontSize: 19,
        lineHeight: 24,
      },
      subTitle: {
        fontFamily: "GothicA1_500Medium",

        fontSize: 15,
        lineHeight: 20,
      },
      subTitle: {
        fontFamily: "GothicA1_300Light",

        fontSize: 14,
        lineHeight: 20,
      },
      small: {
        fontFamily: "GothicA1_100Thin",
        textTransform: "uppercase",

        fontSize: 12,
        lineHeight: 17,
      },
    },
    card: {
      title: {
        fontFamily: "GothicA1_700Bold",

        fontSize: 19,
        lineHeight: 24,
        textTransform: "capitalize",
      },
      subTitle: {
        fontFamily: "GothicA1_500Medium",

        fontSize: 15,
        lineHeight: 20,
      },
      body: {
        fontFamily: "GothicA1_300Light",

        fontSize: 14,
        lineHeight: 20,
      },
      small: {
        fontFamily: "GothicA1_100Thin",
        textTransform: "uppercase",

        fontSize: 12,
        lineHeight: 17,
      },
    },
    section: {
      title: {
        fontFamily: "GothicA1_700Bold",
        fontSize: 18,
        lineHeight: 24,
        textTransform: "uppercase",
      },
      subTitle: {
        fontFamily: "GothicA1_500Medium",
        fontSize: 12,
        lineHeight: 24,
        textTransform: "uppercase",
      },
    },
    paragraph: {
      fontFamily: "GothicA1_300Light",
      fontSize: 16,
      lineHeight: 24,
    },
    b: {
      fontFamily: "GothicA1_700Bold",
      fontSize: 16,
      lineHeight: 24,
    },
    small: {
      fontFamily: "GothicA1_100Thin",
      fontSize: 12,
      lineHeight: 20,
      textTransform: "uppercase",
    },
    smallBold: {
      fontFamily: "GothicA1_500Medium",
      fontSize: 12,
      lineHeight: 16,
      textTransform: "uppercase",
    },
    button: {
      md: {
        fontFamily: "GothicA1_800ExtraBold",
        fontSize: 16,
        lineHeight: 22,
        textTransform: "capitalize",
      },
      sm: {
        fontFamily: "GothicA1_600Bold",
        fontSize: 14,
        lineHeight: 20,
        textTransform: "capitalize",
      },
    },
    textColors: {
      ...colors.text,
    },
  },
  textColors: {
    ...colors.text,
  },
};
