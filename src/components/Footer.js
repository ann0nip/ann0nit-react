import React from "react";
import styles from "./Footer.module.css";

function FooterComponent() {
  return (
    <footer className={styles.footer}>
      <span>
        ©ANN0NIT 2020 - Made with ☕️ by
        <a target="_blank" href="https://www.juanmartingimenez.com">
          @Ann0nIp
        </a>
      </span>
    </footer>
  );
}

export default FooterComponent;
