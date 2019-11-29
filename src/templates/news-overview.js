import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';

const NewsPage = ({ data }) => (
  <Layout>
    <h2>News items</h2>
    {data.allDatoCmsNews.edges.map(({ node: article }) => (
      <div key={article.id} className="showcase__item">
        <figure className="card">
          <figcaption className="card__caption">
            <h6 className="card__title">
              <a href={`/${article.lab.slug}/news/${article.slug}`}>
                {article.title}
              </a>
            </h6>
            <div className="card__description">
              <p>{article.excerpt}</p>
            </div>
          </figcaption>
        </figure>
      </div>
    ))}
  </Layout>
);

export default NewsPage;

export const query = graphql`
  query NewsOverviewQuery($slug: String!) {
    allDatoCmsNews(filter: { lab: { slug: { eq: $slug } } }) {
      edges {
        node {
          id
          title
          slug
          lab {
            slug
          }
        }
      }
    }
  }
`;
