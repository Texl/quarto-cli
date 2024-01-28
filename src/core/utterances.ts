/*
* utterances.ts
*
*/

export type UtterancesThemeToggleRecord = {
  baseTheme: string;
  altTheme: string;
}

export type UtterancesTheme = {
  light?: string;
  dark?: string;
} | string;

enum UtterancesThemeDefault {
  light = "github-light",
  dark = "github-dark",
}

export const buildUtterancesThemeKeys = (
  darkModeDefault: boolean,
  theme: UtterancesTheme
): UtterancesThemeToggleRecord => {
  if (typeof theme === "string") {
    if (theme.length > 0) {
      return { baseTheme: theme, altTheme: theme };
    } else {
      theme = { light: UtterancesThemeDefault.light, dark: UtterancesThemeDefault.dark };
    }
  }

  const themeRecord: { light: string; dark: string } = theme as {
    light: string;
    dark: string;
  };
  const result = {
    baseTheme: themeRecord.light ?? UtterancesThemeDefault.light,
    altTheme: themeRecord.dark ?? UtterancesThemeDefault.dark,
  };

  if (darkModeDefault) {
    [result.baseTheme, result.altTheme] = [result.altTheme, result.baseTheme];
  }

  return result;
};