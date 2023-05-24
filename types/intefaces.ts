export interface User {
  name?: string | null | undefined;
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


export interface Label {
  id: number,
  name: string,
  url: string
}


export interface Category {
  id: number,
  name: string,
  labels: Label[]
}

export interface Config {
  themeConfig: ThemeConfig;
  barConfig: BarConfig;
  searchConfig: SearchConfig;
  dateConfig: DateConfig;
  category:Category;
}


export interface User {
  
}

