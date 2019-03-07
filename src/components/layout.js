/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const getSiteMetadata = graphql`
  {
    site {
      siteMetadata {
        title
        author
        createdAt
      }
    }
  }
`
const Layout = ({ children }) => (
  <StaticQuery
    query={getSiteMetadata}
    render={data => (
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
        }}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            flex: "1 auto",
          }}
        >
          <main>{children}</main>
        </div>
        <footer
          style={{
            padding: "10px",
            textAlign: "center",
            height: 50,
            background: `rebeccapurple`,
            color: "#fff",
          }}
        >
          Built by {data.site.siteMetadata.author}©, Created{" "}
          {data.site.siteMetadata.createdAt}
        </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
