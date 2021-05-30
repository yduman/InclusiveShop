const regular = {
  fontFamily: "Inter-Regular",
  fontWeight: "normal" as const,
};

const medium = {
  fontFamily: "Inter-Medium",
  fontWeight: "bold" as const,
};

const light = {
  fontFamily: "Inter-Light",
  fontWeight: "normal" as const,
};

const thin = {
  fontFamily: "Inter-Thin",
  fontWeight: "normal" as const,
};

export const fontConfig = {
  web: {
    regular,
    medium,
    light,
    thin,
  },
  ios: {
    regular,
    medium,
    light,
    thin,
  },
  android: {
    regular,
    medium,
    light,
    thin,
  },
};
