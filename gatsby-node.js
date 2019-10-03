const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const articles = new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsArticle {
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
    `).then((result) => {
      result.data.allDatoCmsArticle.edges.map(({ node: article }) => {
        // Prefix lab articles with lab slug
        if (article.lab) {
          createPage({
            path: `${article.lab.slug}/article/${article.slug}`,
            component: path.resolve(`./src/templates/article.js`),
            context: {
              slug: article.lab.slug
            }
          });
        } else {
          // Don't prefix general articles
          createPage({
            path: `article/${article.slug}`,
            component: path.resolve(`./src/templates/article.js`)
          });
        }
      });
      resolve();
    });
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
          component: path.resolve(`./src/templates/news.js`),
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
