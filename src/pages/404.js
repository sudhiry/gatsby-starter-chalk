import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div class='notfound-wrapper'>
      <div class='notfound-content'>
        <p>
          Looks like you got lost.
          <br />
          Let's get you back to the &nbsp;
          <a href='/'>homepage</a>!
        </p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
