import React from "react";
import styles from "../styles/Home.module.css";

const Trajetory = () => {
  return (
    <div className={styles.trajetory}>
      <img src="/left_arrow.svg" alt="Sorry!" />
      <div className={styles.trajetory_left}>
        <img src="/left_1.svg" alt="Sorry!" />
        <h1>ROADMAP</h1>
        <p>
          Your space to customise and upgrade, to show off you NFT’s and hang
          out with your clone frens, in space. Powered by OnCyber, exclusive to
          Clone owners
        </p>
      </div>
      <div className={styles.trajetory_right}>
        <img src="/right_1.svg" alt="Sorry!" />
        <h1>2022 3D VAULT</h1>
        <p>
          Live 3D file updates for your clone to use on the Metaverse and across
          different platforms. Available to download in: .blend .obj .fbx .MA,
          glb, Unreal Engine, Daz3D
        </p>
      </div>
      <img src="/right_arrow.svg" alt="Sorry!" />
    </div>
  );
};

export default Trajetory;
