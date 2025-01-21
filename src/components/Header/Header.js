import React from "react"
import { Link } from "react-router-dom"
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src="/path-to-your-icon.png" alt="AluraFlix" />
      </Link>
      <nav>
        <Link to="/" className={styles.navButton}>
          Home
        </Link>
        <Link to="/new-video" className={styles.navButton}>
          Nuevo Video
        </Link>
      </nav>
    </header>
  )
}

export default Header

