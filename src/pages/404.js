import React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"

const NotFound = () => {
  return (
    <Layout>
      <Helmet>
        <title>Navdeep Singh - Full Stack Developer</title>
        <meta name="description" content="Welcome to my personal website." />
        <meta property="og:type" content="website" />
      </Helmet>
      <section className="home">
        <div className="introduction" id="main">
          <h1>404: This was probably a mistake.</h1>
        </div>
      </section>
    </Layout>
  )
}

export default NotFound
