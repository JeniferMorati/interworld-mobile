const dictionary = () => ({
  navigation: {
    destinations: "Destinations",
    budget: "Budget",
    aboutUs: "About us",
    login: "Login",
    signUp: "Sign up",
    logOut: "Log out",
    home: "Home",
  },
  home: {
    slidertext1: "Do your exchange",
    slidertext2: " in 2022!",
    description1: "Discover new cultures and",
    description2: "live unforgettable experiences!",
    button1: "Budgets",
    button2: "Contact",
    title: "Discover the main destinations!",
  },
  faq: {
    disclaimer: "Find answers to the most frequently asked questions below.",
    questions: [
      {
        icon: "far fa-paper-plane",
        question: "What personal documents do I need to travel?",
        answer: "Reservation Voucher, Original document with photo (RG, CNH)",
      },
      {
        icon: "fas fa-pen-alt",
        question: "Do I need a visa?",
        answer:
          "Depends on your travel destination! Within the European Union and America, a valid citizen card and valid passport are required.",
      },
      {
        icon: "fas fa-user",
        question:
          "I will travel with a minor. Are there any specifics you should consider?",
        answer:
          "Im, must contain a permit to leave the country whenever they travel.",
      },
      {
        icon: "fas fa-rocket",
        question: "Do I need to go to an agency to buy a travel?",
        answer: "No, we are a 100% digital platform.",
      },
      {
        icon: "fas fa-home",
        question: "How do I make my Budget?",
        answer:
          "Click on the Budget page and fill in the fields with your data.",
      },
      {
        icon: "fas fa-book-open",
        question: "Where can I find all Destinations?",
        answer: "Click on the Destinations Page to discover all the countries!",
      },
    ],
  },
  travel: {
    title: "Exchange",
    title1: "Countries",
    description: "Discover the amazing destinations",
    description2: "that InterWorld offers!",
    button1: "Budget",
    button2: "Contact",
    countries: [
      {
        name: "Estados Unidos",
        cities: [
          {
            name: "Boston",
            description:
              "Localizada no estado de Massachusetts, Boston é reconhecida por ser o berço da independência americana. Culturalmente diversa, a cidade possui expressivo número de imigrantes irlandeses e portugueses.",
          },
          {
            name: "Nova Iorque",
            description:
              "Nova Iorque é a maior cidade dos Estados Unidos. Da população local, 40% é estrangeira e se fala mais de 80 idiomas diferentes. Não é à toa que Nova York é sede de várias empresas e organizações do mundo.",
          },
          {
            name: "Chicago",
            description:
              "Conhecida como a “Cidade dos Ventos”, Chicago surpreende pela diversidade. Reunindo o maior número de parques e praças dos Estados Unidos e reconhecida internacionalmente pela qualidade e modernidade de sua arquitetura, a cidade alia natureza e desenvolvimento.",
          },
          {
            name: "Los Angeles",
            description:
              "Los Angeles é a cidade mais importante da Califórnia, sendo líder na produção de filmes, séries e músicas. Com inúmeras praias, pontos turísticos e arranha-céus, ela se destaca como uma cidade cheia de atrações para os mais diversos estilos.",
          },
        ],
      },
      {
        name: "Canadá",
        cities: [
          {
            name: "Toronto",
            description:
              "Cosmopolita, multicultural e com vida noturna agitada, atividades é o que não faltam nessa metrópole, que além dessas qualidades, possui um alto índice de qualidade de vida e segurança. Possui uma estrutura educacional de primeiro mundo e é uma das cidades mais multiculturais do planeta.",
          },
          {
            name: "Montreal",
            description:
              "É um grande centro industrial, comercial e universitário. A cidade é considerada uma das cidades mais seguras do mundo, com um povo super educado e com a maior concentração de estudantes da América do Norte. Montreal também é a segunda maior cidade de falantes de língua francesa no mundo.",
          },
          {
            name: "Vancouver",
            description:
              "Victoria fica na ilha de Vancouver Island e é a capital do estado de British Columbia. A cidade tem um clima europeu e é conhecida como 'A Cidade dos Jardins' devido aos lindos e coloridos jardins que estão espalhados por toda a cidade.",
          },
        ],
      },
      {
        name: "Inglaterra",
        cities: [
          {
            name: "Londres",
            description:
              "A capital da Inglaterra abriga o Palácio de Buckingham que é a residência oficial da realeza britânica, o Parlamento Inglês juntamente com o famoso relógio Big Ben, a London Eye, entre muitos outros atrativos. No entanto, é andando pelas ruas de mão inglesa ou no metrô mais antigo do mundo que você verá a vida londrina acontecer.",
          },
          {
            name: "Liverpool",
            description:
              "A cidade dos Beatles é repleta de museus e galerias de arte, sendo considerado o segundo polo cultural da Inglaterra. Ainda na região portuária, em frente ao rio Mersey, há a chamada Liverpool Waterfront, ou Pier Head, podemos encontrar as estátuas dos Beatles que, claro, não podem faltar em nenhum roteiro. Vale a pena a visita!",
          },
          {
            name: "Birmingham",
            description:
              "A segunda maior cidade da Inglaterra, situada na região central conhecida por Midlands, Birmingham chama atenção por sua história na Revolução Industrial, lugares interessantes para conhecer e perfeita para quem gosta da série Peaky Blinders. Amantes da música também curtem, já que algumas bandas nasceram aqui como Black Sabbath, Judas Priest e Duran Duran.",
          },
          {
            name: "Cambridge",
            description:
              "Cerca de 20% da população local é formada por estudantes entre universitários e intercambistas. A Universidade de Cambridge também é muito famosa por ser considerada durante muitos anos consecutivos uma das melhores universidades do mundo. Nomes como Isaac Newton, Stephen Hawking e Charles Darwin passaram por lá.",
          },
        ],
      },
      {
        name: "Espanha",
        cities: [
          {
            name: "Madri",
            description:
              "Para quem gosta de arte e história, a cidade é cheia de imponentes construções históricas e museus com os principais acervos da Europa. De dia, você pode também passear e fazer compras pela Gran Vía, conhecer os Parques El Retiro e o Templo de Debod, onde muitos dizem ser o melhor lugar para ver o pôr-do-sol na cidade.",
          },
          {
            name: "Barcelona",
            description:
              "Um dos principais centros turísticos e econômicos do país, Barcelona atrai milhões de visitantes todos os anos. O clima mediterrâneo é muito agradável e propício para conhecer a cidade a pé ou de bicicleta. A cidade está diretamente ligada ao arquiteto Gaudí, famoso pela construção da Sagrada Família, Parc Guell e La Pedrera.",
          },
          {
            name: "Sevilha",
            description:
              "O que não falta em Sevilha são atrações históricas. A cidade tem um passado riquíssimo, foi controlada pelos árabes e, mais recentemente, pelos cristãos, povos estes que deixaram um legado arquitetônico incomparável. A catedral de Sevilha é um verdadeiro monumento à glória cristã, é a terceira maior igreja do mundo e levou mais de um século para ser terminada.",
          },
          {
            name: "Granada",
            description:
              "Fontes, mirantes e Cármenes, as casas rodeadas de jardins que são características desta cidade, contribuem para criar lugares inesquecíveis. Não é à toa que um de seus bairros antigos, o Albaicín, é Patrimônio da Humanidade junto com La Alhambra e o Generalife. Importante centro cultural durante vários séculos, tanto durante o governo muçulmano como o cristão, Granada goza atualmente de uma invejável agenda cultural e de lazer.",
          },
        ],
      },
      {
        name: "França",
        cities: [
          {
            name: "Paris",
            description:
              "Considerada uma das cidades mais românticas do mundo, Paris é sem dúvida um destino que tem muito a oferecer. Além de um conjunto arquitetônico de tirar o fôlego, monumentos imponentes e jardins floridos, a gastronomia de primeira com certeza conquistar qualquer viajante.",
          },
          {
            name: "Marselha",
            description:
              "Edifícios de arquitetura inovadora. Hotelaria e gastronomia excelentes. E 2.600 anos de herança histórica. Esta é Marselha, a segunda maior – e a mais antiga – cidade da França. Localizada a 776 quilômetros da capital, ela surgiu em 600 a.C., por obra dos gregos.",
          },
          {
            name: "Lyon",
            description:
              "Fazer intercâmbio em Lyon é viver em uma cidade que oferece todos os privilégios da vida na França, porém sem o estresse característico de uma capital. Com pouco mais de 500 mil habitantes, Lyon está situada na histórica região Rhône-Alpes e é a terceira maior cidade do país.",
          },
          {
            name: "Nice",
            description:
              "Cidade litorânea, localizada ao sul da França, é um dos destinos mais procurados do país. Ensolarada praticamente o ano inteiro, recebe em média 4 milhões de turistas ao longo do ano, que vão atrás de suas belíssimas praias e paisagens. Situada perto de cidades importantes como Marselha e Cannes, está também próxima de Mônaco e da fronteira com a Itália, permitindo vários passeios interessantes aos finais de semana.",
          },
        ],
      },
    ],
    Budget: "Ask for budget",
  },
  about: {
    title: "Meet the Interworld",
    button: "#BeInterWorld",
    aboutus: "About us",
    textaboutus:
      "We founded Interworld in 2010 with the aim of offering not only exchanges, but life projects. The Interworld project started small, with only 5 members and today we have more than 100 professionals to meet all the needs of our students, with total dedication and commitment. Our goal is to transform the exchange into a unique experience in the exchange student's life and a great professional opportunity.",
    mission: "Mission",
    missionp:
      "Facilitate cultural exchanges and tourist and business trips to the profile of each client, committing to the quality of service, including during an international experience.",
    vision: "Vision",
    visionp:
      "To be considered the best cultural exchange and tourism company in Brazil and the world!",
    values: "Values",
    valuesp:
      "Quality, seriousness, excellence, competence, ethics, credibility and innovation.",
  },
  footer: {
    aboutUs:
      "Your trip with the best agency, come travel with InterWorld! \
      With more than 10 years in the market, we have the best prices in \
      tickets, hotels and airlines present 5 \
      countries, including the United States, Canada, England, Spain and Paris",
  },
  budgets: {
    name: "Name",
    email: "Email",
    phone: "Telphone",
    destinySearch: "Search to country destiny",
    startDate: "Start date",
    endDate: "End date",
    send: "Send",
  },
});

export default dictionary;
