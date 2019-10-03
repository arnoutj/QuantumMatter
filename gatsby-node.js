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
        // General articles have no prefix
        const labSlug = article.lab ? `${article.lab.slug}` : ``;

        createPage({
          path: `${labSlug}/article/${article.slug}`,
          component: path.resolve(`./src/templates/article.js`),
          context: {
            slug: labSlug
          }
        });
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
