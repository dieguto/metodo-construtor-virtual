import React, { Component, useState } from "react";
import "../css/menu.css";
import "../css/fontes.css";
import "../css/bootstrap.min.css";

import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";

import { Link } from "react-router";
import "../css/edificacoes.css";

import MetodoLogo from "../Assets/icons/logo_mtdtech.svg";

// footer que ainda não foi componentizado

import IconeUmBranco from "../Assets/icons/icon_1_branco.svg";
import IconeDois from "../Assets/icons/icon_2.svg";
import IconeTres from "../Assets/icons/icon_3.svg";
import IconeVoltar from "../Assets/icons/icon_voltar.svg";
import IconeContinuar from "../Assets/icons/icon_avancar.svg";
import IconeSeta from "../Assets/icons/down-arrow.png";

import "../css/rodape.css";

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <span
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <img className="icone-seta" src={IconeSeta}></img>
      </span>
      <Collapse in={open}>
        <div className="celula-collapse  regular">
          <span className="barlow-semibold"></span> opção 1
          <input type="checkbox" />
          <br></br>
          <span className="barlow-semibold"></span> opção 2
          <input type="checkbox" />
          <br></br>
          <span className="barlow-semibold"></span> opção 3
          <input type="checkbox" />
          <br></br>
          <span className="barlow-semibold"></span> opção 4
          <input type="checkbox" />
        </div>
      </Collapse>
    </>
  );
}

export default class Edificacoes extends Component {
  constructor() {
    super();
    this.state = {
      somaInt: 0,
      item1: 0,
      item2: 0,
      item3: 0,
      item4: 0,
      item5: 0,
      item6: 0,
      item7: 0,
      item8: 0,
      item9: 0
    };
    // this.SomarDados = this.SomarDados.bind(this);
    this.mudarItem1 = this.mudarItem1.bind(this);
    this.somar = this.somar.bind(this);
  }

  somar() {
    let resultado =
      this.state.item1 +
      this.state.item2 +
      this.state.item3 +
      this.state.item4 +
      this.state.item5 +
      this.state.item6 +
      this.state.item7 +
      this.state.item8 +
      this.state.item9;

    this.setState({ somaInt: resultado });

    setTimeout(() => {
      console.log(this.state.somaInt + " %%%%%%%%%%%");
    }, 1000);
  }

  mudarItem1(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaInt;
    let item1 = this.state.item1;

    console.log(item1, value);
    if (item1 !== value) {
      resultado -= item1;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item1: value });

    this.setState({ somaInt: resultado });

    setTimeout(() => {
      console.log(this.state.somaInt);
    }, 1000);

