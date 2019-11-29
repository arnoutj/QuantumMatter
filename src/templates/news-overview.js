import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout/layout';

const NewsPage = ({ data }) => (
  <Layout>
    <h2>News items</h2>
    {data.allDatoCmsNews.edges.map(({ node: article }) => (
      <div key={article.id} className="showcase__item">
        <figure className="card">
          <figcaption className="card__caption">
            <h6 className="card__title">
              <Link to={`${article.lab.slug}/article/${article.slug}`}>
                {article.title}
              </Link>
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
