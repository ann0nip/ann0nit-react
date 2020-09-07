import React from "react";
import Header from "./components/Header";
import styles from "./App.module.css";
import "antd/dist/antd.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <section>section</section>
      <footer>footer</footer>
    </div>
  );
}

export default App;
