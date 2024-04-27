export const data = {
  projects: [
    {
      title: "Landing Page do Apple",
      description:
        "Utilizando HTML, CSS e JavaScript, o projeto tem como objetivo simular a apresentação e detalhamento do produto de forma atraente e responsiva.",
      link: {
        gitHub: "",
        deploy: "https://landing-page-apple-watch.netlify.app/",
      },
      img: "https://github.com/DevEduardoSouza/apple-watch-landing-page/blob/main/img/img_projeto.png?raw=true",
      priority: 1,
      isNew: false,
    },
    {
      title: "Venda de Planos",
      description:
        " O template foi criado para uma página de venda de planos ou serviços, apresentando informações sobre os planos disponíveis e seus benefícios.",
      link: {
        gitHub: "",
        deploy: "https://deveduardosouza.github.io/rachi/",
      },
      img: "https://github.com/DevEduardoSouza/rachi/raw/main/image/imgs-projeto/screencapture-rachi-projeto-netlify-app-2023-12-desktop.png",
      priority: 3,
      isNew: false,
    },
    {
      title: "J0RD4N - Catálogo de Jordans Online",
      description:
        " Um catálogo online de Jordans com um toque pessoal. Navegue, escolha seus favoritos e faça pedidos via WhatsApp para uma experiência de compra única",
      link: {
        gitHub: "",
        deploy: "https://j0rd4n.netlify.app/",
      },
      img: "https://raw.githubusercontent.com/DevEduardoSouza/jordan-shoes/main/imgs/ft_projeto_%5B.png",
      priority: 2,
      isNew: false,
    },
  ],
  posts: [
    {
      title: "Explorando Recursos Modernos do JavaScript para Desenvolvedores",
      description: `
      Um guia abrangente sobre recursos avançados do JavaScript, incluindo promessas, async/await, destructuring, e outras técnicas modernas para aprimorar sua experiência de desenvolvimento.
      `,
      pubDate: "20 de Fevereiro de 2024",
      url: "/blog/post01",
      tags: ["JavaScript", "Programação Web", "Desenvolvimento Front-end"],
      img: "https://imgs.search.brave.com/LW4rk3EoQqBl8q8einXeT-7dBXke6dBpDn-LcqYPSiE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9qYXZhc2NyaXB0/LXByb2dyYW1taW5n/LXdlYi1sYW5ndWFn/ZS13b29kZW4tY3Vi/ZXMtd2l0aC1sZXR0/ZXJzLWphdmFzY3Jp/cHQtbHlpbmctbGFw/dG9wLWNvbmNlcHRf/MjY0NzQ5LTMxNzUu/anBnP3NpemU9NjI2/JmV4dD1qcGc",
      content: `
      No mundo do desenvolvimento web, JavaScript desempenha um papel crucial. Neste post, vamos explorar alguns dos recursos mais modernos do JavaScript que podem transformar sua abordagem para codificação e melhorar a eficiência do seu código.

      ### Promessas: Lidando com Assincronia de Forma Elegante
      
      As promessas são um recurso poderoso do JavaScript para lidar com operações assíncronas. Descubra como usar promessas para escrever código mais limpo e compreender melhor o fluxo assíncrono.
      
      ### Async/Await: Simplificando Código Assíncrono
      
      A sintaxe async/await é uma adição valiosa ao JavaScript moderno, proporcionando uma maneira mais clara e concisa de lidar com operações assíncronas. Explore como implementar e aproveitar ao máximo essa abordagem.
      
      ### Destructuring: Desconstruindo Objetos e Arrays
      
      Destructuring é uma técnica poderosa para extrair valores de objetos e arrays de maneira elegante. Aprenda como essa funcionalidade pode tornar seu código mais eficiente e fácil de entender.
      
      ### Módulos ECMAScript: Organizando Seu Código de Forma Modular
      
      Os módulos ECMAScript oferecem uma maneira padronizada de organizar e estruturar seu código JavaScript. Descubra como utilizá-los para criar uma arquitetura mais modular e sustentável para seus projetos.
      
      ### Arrow Functions: Uma Sintaxe Concisa para Funções
      
      As arrow functions são uma maneira mais concisa de escrever funções em JavaScript. Explore como essa sintaxe pode simplificar suas funções e tornar seu código mais expressivo.
      
      ### Trabalhando com Map, Filter e Reduce
      
      Esses métodos de array são essenciais para manipulação de dados em JavaScript. Aprenda como aplicar map, filter e reduce para realizar operações eficientes em arrays.
      
      Este post é ideal para desenvolvedores que desejam aprimorar suas habilidades em JavaScript, abrangendo tópicos fundamentais e avançados que são essenciais para o desenvolvimento web moderno.
      
      `,
    },
  ],
  user: {
    imgProfile:
      "https://avatars.githubusercontent.com/u/103686965?s=400&u=8f83f5356f192a0e950cf1d547b8cbf72f78d501&v=4",
    name: "Eduardo Souza",
    job: "Desenvolvedor Front-End",
    description: `
      Proficiente em JavaScript, React e TypeScript, dedicado a criar 
      soluções inovadoras e escaláveis no front-end. Comprometido em 
      aprimorar constantemente minhas habilidades e contribuir para 
      projetos desafiadores. Uso o Git e o GitHub para compartilhar meu 
      trabalho com a comunidade.
    `,
    configsGitHub: {
      usernameGithub: "DevEduardoSouza",
      howManyProjects: 10,
      addProjectsWithoutDescription: false,
      imgThumbnailDefault: "",
    },
    contacts: [
      {
        name: "E-mail",
        icon: "envelope-at",
        link: "mailto:eduardosouzadev.10@gmail.com",
        backgroundColor: "#0072C6",
        description: "Entre em contato por e-mail para conversas diretas. 📧",
      }, //Email
      {
        name: "WhatsApp",
        icon: "whatsapp",
        link: "#",
        backgroundColor: " #25D366",
        description: "Converse via WhatsApp para comunicação instantânea. 💬",
      },
      {
        name: "Instagram",
        icon: "instagram",
        link: "https://www.instagram.com/eduardosouza.dev/",
        backgroundColor: "#833AB4",
        description: "Siga-me no Instagram para atualizações e mais! 📸",
      },
      {
        name: "Github",
        icon: "github",
        link: "https://github.com/DevEduardoSouza",
        backgroundColor: "#24292e",
        description:
          "Visite meu perfil no GitHub para projetos e colaborações. 💻",
      },
      {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/eduardo-souza-dev",
        backgroundColor: "#0A66C2",
        description:
          "Conecte-se comigo no LinkedIn para networking profissional. 🔗",
      },
      {
        name: "Discord",
        icon: "discord",
        link: "https://discord.gg/TZ4QA9X8D4",
        backgroundColor: "#5865F2",
        description:
          "Junte-se ao servidor do Discord para bate-papo em grupo e mais! 🎮",
      },
    ],
  },
};
