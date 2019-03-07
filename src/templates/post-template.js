import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"

export default ({ data: post }) => (
  <Layout>
    <div>
      <h1>{post.markdownRemark.frontmatter.title}</h1>
      <h3>{post.markdownRemark.timeToRead} minute Read</h3>
      <div dangerouslySetInnerHTML={{ __html: post.markdownRemark.html }} />
    </div>
    <Link to="/blog">Back to Blog List</Link>
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
      }
    }
  }
`
