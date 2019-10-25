import React from 'react';
import { Link, graphql } from "gatsby"
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../assets/scss/light.scss';
import ArrowRight from '../assets/icons/arrow-right.svg';
import ArrowLeft from '../assets/icons/arrow-left.svg';

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  const total = data.allMarkdownRemark.totalCount;
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description;
  const currentPage = 1
  const nextPage = total > 3 ? (currentPage + 1).toString() : '';
  const previousPage = currentPage > 1 ? (currentPage - 1).toString() : ''
  return (
    <Layout>
      <SEO title={title} description={description} />
      <ul className="article-list">
        {posts.map((post) => {
          const tags = post.node.frontmatter.tags
          return (
            <li key={post.node.id} className="article-list-item">
              <Link to={post.node.fields.slug} title={post.node.frontmatter.title}>
                <h5>
                  {post.node.frontmatter.title} <ArrowRight />
                </h5>
              </Link>
              <p>
                {post.node.frontmatter.description || post.node.frontmatter.excerpt}
              </p>
              <div className="article-list-footer">
                <span className="article-list-date">
                  {post.node.frontmatter.date}
                </span>
                <span className="article-list-divider">-</span>
                <span className="article-list-minutes">
                  {post.node.timeToRead} mins read
                </span>
                <span className="article-list-divider">-</span>
                <div className="article-list-tags">
                  {post.node.frontmatter.tags.map((item, index) => (
                    <a key={index} href={`/tags/${item}`} title={`See all posts with tag ${item}`}>{item}</a>
                  ))}
                </div>
              </div>
            </li>
          );
        })}
        <li key={'555gg7'} className="article-pagination">
          {currentPage > 1 && <a href={previousPage} className="article-pagination-left">
            <ArrowLeft /> Previous Page
          </a>}
          {nextPage && <a href={nextPage} className="article-pagination-right">
            <ArrowRight /> Next Page
          </a>}
        </li>
      </ul>
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title 
        author
      }
    }
    allMarkdownRemark(
      limit: 3
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
