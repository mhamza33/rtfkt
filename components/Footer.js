import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_header}>
        <h1>REVEAL YOUR DNA</h1>
        <p>Public sale is closed now.</p>
        <button>REVEAL</button>
      </div>
      <div className={styles.bottom_footer}>
        <div className={styles.footer_info}>
          <img src="/logo.svg" alt="Sorry!" />
          <p>
            We are a creator led organisation. RTFKT uses the latest in game
            engines, NFT , blockchain authentication and augmented reality,
            combined with manufacturing expertise to create one of a kind
            sneakers and digital artifacts.
          </p>
        </div>
        <div className={styles.footer_link}>
          <div className={styles.info_link}>
            <p>Main Website</p>
            <p>Privacy Policy</p>
            <p>Terms of Services</p>
            <p>Legal Overview</p>
          </div>
          <div className={styles.social_link}>
            <p>Instagram</p>
            <p>Discord</p>
            <p>Twitter</p>
            <p>Youtube</p>
            <p>TikTok</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
