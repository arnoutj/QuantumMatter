import React from 'react'
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    {/* {data.allDatoCmsWork.edges.map(({ node: work }) => (
      <div key={work.id} className="showcase__item">
        <figure className="card">
          <Link to={`/works/${work.slug}`} className="card__image">
            <Img fluid={work.coverImage.fluid} />
          </Link>
          <figcaption className="card__caption">
            <h6 className="card__title">
              <Link to={`/works/${work.slug}`}>{work.title}</Link>
            </h6>
            <div className="card__description">
              <p>{work.excerpt}</p>
            </div>
          </figcaption>
        </figure>
      </div>
    ))} */}
  </Layout>
)

export default IndexPage;