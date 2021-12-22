import React from "react";
import styles from "../styles/Home.module.css";

const Sale = () => {
  return (
    <div className={styles.sale}>
      <div className={styles.row_1}>
        <h1>20.000</h1>
        <p>
          20000 avatar will be available in total, split between the pre-sale
          and public sale. Avatars not redeemed in the pre-sale will be deployed
          into the public sale. All avatar traits and attributes will be
          generated randomly and revealed after the public sale.
        </p>
      </div>
      <div className={styles.row_2}>
        <h1>
          <u>PRESALE/</u>
        </h1>
        <h1>11.133</h1>
        <p>
          We want to make the pre-sale as affordable as possible to reward our
          collectors; hence we have <br />
          <br />
          chosen a price point of 0.05Ξ for the RTFKT pre-sale. <br />
          <br />1 qualified RTFKT NFT gives 3 reserved opportunities to buy into
          the 48 hr pre-sale <br />
          <br />
          (excluding the Metakey: Edition Two RTFKT version that gives only 1
          opportunity in pre-sale)
        </p>
      </div>
    </div>
  );
};

export default Sale;