    // this.somar();
  }

  mudarItem2(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaInt;
    let item2 = this.state.item2;

    console.log(item2, value);
    if (item2 !== value) {
      resultado -= item2;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item2: value });

    this.setState({ somaInt: resultado });

    setTimeout(() => {
      console.log(this.state.somaInt);
    }, 1000);
  }

  mudarItem3(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaInt;
    let item3 = this.state.item3;

    console.log(item3, value);
    if (item3 !== value) {
      resultado -= item3;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item3: value });

    this.setState({ somaInt: resultado });

    setTimeout(() => {
      console.log(this.state.somaInt);
    }, 1000);

    // this.somar();
  }

  mudarItem4(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaInt;
    let item4 = this.state.item4;

    console.log(item4, value);
    if (item4 !== value) {
      resultado -= item4;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item4: value });

    this.setState({ somaInt: resultado });

    setTimeout(() => {
      console.log(this.state.somaInt);
    }, 1000);
    // this.somar();
  }

  mudarItem5(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaInt;
    let item5 = this.state.item5;

    console.log(item5, value);
    if (item5 !== value) {
      resultado -= item5;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item5: value });

    this.setState({ somaInt: resultado });

    setTimeout(() => {
      console.log(this.state.somaInt);
    }, 1000);
  }

  mudarItem6(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaInt;
    let item6 = this.state.item6;

    console.log(item6, value);
    if (item6 !== value) {
      resultado -= item6;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item6: value });

    this.setState({ somaInt: resultado });

    setTimeout(() => {
      console.log(this.state.somaInt);
    }, 1000);
  }

  mudarItem7(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaInt;
    let item7 = this.state.item7;

    console.log(item7, value);
    if (item7 !== value) {
      resultado -= item7;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item7: value });

    this.setState({ somaInt: resultado });

    setTimeout(() => {
      console.log(this.state.somaInt);
    }, 1000);
  }

  mudarItem8(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaInt;
    let item8 = this.state.item8;

    console.log(item8, value);
    if (item8 !== value) {
      resultado -= item8;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item8: value });

    this.setState({ somaInt: resultado });

    setTimeout(() => {
      console.log(this.state.somaInt);
    }, 1000);
  }

  mudarItem9(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaInt;
    let item9 = this.state.item9;

    console.log(item9, value);
    if (item9 !== value) {
      resultado -= item9;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item9: value });

    this.setState({ somaInt: resultado });

    setTimeout(() => {
      console.log(this.state.somaInt);
    }, 1000);
  }

  render() {
    return (
      <div className="">
        <div className="row">
          <div className="col-3 ">
            <img
              className="logo-metodo"
              src={MetodoLogo}
              alt="logo da empresa"
            ></img>
          </div>
          <div className="col-7  mt-4">
            <h2 className="barlow-extrabold preto-metodo">
              fase 1
              <span className="barlow-thin cor-padrao-metodo">
                /edificações
              </span>
            </h2>
          </div>
          <div className="col-2  menu-resumo"></div>

          <div className="col-2 ">
            <h2 className="barlow-extrabold acinzentado-metodo tarefa">
              tarefa
            </h2>
          </div>
          <div className="col-4 ">
            <h2 className="barlow-extrabold acinzentado-metodo">níveis</h2>
          </div>
          <div className="col-4 ">
            <div className="imagem-transitoria"></div>
          </div>
          <div className="col-2  menu-resumo">
            <h2 className="barlow-extrabold acinzentado-metodo ">resumo</h2>
          </div>

          {/* TERRAPLANAGEM */}

          <div className="col-2  barlow-bold itens-titulos">terraplanagem</div>
          <div className="col-2  regular">
            <input
              type="radio"
              name="terraplanagem-rd"
              onClick={e => this.mudarItem1(e)}
              value="5"
            />
            <span className="barlow-semibold"></span> limpeza de terreno
            {/* teste */}
            <Example></Example>
            {/* teste */}
          </div>
          <div className="col-2  regular">
            <input
              type="radio"
              name="terraplanagem-rd"
              onClick={e => this.mudarItem1(e)}
              value="6"
            />
            <span className="barlow-semibold"></span> movimentação Parcial(50%)
          </div>
          <div className="col-2  regular">
            <input
              type="radio"
              name="terraplanagem-rd"
              onClick={e => this.mudarItem1(e)}
              value="7"
            />
            <span className="barlow-semibold"></span> corte e aterro
          </div>
          <div className="col-1  regular"></div>
          <div className="col-1  regular"></div>
          <div className="col-2  regular menu-resumo">R$ XXXXXX</div>

          {/* DEMOLIÇÕES DE TERRENO */}

          <div className="col-2  barlow-bold itens-titulos">
            demolições no terreno
          </div>
          <div className="col-2  regular">
            <input
              name="demolicao-rd"
              type="radio"
              onClick={e => this.mudarItem2(e)}
              value="5"
            />
            <span className=""> sim</span>
          </div>
          <div className="col-2  regular">
            <input
              name="demolicao-rd"
              type="radio"
              onClick={e => this.mudarItem2(e)}
              value="6"
            />
            <span className="barlow-semibold"></span> não
          </div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular menu-resumo">R$ XXXXXX</div>

          {/* FUNDAÇÃO */}

          <div className="col-2  barlow-bold itens-titulos">fundação</div>
          <div className="col-2  regular">
            <input
              name="fundacao-rd"
              type="radio"
              onClick={e => this.mudarItem3(e)}
              value="5"
            />
            <span className="barlow-semibold"></span> radier
          </div>
          <div className="col-2  regular">
            <input
              name="fundacao-rd"
              type="radio"
              onClick={e => this.mudarItem3(e)}
              value="6"
            />
            <span className="barlow-semibold"></span> sapata
          </div>
          <div className="col-2 ">
            <input
              name="fundacao-rd"
              type="radio"
              onClick={e => this.mudarItem3(e)}
              value="7"
            />
            <span className=""> estaca</span>{" "}
          </div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular menu-resumo">R$ XXXXXX</div>

          {/* ESTRUTURAS */}

          <div className="col-2  barlow-bold itens-titulos">estruturas</div>
          <div className="col-2  regular">
            <input
              name="estruturas-rd"
              type="radio"
              onClick={e => this.mudarItem4(e)}
              value="5"
            />{" "}
            concreto
          </div>
          <div className="col-2  regular">
            <input
              name="estruturas-rd"
              type="radio"
              onClick={e => this.mudarItem4(e)}
              value="6"
            />{" "}
            prémoldado
          </div>
          <div className="col-2  regular">
            <input
              name="estruturas-rd"
              type="radio"
              onClick={e => this.mudarItem4(e)}
              value="7"
            />{" "}
            metálica
          </div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular menu-resumo">R$ XXXXXX</div>

          {/* ESCADAS */}

          <div className="col-2  barlow-bold itens-titulos">escadas</div>
          <div className="col-2  regular">
            <input
              name="escadas-rd"
              type="radio"
              onClick={e => this.mudarItem5(e)}
              value="6"
            />{" "}
            concreto
          </div>
          <div className="col-2  regular">
            <input
              name="escadas-rd"
              type="radio"
              onClick={e => this.mudarItem5(e)}
              value="7"
            />{" "}
            metálica
          </div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular menu-resumo"> R$ XXXXXX</div>

          {/* COBERTURA */}

          <div className="col-2  barlow-bold itens-titulos">cobertura</div>
          <div className="col-2  regular">
            <input
              name="cobertura-rd"
              type="radio"
              onClick={e => this.mudarItem6(e)}
              value="4"
            />{" "}
            forro + telhado
          </div>
          <div className="col-2  regular">
            <input
              name="cobertura-rd"
              type="radio"
              onClick={e => this.mudarItem6(e)}
              value="5"
            />{" "}
            forro + laje
          </div>
          <div className="col-2  regular">
            <input
              name="cobertura-rd"
              type="radio"
              onClick={e => this.mudarItem6(e)}
              value="6"
            />{" "}
            laje
          </div>
          <div className="col-2  regular">
            <input
              name="cobertura-rd"
              type="radio"
              onClick={e => this.mudarItem6(e)}
              value="7"
            />{" "}
            laje + telhado
          </div>
          <div className="col-2  regular menu-resumo"> R$ XXXXXX</div>

          {/* ESTACIONAMENTO */}

          <div className="col-2  barlow-bold itens-titulos">estacionamento</div>
          <div className="col-2  regular">
            <input
              name="estacionamento-rd"
              type="radio"
              onClick={e => this.mudarItem7(e)}
              value="5"
            />{" "}
            próprio
          </div>
          <div className="col-2  regular">
            <input
              name="estacionamento-rd"
              type="radio"
              onClick={e => this.mudarItem7(e)}
              value="6"
            />{" "}
            alugado
          </div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular menu-resumo">R$ XXXXXX</div>

          {/* PASSEIO */}

          <div className="col-2  barlow-bold itens-titulos">passeio</div>
          <div className="col-2  regular">
            <input
              name="passeio-rd"
              type="radio"
              onClick={e => this.mudarItem8(e)}
              value="5"
            />{" "}
            manter
          </div>
          <div className="col-2  regular">
            <input
              name="passeio-rd"
              type="radio"
              onClick={e => this.mudarItem8(e)}
              value="6"
            />{" "}
            reformar
          </div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular menu-resumo"> R$ XXXXXX</div>

          {/* Numero de pavimentos */}

          <div className="col-2  barlow-bold itens-titulos">
            N° de pavimentos
          </div>
          <div className="col-2  regular">
            <input
              name="pavimentos-rd"
              type="radio"
              onClick={e => this.mudarItem9(e)}
              value="5"
            />{" "}
            1
          </div>
          <div className="col-2  regular">
            <input
              name="pavimentos-rd"
              type="radio"
              onClick={e => this.mudarItem9(e)}
              value="6"
            />{" "}
            2
          </div>
          <div className="col-2  regular">
            <input
              name="pavimentos-rd"
              type="radio"
              onClick={e => this.mudarItem9(e)}
              value="7"
            />{" "}
            3
          </div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular menu-resumo"> R$ XXXXXX</div>

          <div className="col-10 espacamento "></div>
          <div className="col-2 espacamento  menu-resumo"></div>

          {/* Progressbar */}

          <div className="div-progressbar">
            <div className="col-10 ">
              <div className="progress">
                <div
                  className="progress-bar progressbar"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className=" resumo"></div>
          </div>

          {/* Rodapé */}

          <div className="div-rodape">
            <div className=" box-rodape-icone">
              <div className="">
                <img
                  className=" float-left tamanho-icone"
                  src={IconeUmBranco}
                  alt="Icone numero um"
                />
              </div>
              <div className="fonte-footer-pag ">
                <span className="texto-rodape barlow branco-metodo">
                  edificações
                </span>
              </div>
            </div>

            <div className=" box-rodape-icone">
              <div className="">
                <img
                  className=" float-left tamanho-icone"
                  alt="Icone numero dois"
                  src={IconeDois}
                />
              </div>
              <div className="fonte-footer-pag ">
                <span className="texto-rodape barlow black">
                  infraestrutura
                </span>
              </div>
            </div>

            {/* <div className="col-1  box-rodape-palavras"></div> */}
            <div className=" box-rodape-icone">
              <div className="">
                <img
                  className=" float-left tamanho-icone "
                  alt="Icone numero três"
                  src={IconeTres}
                />
              </div>
              <div className="fonte-footer-pag ">
                <span className="texto-rodape barlow black">
                  padrão de acabamento
                </span>
              </div>
            </div>

            <div className="box-rodape-icone2">
              <Link to="/">
                <div>
                  <img
                    className="tamanho-icone"
                    src={IconeVoltar}
                    alt="Icone voltar"
                  />
                </div>
              </Link>
              voltar
            </div>

            <div className="box-rodape-icone3">
              <Link to="/infraestrutura">
                <div>
                  <img
                    className="tamanho-icone"
                    alt="Icone prosseguir"
                    src={IconeContinuar}
                  />
                </div>
              </Link>
              prosseguir
            </div>

            <div className="box-rodape-palavras">
              <div className="metro-quadrado barlow-bold ">total m²</div>
              <div className="resultado barlow-bold ">R$ XXXXXXX</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
