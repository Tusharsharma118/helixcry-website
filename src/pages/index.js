import React from "react"
import Layout from "../components/layout"
import About from "../components/about"
import Contact from "../components/contact"
import Forte from "../components/forte"
import Explore from "../components/explore"
import Hero from "../components/hero"
import "../styles/global.scss"
import '../fonts/8-bit-heading.ttf'
import '../fonts/8-bit-slim.ttf'
import '../fonts/8-bit-arcade.ttf'

const IndexPage = () => (
  <Layout>
    <Hero/>
    <Forte/>
    <Explore/>
    <About/>
    <Contact/>
  </Layout>
)

export default IndexPage
