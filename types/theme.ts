//TS Type definitions
export interface Theme {
  theme: string;
  backColor?: string;
  headerColor: string;
  bottomTabColor: string;
  cardBackground: string;
  textColor: string;
  statusColor: string;
  toggleBackColor: string;
  iconColor: string;
  themeBack: string;
}

export interface ThemeConfig {
  light: Theme;
  dark: Theme;
}
