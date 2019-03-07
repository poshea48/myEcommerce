import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

const Products = ({ data: { allContentfulProduct } }) => (
  <Layout>
    {/* Products List */}
    <div>
      <h2>Products</h2>

      {allContentfulProduct.edges.map(({ node: product }) => (
        <div key={product.id} style={{ marginBottom: 20 }}>
          <Link
            to={`/products/${product.slug}`}
            style={{ textDecoration: "none", color: "#551a8b" }}
          >
            <h3 style={{ marginBottom: 5 }}>
              {product.name} ·{" "}
              <span
                style={{ fontSize: "1.2rem", fontWeight: 300, color: "#f60" }}
              >
                ${product.price}
              </span>
            </h3>
          </Link>
          <Img style={{ maxWidth: 400 }} fluid={product.image.fluid} />
        </div>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  {
    allContentfulProduct {
      edges {
        node {
          id
          name
          price
          slug
          image {
            fluid(maxWidth: 800, maxHeight: 500) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default Products
