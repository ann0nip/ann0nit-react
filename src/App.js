import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import styles from "./App.module.css";
import "antd/dist/antd.css";

import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

function App() {
  return (
    <div className={styles.app}>
      <WhatsAppWidget />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
