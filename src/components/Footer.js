import React from "react";
import styles from "./Footer.module.css";

function FooterComponent() {
  return (
    <footer className={styles.footer}>
      <span>
        Designed and developed by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.juanmartingimenez.com"
        >
          {" "}
          @Ann0nIp
        </a>{" "}
        © 2020
        <span role="img" aria-label="coffe-cup">
          ☕️
        </span>{" "}
      </span>
    </footer>
  );
}

export default FooterComponent;
