// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-",
    title: "",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Aqui você encontra meu currículo. Também é possível baixá-lo no botão de PDF.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Meus projetos, seja em andamento ou concluídos.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Informações sobre os repositórios dos projetos nos quais atuei ou atuo.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publicações por categoria. Essa página de publicações foi gerada pelo jekyll-scholar.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "news",
          description: "Novidades!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "post-como-contribuir-para-projetos-open-source-sendo-iniciante",
      
        title: "Como contribuir para projetos open source sendo iniciante",
      
      description: "Como contribuir para projetos open source se sou iniciante? O projeto Maria Quitéria e meu primeiro pull request!",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/maria-quiteria/";
        
      },
    },{id: "news-novo-site-novas-funcionalidades",
          title: 'Novo site, novas funcionalidades! 😊',
          description: "",
          section: "News",},{id: "projects-análise-de-dados-do-serviço-de-acolhimento-em-família-acolhedora-sfa",
          title: 'Análise de dados do Serviço de Acolhimento em Família Acolhedora (SFA)',
          description: "Projeto de análise de dados do Serviço de Acolhimento em Família Acolhedora (SFA) com dados de 2023.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_fam_acolhedora/";
            },},{id: "projects-aplicação-web-para-monitoramento-legislativo",
          title: 'Aplicação web para monitoramento legislativo',
          description: "Aplicação web para consultar proposições legislativas de temas específicos que tiveram tramitação nos últimos 60 dias na Câmara dos Deputados e nos últimos 30 dias na Câmara dos Deputados Senado Federal.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_monit_aspar_seges/";
            },},{id: "projects-algoritmo-de-classificação-para-identificação-do-público-para-averiguação-cadastral",
          title: 'Algoritmo de classificação para identificação do público para averiguação Cadastral',
          description: "Criação de um algoritmo usando técnicas de Machine Learning para identificação automática do público de averiguação cadastral do Cadastro Único para Programas Sociais",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_averiguacao_cadastral/";
            },},{id: "projects-análise-de-concentração-do-mercado-brasileiro-de-telefonia-móvel",
          title: 'Análise de concentração do mercado brasileiro de telefonia móvel',
          description: "Projeto colaborativo realizado no âmbito do Bootcamp de Análise de Dados da ENAP",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_smp/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/rislamiranda.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%69%73%6C%61%6D%69%72%61%6E%64%61@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/rislamiranda", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/rislamiranda", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
