import React from "react";
import styles from "./Footer.module.css";

function FooterComponent() {
  return (
    <footer className={styles.footer}>
      <span>
        ©ANN0NIT 2020 - Made with{" "}
        <span role="img" aria-label="coffe-cup">
          ☕️
        </span>{" "}
        by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.juanmartingimenez.com"
        >
          @Ann0nIp
        </a>
      </span>
    </footer>
  );
}

export default FooterComponent;
