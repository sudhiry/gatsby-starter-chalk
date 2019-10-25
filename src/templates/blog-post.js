import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = (props) => {
  const post = props.data.markdownRemark
  // const labels = props.data.site.siteMetadata.labels
  // const siteName = props.data.site.siteMetadata.title
  // const siteUrl = props.data.site.siteMetadata.url
  // const url = `${siteUrl}${props.pageContext.slug}`;
  // const tags = post.frontmatter.tags

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <article className="article">
        <header className="article-header">
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.description}</p>
          {/* {% include article/info-footer.html post=page %} */}
        </header>
        <div className="article-content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
      site {
        siteMetadata {
          url
          title
        }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default BlogPost
