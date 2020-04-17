import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div style={{ color: `black` }}>

      <Header headerText="About the Game"/>
      <p>The rules of this game are pretty easy. More people are in the club funier will be the game, fiter and sexier you'll be.</p>
      <ul style={{ margin: `2rem 4rem` }}>
        <li>First to enter in the club you need to do 10 push up</li>
        <li>From the moment you did 10 push up, you are safe from all members of the club for the next hour.</li>
        <li>Once the hour is done, everyone can give 10 to anyone but you have to be the faster to say "Do the ten, /Name of your friend/" (if you have 3 of your friends on the same room you have to say the sentence 3 times).</li>
        <li>The one who receive the 10 is safe from everyone, the one who gave the 10 is only safe from who he give it to. </li>
        <li>If one day you want to quit the club, You need to do 100 push up in the row in the front of another club member.</li>

      </ul>
      <p>As easy then that ! The whole concept is to give as much as push up you can to your friends for that they become sexier and healthier. It can be really fun if you choose spot embarassing for your friends to them</p>
    </div>
  </Layout>
)
