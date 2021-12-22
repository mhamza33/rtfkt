import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo_nav}>
        <img src="/logo.svg" />
      </div>
      <div className={styles.nav_items}>
        <div className={styles.nav_items_link}>
          <Link href="/">
            <p>ABOUT</p>
          </Link>
          <Link href="/">
            <p>ROADMAP</p>
          </Link>
          <Link href="/">
            <p>TRAJETORY</p>
          </Link>
        </div>
        <div className={styles.nav_items_btn}>
          <button>COLLECT WALLET</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
