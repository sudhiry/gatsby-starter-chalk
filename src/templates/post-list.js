import React from "react";
import { Link, graphql } from "gatsby";
import '../assets/scss/light.scss';
import Layout from "../components/layout"
import ArrowRight from '../assets/icons/arrow-right.svg';
import ArrowLeft from '../assets/icons/arrow-left.svg';

const PostList = (props) => {
  const posts = props.data.allMarkdownRemark.edges
  const labels = props.data.site.siteMetadata.labels
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <Layout>
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
                  {post.node.timeToRead} min read
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
          {!isFirst && (
            <Link to={prevPage} rel="prev" className="article-pagination-left">
              <ArrowLeft /> Older posts
              </Link>
          )}
          {!isLast && (
            <Link to={nextPage} rel="next" className="article-pagination-right">
              Newer posts <ArrowRight />
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  )
}

export const listQuery = graphql`
         query paginateQuery($skip: Int!, $limit: Int!) {
           site {
             siteMetadata {
               title 
               author
             }
           }
           allMarkdownRemark(
             limit: $limit
             skip: $skip
             sort: { fields: [frontmatter___date], order: DESC }
             filter: { frontmatter: { published: { eq: true } } }
           ) {
             totalCount
             edges {
               node {
                 excerpt(pruneLength: 200)
                 html
                 id
                 frontmatter {
                   title
                   date(formatString: "MMMM DD, YYYY")
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

export default PostList
