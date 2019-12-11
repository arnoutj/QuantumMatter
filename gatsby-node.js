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
    slug: 'highlights',
    fileName: 'highlight'
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
                id
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
          result.data[`allDatoCms${type.datoCmsModelName}`].edges.map(
            ({ node: article }) => {
              createPage({
                path: `${article.lab ? article.lab.slug : ''}/${type.slug}/${
                  article.slug
                }`, // Prefix lab articles with lab slug (.e.g. /de-visser/news/article-name)
                component: path.resolve(`./src/templates/${type.fileName}.js`),
                context: {
                  id: article.id,
                  slug: article.lab ? article.lab.slug : null // Slug will be used for querying article
                }
              });
            }
          );
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
      const slugs = [ 
        null, // for general overviews
        ...result.data.allDatoCmsLab.edges.map(({ node: lab }) => lab.slug)
      ];
      slugs.map(slug => {
        const labFilter = slug ? { lab: { slug: { eq: `${slug}` } } } : {} // Will be used in GraphQL filter

        // Home
        if(slug) {
          createPage({
            path: `${slug || "/"}`,
            component: path.resolve(`./src/templates/home.js`),
            context: {
              slug: slug
            }
          });
        }

        // Members
        createPage({
          path: `${slug || ""}/members`,
          component: path.resolve(`./src/templates/members-overview.js`),
          context: {
            slug: slug,
            filter: labFilter
          }
        });

        // Highlights
        createPage({
          path: `${slug || ""}/highlights`,
          component: path.resolve(`./src/templates/highlights-overview.js`),
          context: {
            slug: slug,
            filter: labFilter
          }
        });

        // Research
        createPage({
          path: `${slug || ""}/research`,
          component: path.resolve(`./src/templates/research.js`),
          context: {
            slug: slug,
            filter: labFilter
          }
        });

        // Publications
        createPage({
          path: `${slug || ""}/publications`,
          component: path.resolve(`./src/templates/publications.js`),
          context: {
            slug: slug,
            filter: labFilter
          }
        });

        // News
        createPage({
          path: `${slug || ""}/news`,
          component: path.resolve(`./src/templates/news-overview.js`),
          context: {
            slug: slug,
            filter: labFilter
          }
        });

        // Contact
        createPage({
          path: `${slug || ""}/contact`,
          component: path.resolve(`./src/templates/contact.js`),
          context: {
            slug: slug
          }
        });
      });
      resolve();
    });
  });

  return Promise.all([overviews, articles]);
};