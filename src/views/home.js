import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Fussy Zigzag Cattle</title>
        <meta property="og:title" content="Fussy Zigzag Cattle" />
      </Helmet>
      <img
        alt="image"
        src="/playground_assets/standard-white-1500w.png"
        className="home-image"
      />
    </div>
  )
}

export default Home
