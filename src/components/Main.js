import React from "react";
import { Row, Col } from "antd";
import styles from "./Main.module.css";

function MainComponent() {
  return (
    <section className={styles.main}>
      <main className={styles.main_content}>
        <Row>
          <Col xs={4}></Col>
          <Col xs={24} lg={8} className={styles.main_content_box}>
            <h1 className={styles.main_content_box_h1}>
              Cursos de Desarrollo Web
            </h1>{" "}
            <h2 className={styles.main_content_box_h2}>para principiantes.</h2>
            <p className={styles.main_content_box_p}>
              Aprende conmigo a crear aplicaciones web de la manera mas simple y
              amena posible!{" "}
              <span role="img" aria-label="happy face">
                😀
              </span>
            </p>
          </Col>
          <Col xs={24} lg={8} className={styles.main_content_box}>
            <div className={styles.main_content_box_video}>
              <iframe
                title="just test"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/smbG77cepTM"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </Col>
          <Col xs={4}></Col>
        </Row>
      </main>
      <section className={styles.content}>
        <Row>
          <Col xs={24}>
            <div className={styles.content_info}>
              <p className={styles.content_info_p}>
                ¿Quieres dar tus primeros pasos en el desarrollo web? En
                Ann0nIt.com aprenderás desde cero los fundamentos básicos como
                HTML, CSS y JavaScript{" "}
                <span role="img" aria-label="programmer">
                  👨🏻‍💻
                </span>
              </p>
              <p className={styles.content_info_p}>
                Sumate, aprendé y desarrollate en el mundo de la{" "}
                <strong>Web 3.0</strong>
              </p>
            </div>
          </Col>
        </Row>

        <div className={styles.content_bootcamps}>
          <div className={styles.content_bootcamp_box}>
            <h2>Title</h2>¡¡
            <figure className={styles.content_bootcamp_box_figure}>
              <img
                src="https://www.nicolas-schurmann.com/static/247e510055ad932e286ebbe11276356e/1766a/render-props.png"
                alt=""
              ></img>
            </figure>
            <section>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              repellendus nobis ipsa incidunt rem. Doloremque ad cum ipsum
              iusto?
            </section>
          </div>

          <div className={styles.content_bootcamp_box}>
            <h2>Title</h2>
            <figure className={styles.content_bootcamp_box_figure}>
              <img
                src="https://www.nicolas-schurmann.com/static/247e510055ad932e286ebbe11276356e/1766a/render-props.png"
                alt=""
              ></img>
            </figure>

            <section>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              repellendus nobis ipsa incidunt rem. Doloremque ad cum ipsum
              iusto?
            </section>
          </div>
        </div>
      </section>
    </section>
  );
}

export default MainComponent;
