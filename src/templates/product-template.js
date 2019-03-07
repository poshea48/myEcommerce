import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

export default ({ data: { contentfulProduct }, location }) => (
  <Layout>
    <div style={{ marginLef: "0 auto", width: "100%", textAlign: "center" }}>
      <h2>
        {contentfulProduct.name} -
        <span style={{ color: "#ccc" }}>
          {" "}
          Added on {contentfulProduct.createdAt}
        </span>
      </h2>
      <h3>${contentfulProduct.price}</h3>
      <div
        dangerouslySetInnerHTML={{
          __html: contentfulProduct.description,
        }}
      />
      <button
        style={{
          margin: "10px 0",
          background: "darkorange",
          color: "#fff",
          padding: "0.3em",
          borderRadius: 5,
          cursor: "pointer",
        }}
        className="snipcart-add-item"
        data-item-id={contentfulProduct.slug}
        data-item-price={contentfulProduct.price}
        data-item-image={contentfulProduct.image.file.url}
        data-item-name={contentfulProduct.name}
        data-item-url={location.pathname}
      >
        Add to Cart
      </button>
      <Img
        style={{ margin: "0 auto", maxWidth: 600 }}
        fluid={contentfulProduct.image.fluid}
      />
      <br />
      <p>Added on {contentfulProduct.createdAt}</p>
    </div>
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      name
      slug
      price
      description
      createdAt(formatString: "MMMM Do, YYYY")
      image {
        fluid(maxWidth: 800, maxHeight: 600) {
          ...GatsbyContentfulFluid_tracedSVG
        }
        file {
          url
        }
      }
    }
  }
`
