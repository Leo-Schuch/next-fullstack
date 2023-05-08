import { typography } from "./default/typography/typography";

const theme = {
  typography
};

export type Theme = typeof theme

export type ThemeTypographyVariants = keyof typeof typography.variants;

export default theme;
