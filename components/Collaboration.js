import React from "react";
import styles from "../styles/Home.module.css";

const Collaboration = () => {
  return (
    <div className={styles.collaboration}>
      <div className={styles.collaboration_header}>
        <h1>A COLLABORATION WITH /</h1>
        <h1>MURAKAMI</h1>
        <p>
          We have been working in secret with our Idol, Takashi Murakami, as a
          special collaborator, bringing his iconic designs to the Avatars. From
          Eyes, Mouths, Helmets to Clothes, these avatars will have a special
          Murakami Drip property defined on the blockchain.
        </p>
      </div>
      <div className={styles.collaboration_learnMore}>
        <img src="/murakami.svg" alt="Sorry!" />
        <button>LEARN MORE</button>
      </div>
    </div>
  );
};

export default Collaboration;
