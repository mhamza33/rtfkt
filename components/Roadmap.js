import React from "react";
import styles from "../styles/Home.module.css";

const Roadmap = () => {
  return (
    <div className={styles.roadmap}>
      <div className={styles.roadmap_header}>
        <h1>ROADMAP</h1>
        <p>
          Clone X Roadmap is centered around using your Clone accross worlds and
          realities.
        </p>
      </div>
      <div className={styles.roadmap_cards}>
        <div className={styles.bigcard}>
          <div className={styles.card}>
            <div className={styles.inner_card}>
              <img src="/globe.svg" alt="Sorry!" />
            </div>
            <div>
              <h1>METAVERSE READY</h1>
              <p>
                we’ve built a Clone.meta vault to give you access to 3D files to
                use across platforms.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.inner_card}>
              <img src="/clip.svg" alt="Sorry!" />
            </div>
            <div>
              <h1>FORGING EVENTS</h1>
              <p>
                we’ve built a Clone.meta vault to give you access to 3D files to
                use across platforms.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.bigcard}>
          <div className={styles.card}>
            <div className={styles.inner_card}>
              <img src="/shirt.svg" alt="Sorry!" />
            </div>
            <div>
              <h1>CLONEX WEARABLES</h1>
              <p>
                we’ve built a Clone.meta vault to give you access to 3D files to
                use across platforms.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.inner_card}>
              <img src="/blade.svg" alt="Sorry!" />
            </div>
            <div>
              <h1>SPECIAL ACCESS</h1>
              <p>
                we’ve built a Clone.meta vault to give you access to 3D files to
                use across platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1>TRAJETORY</h1>
    </div>
  );
};

export default Roadmap;
