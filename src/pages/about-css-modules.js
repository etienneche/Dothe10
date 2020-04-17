import React from "react"
import { Link } from "gatsby"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"
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
    <h1>About CSS Modules</h1>
    <p>Team and members</p>

  </Layout>
)
