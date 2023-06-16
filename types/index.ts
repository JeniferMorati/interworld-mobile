export type TLanguage = "BR" | "US";

export type TMainContextType = {
  dictionary: TDictionary;
  language: TLanguage;
  setLanguage: (language: TLanguage) => void;
};

export interface ICity {
  name: string;
  description: string;
}

export interface ICountry {
  name: string;
  cities: ICity[];
  image: HTMLImageElement;
}

interface City {
  name: string;
  description: string;
}

interface Country {
  name: string;
  image: string;
  cities: City[];
}

interface FAQQuestion {
  icon: string;
  question: string;
  answer: string;
}

interface FAQSection {
  disclaimer: string;
  questions: FAQQuestion[];
}

interface Navigation {
  destinations: string;
  budget: string;
  aboutUs: string;
  profile: string;
  config: string;
}

interface Home {
  slidertext1: string;
  slidertext2: string;
  description1: string;
  description2: string;
  title: string;
}

interface Travel {
  title: string;
  description: string;
  description2: string;
  button1: string;
  button2: string;
  countries: Country[];
  Budget: string;
}

interface About {
  title: string;
  button: string;
  description1: string;
  description2: string;
  aboutus: string;
  textaboutus: string;
  mission: string;
  missionp: string;
  visionp: string;
  vision: string;
  values: string;
  valuesp: string;
}

interface Footer {
  aboutUs: string;
}

interface Budgets {
  name: string;
  email: string;
  phone: string;
  destinySearch: string;
  startDate: string;
  endDate: string;
  send: string;
}

interface Config {
  title: string;
  languages: string;
}

interface Profile {
  logged: string;
  email: string;
  password: string;
  signIn: string;
  signUp: string;
}

export type TDictionary = {
  navigation: Navigation;
  home: Home;
  faq: FAQSection;
  travel: Travel;
  about: About;
  footer: Footer;
  budgets: Budgets;
  config: Config;
  profile: Profile;
};
