import React, { useState } from "react";
import "./styles.css";

export default function App(props) {
  // ENTRADA, RODANDO, FIM
  const [estado, setEstado] = useState("ENTRADA");

  // PALPITE
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const title = <h1>{props.name}</h1>;

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumPalpites(1);
    setPalpite(150);
  };
  if (estado === "ENTRADA") {
    return (
      <div className="App">
        {title}
        <p>Pense em um número de 0 a 300 e precione o botão.</p>
        <button onClick={iniciarJogo} className="btnLarge">
          Começar a Jogar!
        </button>
      </div>
    );
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div className="App">
        {title}
        <h3>
          Acertei o número {palpite} com {numPalpites} chutes!
        </h3>
        <button onClick={iniciarJogo} className="btnLarge">
          Iniciar novamente!
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      {title}
      <h2>O seu número é {palpite}?</h2>
      <p>
        Min: {min} / Max: {max}
      </p>
      <button onClick={menor}>Menor!</button>
      <button onClick={acertou} id="btnAcertou">
        Acertou!
      </button>
      <button onClick={maior}>Maior!</button>
    </div>
  );
}
