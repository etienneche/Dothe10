import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import styles from "./about-css-modules.module.css"
import Layout from "../components/layout"

console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)
export default () => (
  <Layout>
    <div style={{ color: `black` }}>


      <Header headerText="Contact the Members" />

      <User
        username="Sapir Alagem"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="Co-funder / Project manager of the game and active member since 2018."
      />
      <User
        username="Etienne Cherri"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="Co-funder / Web Developer of the game and active member since 2018."
      />
      <User
        username="Tom Rauch"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="Co-funder / Project manager of the game and active member since 2018."
      />
      <User
        username="Alessio Accomodo"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="Co-funder / Project manager of the game and active member since 2018."
      />
      <User
        username="Arnaud Chabert"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="active member since 2019. Fun fact Arnaud already been out of the club doing 100 push up, and did 10 more 20 minute later to come back in the club."
      />
      <User
        username="Victor Campaci"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="active member since 2019."
      />


      <p>Send us a message!</p>
      <a href="mailto:etienne@cherri.fr">Contact Me</a>
    </div>
  </Layout>
)
