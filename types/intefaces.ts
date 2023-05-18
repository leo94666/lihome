export interface User {
  name?: string | null | undefined;
  role?: string;
  userName?: string;
  accessToken?: string;
}

export interface ThemeConfig {
  backgroundImageUrl: string
}

export interface BarConfig {

}

export interface SearchConfig {

}

export interface DateConfig {

}

export interface Config {
  themeConfig: ThemeConfig;
  barConfig: BarConfig;
  searchConfig: SearchConfig;
  dateConfig: DateConfig;
}
