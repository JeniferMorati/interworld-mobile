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
	image: HTMLImageElement,
}

export type TDictionary = {
  navigation: {
    destinations: string;
    budget: string;
    aboutUs: string;
    login: string;
    signUp: string;
    logOut: string;
    home: string;
  };
  home: {
    slidertext1: string;
    slidertext2: string;
    description1: string;
    description2: string;
    button1: string;
    button2: string;
    title: string;
  };
  faq: {
    disclaimer: string;
    questions: {
      icon: string;
      question: string;
      answer: string;
    }[];
  };
  travel: {
    title: string;
    description: string;
    description2: string;
    button1: string;
    button2: string;
    countries: ICountry[];
  };
  about: {
    title: string;
    button: string;
    description1: string;
    description2: string;
    aboutus: string;
    textaboutus: string;
    mission: string;
    missionp: string;
    vision: string;
    visionp: string;
    values: string;
    valuesp: string;
  };
  footer: {
    aboutUs: string;
  };
  budgets: {
    name: string;
    email: string;
    phone: string;
    destinySearch: string;
    startDate: string;
    endDate: string;
    send: string;
  };
};
