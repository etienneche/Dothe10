import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import { Button } from "../components/button"

export default () => (
  <Layout>
    <div style={{ color: 'black'}}>
      <Header headerText="The Game" />

      <p>Take care about the sex appeal of your friends and give them push up anywhere, and get READY to laugh ... a Lot !</p>
      <img src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80" alt="" />

      <h3>First, What's the rules of the game ?</h3>
      <p>The rules are simple and clear, more club members are around you more it's can be fun.</p>
      <h3>Two, How to find club members around me ?</h3>
      <p>Using our Application, enable the geolocalisation of your smartphone and go outside searchin others club members.</p>
      <h3>Three, How to get more followers ? </h3>
      <p>Like all is about laugh on this game, if you give the 10 in some really embarassing situation to other, take a picture, share it and make laugh the community. </p>
      <button>Join Us</button>
    </div>
  </Layout>
)
