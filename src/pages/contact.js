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
    <div style={{ color: `teal` }}>


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





      <p>Send us a message!</p>
      <a href="mailto:etienne@cherri.fr">Contact Me</a>
    </div>
  </Layout>
)
