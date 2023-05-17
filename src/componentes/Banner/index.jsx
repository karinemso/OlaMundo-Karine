import React from "react";
import styles from "./Banner.module.css";
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.jpg'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, Mundo!</h1>
        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo, instrutor de
          Front-end da Alura. Aqui compartilho vários conhecimentos, espero que
          aprenda algo novo{":) "}
        </p>
      </div>
      <div className={styles.imagens}>
        <img src={circuloColorido} className={styles.circuloColorido} aria-hidden ={true}alt="" />
        <img src={minhaFoto} className={styles.minhaFoto} aria-hidden ={true}alt="" />
      </div>
    </div>
  );
}
