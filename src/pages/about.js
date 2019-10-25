import React from 'react';
import { Link, graphql } from "gatsby"
import SEO from '../components/seo';
import Layout from '../components/layout';

const About = ({ data }) => {
    const title = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description;
    return (
        <Layout>
            <SEO title={title} description={description} />
            This is about page!
        </Layout>
    );
}

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title 
        author
      }
    }
  }
`

export default About