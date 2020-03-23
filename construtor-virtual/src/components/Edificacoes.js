import React, { Component, useState } from "react";
import "../css/menu.css";
import "../css/fontes.css";
import "../css/bootstrap.min.css";

import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";

import { Link, browserHistory } from "react-router";
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
      somaEdificacoes: 0,
      item1: 0,
      item2: 0,
      item3: 0,
      item4: 0,
      item5: 0,
      item6: 0,
      item7: 0,
      item8: 0,
      item9: 0,
      itens: []
      // total: 0
    };
  }

  componentDidMount() {
    this.pegarLista();
  }

  pegarLista() {
    let lista = document.querySelectorAll("input[type='radio']");
    let listaNames = [];
    let listaSet = [];

    lista = Array.from(lista);

    for (let i = 0; i < lista.length - 1; i++) {
      listaNames.push(lista[i].name);
    }

    listaSet = [...new Set(listaNames)];
    console.log(listaSet);
    this.setState({ itens: listaSet });
    this.checkItens(listaSet);
  }

  checkItens(names) {
    let itens = [];
    let sum = 0;
    let item;
    names.map(name => {
      item = JSON.parse(localStorage.getItem(name));
      if (item !== null) itens.push(item.id);
    });
    console.log(itens);

    itens.map(item => {
      if (item !== "" && item !== null) {
        document.getElementById(item).checked = true;
        sum += parseInt(document.getElementById(item).value);
      }
    });

    this.setState({ somaEdificacoes: sum });
    setTimeout(() => {
      localStorage.setItem("edificacoes", this.state.somaEdificacoes);
      console.log(sum);
      this.fillItens();
    }, 1000);
  }
  fillItens() {
    let itens = this.state.itens;
    let item;
    let values = [];
    itens.map(item => {
      item = JSON.parse(localStorage.getItem(item));
      if (item !== null) values.push(parseInt(item.value));
    });

    this.setState({ item1: values[0] || 0 });
    this.setState({ item2: values[1] || 0 });
    this.setState({ item3: values[2] || 0 });
    this.setState({ item4: values[3] || 0 });
    this.setState({ item5: values[4] || 0 });
    this.setState({ item6: values[5] || 0 });
    this.setState({ item7: values[6] || 0 });
    this.setState({ item8: values[7] || 0 });
    this.setState({ item9: values[8] || 0 });
    this.setState({ somaEdificacoes: localStorage.getItem("edificacoes") });
    // this.setState({ total: localStorage.getItem("total") });
  }

  salvarDadosLocal(e) {
    e.preventDefault();
    let total = parseInt(localStorage.getItem("total")) || 0; //  0 50  99
    let newSomaEd = this.state.somaEdificacoes; //  50  48  54
    let somaEd = parseInt(localStorage.getItem("edificacoes")) || 0; //  0  50  48

    localStorage.setItem("edificacoes", this.state.somaEdificacoes); //  50 48  54

    if (total === 0) {
      // true  false   false
      total = newSomaEd; //  50
    } else {
      total -= somaEd; //  50-50=0  99-48=51
      total += newSomaEd; //  0+48=48   51+54=105
    }
    localStorage.setItem("total", total); //  50  48  105
    // this.setState({ total: total });
    browserHistory.push("/infraestrutura");
  }

  mudarItem1(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaEdificacoes;
    let item1 = this.state.item1;
    let itemValor;

    if (item1 !== value) {
      resultado -= item1;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item1: value });

    this.setState({ somaEdificacoes: resultado });

    setTimeout(() => {
      console.log(this.state.somaEdificacoes);
    }, 1000);

    itemValor = { id: e.target.id, value };
    localStorage.setItem(e.target.name, JSON.stringify(itemValor));
  }

  mudarItem2(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaEdificacoes;
    let item2 = this.state.item2;
    let itemValor;

    if (item2 !== value) {
      resultado -= item2;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item2: value });

    this.setState({ somaEdificacoes: resultado });

    setTimeout(() => {
      console.log(this.state.somaEdificacoes);
    }, 1000);

    itemValor = { id: e.target.id, value };
    localStorage.setItem(e.target.name, JSON.stringify(itemValor));
  }

  mudarItem3(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaEdificacoes;
    let item3 = this.state.item3;
    let itemValor;

    if (item3 !== value) {
      resultado -= item3;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item3: value });

    this.setState({ somaEdificacoes: resultado });

    setTimeout(() => {
      console.log(this.state.somaEdificacoes);
    }, 1000);

    itemValor = { id: e.target.id, value };
    localStorage.setItem(e.target.name, JSON.stringify(itemValor));
  }

  mudarItem4(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaEdificacoes;
    let item4 = this.state.item4;
    let itemValor;

    if (item4 !== value) {
      resultado -= item4;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item4: value });

    this.setState({ somaEdificacoes: resultado });

    setTimeout(() => {
      console.log(this.state.somaEdificacoes);
    }, 1000);

    itemValor = { id: e.target.id, value };
    localStorage.setItem(e.target.name, JSON.stringify(itemValor));
  }

  mudarItem5(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaEdificacoes;
    let item5 = this.state.item5;
    let itemValor;

    if (item5 !== value) {
      resultado -= item5;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item5: value });

    this.setState({ somaEdificacoes: resultado });

    setTimeout(() => {
      console.log(this.state.somaEdificacoes);
    }, 1000);

    itemValor = { id: e.target.id, value };
    localStorage.setItem(e.target.name, JSON.stringify(itemValor));
  }

  mudarItem6(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaEdificacoes;
    let item6 = this.state.item6;
    let itemValor;

    if (item6 !== value) {
      resultado -= item6;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item6: value });

    this.setState({ somaEdificacoes: resultado });

    setTimeout(() => {
      console.log(this.state.somaEdificacoes);
    }, 1000);

    itemValor = { id: e.target.id, value };
    localStorage.setItem(e.target.name, JSON.stringify(itemValor));
  }

  mudarItem7(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaEdificacoes;
    let item7 = this.state.item7;
    let itemValor;

    if (item7 !== value) {
      resultado -= item7;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item7: value });

    this.setState({ somaEdificacoes: resultado });

    setTimeout(() => {
      console.log(this.state.somaEdificacoes);
    }, 1000);

    itemValor = { id: e.target.id, value };
    localStorage.setItem(e.target.name, JSON.stringify(itemValor));
  }

  mudarItem8(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaEdificacoes;
    let item8 = this.state.item8;
    let itemValor;

    if (item8 !== value) {
      resultado -= item8;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item8: value });

    this.setState({ somaEdificacoes: resultado });

    setTimeout(() => {
      console.log(this.state.somaEdificacoes);
    }, 1000);

    itemValor = { id: e.target.id, value };
    localStorage.setItem(e.target.name, JSON.stringify(itemValor));
  }

  mudarItem9(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaEdificacoes;
    let item9 = this.state.item9;
    let itemValor;

    if (item9 !== value) {
      resultado -= item9;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item9: value });

    this.setState({ somaEdificacoes: resultado });

    setTimeout(() => {
      console.log(this.state.somaEdificacoes);
    }, 1000);

    itemValor = { id: e.target.id, value };
    localStorage.setItem(e.target.name, JSON.stringify(itemValor));
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
              id="limpeza-terreno"
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
              id="movimentacao"
            />
            <span className="barlow-semibold"></span> movimentação Parcial(50%)
          </div>
          <div className="col-2  regular">
            <input
              type="radio"
              name="terraplanagem-rd"
              onClick={e => this.mudarItem1(e)}
              value="7"
              id="corte-e-aterro"
            />
            <span className="barlow-semibold"></span> corte e aterro
          </div>
          <div className="col-1  regular"></div>
          <div className="col-1  regular"></div>
          <div className="col-2  regular menu-resumo">
            {" "}
            R$ {this.state.item1}
          </div>

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
              id="sim"
            />
            <span className=""> sim</span>
          </div>
          <div className="col-2  regular">
            <input
              name="demolicao-rd"
              type="radio"
              onClick={e => this.mudarItem2(e)}
              value="0"
            />
            <span className="barlow-semibold"></span> não
          </div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular menu-resumo">
            {" "}
            R$ {this.state.item2}
          </div>

          {/* FUNDAÇÃO */}

          <div className="col-2  barlow-bold itens-titulos">fundação</div>
          <div className="col-2  regular">
            <input
              name="fundacao-rd"
              type="radio"
              onClick={e => this.mudarItem3(e)}
              value="5"
              id="radier"
            />
            <span className="barlow-semibold"></span> radier
          </div>
          <div className="col-2  regular">
            <input
              name="fundacao-rd"
              type="radio"
              onClick={e => this.mudarItem3(e)}
              value="6"
              id="sapata"
            />
            <span className="barlow-semibold"></span> sapata
          </div>
          <div className="col-2 ">
            <input
              name="fundacao-rd"
              type="radio"
              onClick={e => this.mudarItem3(e)}
              value="7"
              id="estaca"
            />
            <span className=""> estaca</span>{" "}
          </div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular menu-resumo">
            {" "}
            R$ {this.state.item3}
          </div>

          {/* ESTRUTURAS */}

          <div className="col-2  barlow-bold itens-titulos">estruturas</div>
          <div className="col-2  regular">
            <input
              name="estruturas-rd"
              type="radio"
              onClick={e => this.mudarItem4(e)}
              value="5"
              id="concreto-estrutura"
            />{" "}
            concreto
          </div>
          <div className="col-2  regular">
            <input
              name="estruturas-rd"
              type="radio"
              onClick={e => this.mudarItem4(e)}
              value="6"
              id="premoldado"
            />{" "}
            prémoldado
          </div>
          <div className="col-2  regular">
            <input
              name="estruturas-rd"
              type="radio"
              onClick={e => this.mudarItem4(e)}
              value="7"
              id="metalica-estruturas"
            />{" "}
            metálica
          </div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular menu-resumo">
            R$ {this.state.item4}
          </div>

          {/* ESCADAS */}

          <div className="col-2  barlow-bold itens-titulos">escadas</div>
          <div className="col-2  regular">
            <input
              name="escadas-rd"
              type="radio"
              onClick={e => this.mudarItem5(e)}
              value="6"
              id="concreto-escada"
            />{" "}
            concreto
          </div>
          <div className="col-2  regular">
            <input
              name="escadas-rd"
              type="radio"
              onClick={e => this.mudarItem5(e)}
              value="7"
              id="metalica-escadas"
            />{" "}
            metálica
          </div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular menu-resumo">
            {" "}
            R$ {this.state.item5}
          </div>

          {/* COBERTURA */}

          <div className="col-2  barlow-bold itens-titulos">cobertura</div>
          <div className="col-2  regular">
            <input
              name="cobertura-rd"
              type="radio"
              onClick={e => this.mudarItem6(e)}
              value="4"
              id="forro-telhado"
            />{" "}
            forro + telhado
          </div>
          <div className="col-2  regular">
            <input
              name="cobertura-rd"
              type="radio"
              onClick={e => this.mudarItem6(e)}
              value="5"
              id="forro-laje"
            />{" "}
            forro + laje
          </div>
          <div className="col-2  regular">
            <input
              name="cobertura-rd"
              type="radio"
              onClick={e => this.mudarItem6(e)}
              value="6"
              id="laje"
            />{" "}
            laje
          </div>
          <div className="col-2  regular">
            <input
              name="cobertura-rd"
              type="radio"
              onClick={e => this.mudarItem6(e)}
              value="7"
              id="laje-telhado"
            />{" "}
            laje + telhado
          </div>
          <div className="col-2  regular menu-resumo">
            {" "}
            R$ {this.state.item6}
          </div>

          {/* ESTACIONAMENTO */}

          <div className="col-2  barlow-bold itens-titulos">estacionamento</div>
          <div className="col-2  regular">
            <input
              name="estacionamento-rd"
              type="radio"
              onClick={e => this.mudarItem7(e)}
              value="5"
              id="proprio"
            />{" "}
            próprio
          </div>
          <div className="col-2  regular">
            <input
              name="estacionamento-rd"
              type="radio"
              onClick={e => this.mudarItem7(e)}
              value="6"
              id="alugado"
            />{" "}
            alugado
          </div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular menu-resumo">
            R$ {this.state.item7}
          </div>

          {/* PASSEIO */}

          <div className="col-2  barlow-bold itens-titulos">passeio</div>
          <div className="col-2  regular">
            <input
              name="passeio-rd"
              type="radio"
              onClick={e => this.mudarItem8(e)}
              value="5"
              id="manter"
            />{" "}
            manter
          </div>
          <div className="col-2  regular">
            <input
              name="passeio-rd"
              type="radio"
              onClick={e => this.mudarItem8(e)}
              value="6"
              id="reformar"
            />{" "}
            reformar
          </div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular menu-resumo">
            {" "}
            R$ {this.state.item8}
          </div>

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
              id="1"
            />{" "}
            1
          </div>
          <div className="col-2  regular">
            <input
              name="pavimentos-rd"
              type="radio"
              onClick={e => this.mudarItem9(e)}
              value="6"
              id="2"
            />{" "}
            2
          </div>
          <div className="col-2  regular">
            <input
              name="pavimentos-rd"
              type="radio"
              onClick={e => this.mudarItem9(e)}
              value="7"
              id="3"
            />{" "}
            3
          </div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular menu-resumo">
            {" "}
            R$ {this.state.item9}
          </div>

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
              <Link
                onClick={e => this.salvarDadosLocal(e)}
                to="/infraestrutura"
              >
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
              <div className="resultado barlow-bold ">
                R$ {this.state.somaEdificacoes}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
