const path = require(`path`);

/**
 * datoCmsModelName: as defined in DatoCMS, can be used for querying article(s) with `allDatoCms{modelName}`
 * slug: will be used for generating url, e.g. `/de-visser/{slug}/{some-article-slug}`
 * fileName: used for finding template file, e.g. `templates/{fileName}`
 */
const articleTypes = {
  news: {
    datoCmsModelName: 'News',
    slug: 'news',
    fileName: 'news'
  },
  highlight: {
    datoCmsModelName: 'Highlight',
    slug: 'highlight',
    fileName: 'highlight'
  },
  research: {
    datoCmsModelName: 'Researchitem',
    slug: 'research',
    fileName: 'research'
  },
  media: {
    datoCmsModelName: 'Mediaitem',
    slug: 'media',
    fileName: 'media'
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const generateArticlesForType = (type) => {
    return new Promise((resolve, reject) => {
      graphql(`
        {
          allDatoCms${type.datoCmsModelName} {
            edges {
              node {
                slug
                lab {
                  slug
                }
              }
            }
          }
        }
      `)
      .then((result) => {
        result.data[`allDatoCms${type.datoCmsModelName}`].edges.map(({ node: article }) => {
          createPage({
            path: `${article.lab ? article.lab.slug : ''}/${type.slug}/${article.slug}`, // Prefix lab articles with lab slug (.e.g. /de-visser/news/article-name)
            component: path.resolve(`./src/templates/${type.fileName}.js`),
            context: {
              slug: article.lab ? article.lab.slug : null // Slug will be used for querying article
            }
          });
        });
        resolve();
      })
      .catch((e) => reject(e));
    });
  };

  const articles = Object.keys(articleTypes).map((type) => {
    return generateArticlesForType(articleTypes[type]);
  });

  const overviews = new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsLab {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then((result) => {
      result.data.allDatoCmsLab.edges.map(({ node: lab }) => {
        // Home
        createPage({
          path: `${lab.slug}`,
          component: path.resolve(`./src/templates/home.js`),
          context: {
            slug: lab.slug
          }
        });

        // News
        createPage({
          path: `${lab.slug}/news`,
          component: path.resolve(`./src/templates/news-overview.js`),
          context: {
            slug: lab.slug
          }
        });
      });
      resolve();
    });
  });

  return Promise.all([overviews, articles]);
};
