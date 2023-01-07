import { alpha } from "@mui/material/styles";

const INFO = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#1890FF",
  dark: "#0C53B7",
  darker: "#04297A",
  contrastText: "#fff",
};

const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
  darker: "#08660D",
  contrastText: "#212B36",
};

const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
  contrastText: "#fff",
};

const palette = {
  common: { black: "#000", white: "#fff" },
  primary: {
    main: "#344675",
  },
  secondary: {
    main: "#f4f5f7",
  },
  info: { ...INFO },
  success: { ...SUCCESS },
  error: { ...ERROR },
  divider: alpha("#919EAB", 0.24),
  text: { primary: "#212B36", secondary: "#637381", disabled: "#919EAB" },
  background: { paper: "#fff", default: "rgb(11, 15, 25)", neutral: "#F4F6F8" },
  action: {
    active: "#637381",
    hover: alpha("#919EAB", 0.08),
    selected: alpha("#919EAB", 0.16),
    disabled: alpha("#919EAB", 0.8),
    disabledBackground: alpha("#919EAB", 0.24),
    focus: alpha("#919EAB", 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
