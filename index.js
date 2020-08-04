const result = {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            fields: {
              slug: "/",
            },
            frontmatter: {
              category: "notFound",
              date: null,
              description: null,
              title: "Conteúdo Não Encontrado",
              image: "/assets/img/404.jpg",
              type: "page",
            },
            timeToRead: 1,
          },
          next: {
            frontmatter: {
              title: "Sobre mim",
            },
            fields: {
              slug: "/",
            },
          },
          previous: null,
        },
        {
          node: {
            fields: {
              slug: "/",
            },
            frontmatter: {
              category: "sobre",
              date: null,
              description: null,
              title: "Sobre mim",
              image: null,
              type: "page",
            },
            timeToRead: 1,
          },
          next: {
            frontmatter: {
              title: "Alterando o nome de sua branch principal",
            },
            fields: {
              slug: "/alterando-o-nome-da-sua-branch-principal/",
            },
          },
          previous: {
            fields: {
              slug: "/",
            },
            frontmatter: {
              title: "Conteúdo Não Encontrado",
            },
          },
        },
        {
          node: {
            fields: {
              slug: "/alterando-o-nome-da-sua-branch-principal/",
            },
            frontmatter: {
              category: "dev",
              date: "16 de Junho de 2020",
              description:
                "Após uma sugestão de @Una no twitter, resolvi trocar o nome da branch principal nos meus projetos.",
              title: "Alterando o nome de sua branch principal",
              image: "/assets/img/una-twitter.png",
              type: "post",
            },
            timeToRead: 2,
          },
          next: {
            frontmatter: {
              title: "Criando testes para API Node",
            },
            fields: {
              slug: "/criando-testes-para-api-node/",
            },
          },
          previous: {
            fields: {
              slug: "/",
            },
            frontmatter: {
              title: "Sobre mim",
            },
          },
        },
        {
          node: {
            fields: {
              slug: "/criando-testes-para-api-node/",
            },
            frontmatter: {
              category: "js",
              date: "08 de Junho de 2020",
              description:
                "Neste post vou demonstrar como criar testes para nossa API Node",
              title: "Criando testes para API Node",
              image: "/assets/img/npm-t-.png",
              type: "post",
            },
            timeToRead: 6,
          },
          next: {
            frontmatter: {
              title: "Deploy de uma API Node na Heroku",
            },
            fields: {
              slug: "/deploy-de-uma-api-node-na-heroku/",
            },
          },
          previous: {
            fields: {
              slug: "/alterando-o-nome-da-sua-branch-principal/",
            },
            frontmatter: {
              title: "Alterando o nome de sua branch principal",
            },
          },
        },
        {
          node: {
            fields: {
              slug: "/deploy-de-uma-api-node-na-heroku/",
            },
            frontmatter: {
              category: "js",
              date: "29 de Maio de 2020",
              description:
                "Neste post vou mostrar de uma maneira simples, como colocar sua API Node online na Heroku",
              title: "Deploy de uma API Node na Heroku",
              image: "/assets/img/heroku-signup-screen.png",
              type: "post",
            },
            timeToRead: 2,
          },
          next: {
            frontmatter: {
              title: "Adote um Pet",
            },
            fields: {
              slug: "/adote-um-pet/",
            },
          },
          previous: {
            fields: {
              slug: "/criando-testes-para-api-node/",
            },
            frontmatter: {
              title: "Criando testes para API Node",
            },
          },
        },
        {
          node: {
            fields: {
              slug: "/adote-um-pet/",
            },
            frontmatter: {
              category: "projetos",
              date: "28 de Maio de 2020",
              description:
                "Plataforma para ajudar a encontrar Pets e Feiras de Adoção.",
              title: "Adote um Pet",
              image: "/assets/img/logo.png",
              type: "page",
            },
            timeToRead: 1,
          },
          next: {
            frontmatter: {
              title: "Está no ar...",
            },
            fields: {
              slug: "/está-no-ar/",
            },
          },
          previous: {
            fields: {
              slug: "/deploy-de-uma-api-node-na-heroku/",
            },
            frontmatter: {
              title: "Deploy de uma API Node na Heroku",
            },
          },
        },
        {
          node: {
            fields: {
              slug: "/está-no-ar/",
            },
            frontmatter: {
              category: "misc",
              date: "28 de Maio de 2020",
              description:
                "Finalmente saiu meu novo site pessoal.. Depois de tanta postergação e um curso.. estamos aqui.",
              title: "Está no ar...",
              image: null,
              type: "post",
            },
            timeToRead: 1,
          },
          next: null,
          previous: {
            fields: {
              slug: "/adote-um-pet/",
            },
            frontmatter: {
              title: "Adote um Pet",
            },
          },
        },
      ],
    },
    site: {
      siteMetadata: {
        postsConfig: {
          postsPerPage: 6,
          postsBasePath: "/",
        },
      },
    },
  },
};

const allPages = result.data.allMarkdownRemark.edges;

const isPost = (type) => "post" === type;

const pages = allPages.filter(({ node }) => !isPost(node.frontmatter.type));

// Create pages by slug
console.log("----PAGES----");
pages.forEach(({ node, next, previous }) => {
  console.log("previous Title", previous && previous.frontmatter.title);
  console.log("node Title", node.frontmatter.title);
  console.log("next Title", next && next.frontmatter.title);
  console.log("-------------------------");
});

const posts = allPages.filter(({ node }) => isPost(node.frontmatter.type));

// Fix Linked List
posts.forEach((item, index, arr) => {
  // console.log("----NEXT----");
  // console.log("itemNextSlug", item.next && item.next.fields.slug);
  // console.log("arrNext", arr[index + 1] && arr[index + 1].node.fields.slug);

  if (arr[index + 1] === undefined) item.next = null;
  if (arr[index - 1] === undefined) item.previous = null;

  if (
    item.next &&
    arr[index + 1] &&
    item.next.fields.slug !== arr[index + 1].node.fields.slug
  )
    item.next = arr[index + 1].node;

  // console.log("----PREVIOUS----");
  // console.log("item.previousSlug", item.previous && item.previous.fields.slug);
  // console.log(
  //   "arr[index - 1]",
  //   arr[index - 1] && arr[index - 1].node.fields.slug
  // );
  if (
    item.previous &&
    arr[index - 1] &&
    item.previous.fields.slug !== arr[index - 1].node.fields.slug
  )
    item.previous = arr[index - 1].node;
});

console.log("----POSTS----");
posts.forEach(({ node, next, previous }) => {
  console.log("previous Title", previous && previous.frontmatter.title);
  console.log("node Title", node.frontmatter.title);
  console.log("next Title", next && next.frontmatter.title);
  console.log("-------------------------");
});
