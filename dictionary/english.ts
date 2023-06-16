const dictionary = () => ({
  navigation: {
    destinations: "Destinations",
    budget: "Budget",
    aboutUs: "About Us",
    profile: "Profile",
    configs: "Configurations",
  },
  home: {
    slidertext1: "Make your exchange",
    slidertext2: " in 2022!",
    description1: "Discover new cultures and",
    description2: "experience unforgettable moments!",
    title: "Explore the top destinations!",
  },
  faq: {
    disclaimer: "Find below the answers to the most frequently asked questions",
    questions: [
      {
        icon: "book",
        question: "What personal documents do I need to travel?",
        answer:
          "Reservation Voucher, Original identification document with a photo (RG, CNH)",
      },
      {
        icon: "receipt",
        question: "Do I need a visa?",
        answer:
          "It depends on the destination of your trip! Within the European Union and in America, a valid citizen card and passport are required.",
      },
      {
        icon: "baby-face",
        question:
          "I'm traveling with a minor. Are there any specific requirements I should consider?",
        answer:
          "Yes, you should have an authorization for the minor to leave the country whenever you travel.",
      },
      {
        icon: "rocket",
        question: "Do I need to go to an agency to buy a trip?",
        answer: "No, we are a 100% digital platform.",
      },
      {
        icon: "cash",
        question: "How do I make my budget?",
        answer:
          "Click on the Budget page and fill in the fields with your information.",
      },
    ],
  },
  travel: {
    title: "Countries for Exchange",
    description: "Discover the incredible destinations",
    description2: "that InterWorld offers!",
    button1: "Budget",
    button2: "Contact",
    countries: [
      {
        name: "United States",
        image: require("../assets/usa.jpg"),
        cities: [
          {
            name: "Boston",
            description:
              "Located in the state of Massachusetts, Boston is recognized as the birthplace of American independence. Culturally diverse, the city has a significant number of Irish and Portuguese immigrants.",
          },
          {
            name: "New York",
            description:
              "New York is the largest city in the United States. Of the local population, 40% is foreign-born, and more than 80 different languages are spoken. It's no wonder that New York is home to several world-renowned companies and organizations.",
          },
          {
            name: "Chicago",
            description:
              "Known as the 'Windy City,' Chicago surprises with its diversity. It boasts the largest number of parks and squares in the United States and is internationally recognized for the quality and modernity of its architecture, combining nature and development.",
          },
          {
            name: "Los Angeles",
            description:
              "Los Angeles is the most important city in California, leading in film, television, and music production. With numerous beaches, tourist attractions, and skyscrapers, it stands out as a city full of attractions for various styles.",
          },
        ],
      },
      {
        name: "Canada",
        image: require("../assets/canada.jpg"),
        cities: [
          {
            name: "Toronto",
            description:
              "Cosmopolitan, multicultural, and with a vibrant nightlife, there is no shortage of activities in this metropolis. Besides these qualities, Toronto also boasts a high standard of living and safety. It has a world-class educational structure and is one of the most multicultural cities on the planet.",
          },
          {
            name: "Montreal",
            description:
              "It is a major industrial, commercial, and university center. The city is considered one of the safest cities in the world, with highly educated people and the highest concentration of students in North America. Montreal is also the second-largest city of French speakers in the world.",
          },
          {
            name: "Vancouver",
            description:
              "Vancouver is located on Vancouver Island and is the capital of the state of British Columbia. The city has a European climate and is known as the 'City of Gardens' due to its beautiful and colorful gardens spread throughout the city.",
          },
        ],
      },
      {
        name: "England",
        image: require("../assets/ing.jpg"),
        cities: [
          {
            name: "London",
            description:
              "The capital of England is home to Buckingham Palace, the official residence of the British royal family, the Houses of Parliament along with the famous Big Ben clock, the London Eye, among many other attractions. However, it is by walking the streets with left-hand traffic or using the oldest underground in the world that you will experience London life.",
          },
          {
            name: "Liverpool",
            description:
              "The city of The Beatles is full of museums and art galleries, considered the second cultural hub of England. In the port area, in front of the River Mersey, you can find the Liverpool Waterfront or Pier Head, where you can't miss the statues of The Beatles. It's worth a visit!",
          },
          {
            name: "Birmingham",
            description:
              "The second-largest city in England, located in the Midlands region, Birmingham stands out for its history in the Industrial Revolution, interesting places to visit, and is perfect for fans of the Peaky Blinders series. Music lovers also enjoy the city, as it is the birthplace of bands like Black Sabbath, Judas Priest, and Duran Duran.",
          },
          {
            name: "Cambridge",
            description:
              "About 20% of the local population is composed of students, including university students and exchange students. The University of Cambridge is also famous for being considered one of the best universities in the world for many consecutive years. Notable figures such as Isaac Newton, Stephen Hawking, and Charles Darwin have passed through there.",
          },
        ],
      },
      {
        name: "Spain",
        image: require("../assets/esp.jpg"),
        cities: [
          {
            name: "Madrid",
            description:
              "For those who love art and history, the city is full of impressive historical buildings and museums with Europe's main collections. During the day, you can also stroll and shop along Gran Vía, visit Retiro Park and the Temple of Debod, which many say is the best place to watch the sunset in the city.",
          },
          {
            name: "Barcelona",
            description:
              "One of the main tourist and economic centers in the country, Barcelona attracts millions of visitors every year. The Mediterranean climate is very pleasant and ideal for exploring the city on foot or by bike. The city is closely linked to the architect Gaudí, famous for the construction of the Sagrada Familia, Park Güell, and La Pedrera.",
          },
          {
            name: "Seville",
            description:
              "Seville is full of historic attractions. The city has a rich past, having been controlled by Arabs and, more recently, Christians, leaving behind an incomparable architectural legacy. Seville Cathedral is a true monument to Christian glory and is the third-largest church in the world, taking over a century to complete.",
          },
          {
            name: "Granada",
            description:
              "Fountains, viewpoints, and 'Cármenes,' houses surrounded by gardens that are characteristic of this city, contribute to creating unforgettable places. It's no wonder that one of its old neighborhoods, Albaicín, is a UNESCO World Heritage Site along with the Alhambra and the Generalife. A significant cultural center for several centuries, both during Muslim and Christian rule, Granada currently enjoys an enviable cultural and leisure agenda.",
          },
        ],
      },
      {
        name: "France",
        image: require("../assets/france.jpg"),
        cities: [
          {
            name: "Paris",
            description:
              "Considered one of the most romantic cities in the world, Paris is undoubtedly a destination that has a lot to offer. In addition to a breathtaking architectural ensemble, imposing monuments, and blooming gardens, its first-class cuisine is sure to win over any traveler.",
          },
          {
            name: "Marseille",
            description:
              "With buildings of innovative architecture, excellent hospitality and gastronomy, and 2,600 years of historical heritage, Marseille is the second-largest and oldest city in France. Located 776 kilometers from the capital, it was founded in 600 BC by the Greeks.",
          },
          {
            name: "Lyon",
            description:
              "Studying abroad in Lyon means living in a city that offers all the privileges of life in France but without the characteristic stress of a capital. With just over 500,000 inhabitants, Lyon is located in the historic Rhône-Alpes region and is the third-largest city in the country.",
          },
          {
            name: "Nice",
            description:
              "A seaside city located in southern France, Nice is one of the most sought-after destinations in the country. With sunshine practically year-round, it welcomes an average of 4 million tourists throughout the year who come for its beautiful beaches and landscapes. Situated near important cities such as Marseille and Cannes, it is also close to Monaco and the Italian border, allowing for various interesting weekend trips.",
          },
        ],
      },
    ],
    Budget: "Request a Quote!",
  },
  about: {
    title: "Get to Know InterWorld",
    button: "#BeInterWorld",
    description1: "Discover a bit more",
    description2: " about our organization!",
    aboutus: "About Us",
    textaboutus:
      "We founded InterWorld in 2010 with the goal of offering not just exchanges, but life projects. The InterWorld project started small, with only 5 members, and today we have more than 100 professionals to meet all the needs of our students, with total dedication and commitment. Our goal is to turn the exchange into a unique experience in the life of the exchange student and a great professional opportunity.",
    mission: "Mission",
    missionp:
      "Enable cultural exchanges and tourism and business trips tailored to each client's profile, committing to quality service, even during the international experience.",
    visionp:
      "Be considered the best cultural exchange and tourism company in Brazil and the world!",
    vision: "Vision",
    values: "Values",
    valuesp:
      "Quality, seriousness, excellence, competence, ethics, credibility, and innovation.",
  },
  footer: {
    aboutUs:
      "Your trip with the best agency, come travel with InterWorld! With over 10 years in the market, we offer the best prices for flights, hotels, and airlines in 5 countries, including the United States, Canada, England, Spain, and Paris.",
  },
  budgets: {
    name: "Name",
    email: "Email",
    phone: "Phone",
    destinySearch: "Choose a destination",
    send: "Send order",
  },
  config: {
    title: "Configurations",
    languages: "Languages",
  },
  profile: {
    logged: "Signed",
    email: "Email",
    password: "Password",
    signIn: "Sign in",
    signUp: "Sign Up",
  },
});

export default dictionary;
