import React from "react";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.info}>
        <h1>
          <u>ABOUT THE PROJECT</u>
        </h1>

        <h1>
          CLONE X IS OUR MOST AMBITIOUS PROJECT YET,THE BEGINNING OF A WHOLE
          ECOSYSTEM FOR OUR COMMUNITY, QUALITY-FOCUSED, HIGH-END AVATARS, READY
          FOR THE METAVERSE.
        </h1>

        <p>
          CLONE X Corp was founded by three extraterrestrials who came from the
          planet of Orbitar in the Draco constellation. These interplanetary
          tourists have come to accelerate our evolution towards an immaterial
          existence. They plan to transfer all human consciousness into advanced
          clone forms to create the ultimate Metaverse.
        </p>

        <p>
          In this advanced civilization, humans no longer reside in an organic
          form but are instead represented by their digital CloneX avatars. This
          ground breaking technology has revolutionized Homo sapienss ability to
          self-express themselves through customizable avatar identities. This
          development also allows Clones to travel across galaxies and expand
          our civilization into new galaxies and simulations.
        </p>

        <button>
          {" "}
          <img src="/watch.svg" alt="Sorry!" />
        </button>
      </div>
    </div>
  );
};

export default About;
