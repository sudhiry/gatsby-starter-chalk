/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from './header';
import Foooter from './footer';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          tagline
          author
          social {
            linkedin
            github
            stackoverflow
            twitter
            dribbble
            flickr
            email
            bitcoin
            ethereum
            gitlab
            youtube
            twitch
            discord
            tumblr
            bitbucket
            docker
            instagram
            keybase
            medium 
            spotify
            steam
          }
        }
      }
    }
  `)

  return (
    <main>
      <div className="grid grid-centered">
        <div className="grid-cell">
          <Header 
            siteTitle={data.site.siteMetadata.title}
            tagline={data.site.siteMetadata.tagline}
            author={data.site.siteMetadata.author}
            social={data.site.siteMetadata.social}
          />
            {children}
          <Foooter />
      </div>
      </div>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
