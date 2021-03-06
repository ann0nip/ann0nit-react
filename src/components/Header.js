import React from "react";
import { Row, Col } from "antd";
import styles from "./Header.module.css";

function HeaderComponent() {
  return (
    <header className={styles.header}>
      <Row>
        <Col xs={24} className={styles.header_logo}>
          <img
            className={styles.header_logo_img}
            src={require("../images/ann0nit.png")}
            alt="logo"
          />
        </Col>
      </Row>
    </header>
  );
}

export default HeaderComponent;
