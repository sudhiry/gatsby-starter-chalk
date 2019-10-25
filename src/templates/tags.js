import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Tag = ({ pageContext, data }) => {
    const posts = data.allMarkdownRemark.edges
    const title = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description;
    // const { tag } = pageContext
    // const { totalCount } = data.allMarkdownRemark
    // const tagHeader = `${totalCount} post${
    //     totalCount === 1 ? "" : "s"
    //     } tagged with "${tag}"`

    return (
        <Layout>
            <SEO title={title} description={description}/>
            <ul class="article-list">
                {posts.map((post) => {
                    const tags = post.node.frontmatter.tags
                    return (
                        <li key={post.node.id} class="article-list-item">
                            <Link to={post.node.fields.slug} title={post.node.frontmatter.title}>
                                <h5>{post.node.frontmatter.title}</h5>
                            </Link>

                            <p>
                                {post.node.description || post.node.excerpt}
                            </p>
                        </li>
                    );
                })}
            </ul>
        </Layout>
    )
}

Tag.propTypes = {
    pageContext: PropTypes.shape({
        tag: PropTypes.string.isRequired,
    }),
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            totalCount: PropTypes.number.isRequired,
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            title: PropTypes.string.isRequired,
                        }),
                    }),
                }).isRequired
            ),
        }),
    }),
}

export const pageQuery = graphql`
  query {
    site {
        siteMetadata {
            title 
            author
        }
    } 
    allMarkdownRemark(
      limit: 2000
    ) {
      totalCount
      edges {
         node {
            excerpt(pruneLength: 200)
            html
            id
            frontmatter {
                title
                date(formatString: "MMMM, YYYY")
                tags
            }
             fields {
                slug
            }
        }
      }
    }
  }
`

export default Tag