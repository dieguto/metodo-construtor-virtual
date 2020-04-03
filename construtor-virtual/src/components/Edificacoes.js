import React, { Component } from "react";
import "../css/menu.css";
import "../css/fontes.css";
import "../css/bootstrap.min.css";

import { Link, browserHistory } from "react-router";
import "../css/edificacoes.css";

import MetodoLogo from "../Assets/icons/logo_mtdtech.svg";
import Terraplanagem from "../Assets/terraplanagem.png";
import Estrutura from "../Assets/estruturas.png";
import Default from "../Assets/default.png";

// footer que ainda não foi componentizado

import IconeUmBranco from "../Assets/icons/icon_1_branco.svg";
import IconeDois from "../Assets/icons/icon_2.svg";
import IconeTres from "../Assets/icons/icon_3.svg";
import IconeVoltar from "../Assets/icons/icon_voltar.svg";
import IconeContinuar from "../Assets/icons/icon_avancar.svg";
import IconeRefresh from "../Assets/icons/icon_refresh.svg";

import "../css/rodape.css";

export default class Edificacoes extends Component {
  constructor() {
    super();
    this.state = {
      somaEdificacoes: 0,
      itens: [],
      itensInputs: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
  }

  componentDidMount() {
    this.pegarLista();
    this.gerarTotal();
  }

  mudarFoto(id, imagem) {
    var elemento = document.querySelector(id);
    var imagemTrans = document.querySelector(".imagem-transitoria");
    var imagemPadrao = Default;

    elemento.addEventListener("mouseover", function() {
      imagemTrans.style.backgroundImage = `url(${imagem})`;
    });

    elemento.addEventListener("mouseout", function() {
      imagemTrans.style.backgroundImage = `url(${imagemPadrao})`;
    });
  }

  pegarNames() {
    let lista = document.querySelectorAll([
      "input[type='radio']",
      "input[type='checkbox']"
    ]);

    let listaNames = [];
    let listaSet = [];

    lista = Array.from(lista);

    for (let i = 0; i < lista.length - 1; i++) {
      listaNames.push(lista[i].name);
    }

    //listaSet recebe um array listaNames filtrado
    listaSet = [...new Set(listaNames)];
    console.log("listaSet", listaSet);

    return listaSet;
  }

  pegarLista() {
    let listaSet = this.pegarNames();
    // coloca o array de names (listaSet) dentro do itens
    this.setState({ itens: listaSet });
    this.checkItens(listaSet);
  }

  resetAll() {
    let lista = this.pegarNames();
    let radios = Array.from(
      document.querySelectorAll([
        "input[type='radio']",
        "input[type='checkbox']"
      ])
    );

    this.setState({ somaEdificacoes: 0 });
    this.setState({ itensInputs: [0, 0, 0, 0, 0, 0, 0, 0, 0] });

    radios.map(radio => {
      radio.checked = false;
    });
    lista.map(name => {
      sessionStorage.removeItem(name);
    });
  }

  checkItens(names) {
    let checkedIds = [];
    let sum = 0;
    let auxItem;
    names.map(name => {
      auxItem = JSON.parse(sessionStorage.getItem(name));

      if (auxItem !== null) {
        checkedIds.push(auxItem.map(valor => valor.id)); // TODO FAZER PUSH DE STRINGS E NÃO VETORES
      }
    });

    console.log("checkedIds", checkedIds);
    checkedIds.map((item, i) => {
      if (i !== 0) checkedIds = checkedIds.concat(item);
      else checkedIds = [...item];
    });

    checkedIds.map(item => {
      if (item !== "" && item !== null) {
        document.getElementById(item).checked = true;
        sum += parseInt(document.getElementById(item).value);
      }
    });

    this.setState({ somaEdificacoes: sum });
    setTimeout(() => {
      sessionStorage.setItem("edificacoes", this.state.somaEdificacoes);
      console.log(sum);
      this.fillItens();
    }, 1000);
  }

  fillItens() {
    let itens = this.state.itens;
    let values = [];
    let itensValues = this.state.itensInputs;
    itens.map(item => {
      item = sessionStorage.getItem(item);
      if (item !== null) {
        item = JSON.parse(item.replace(/[\[\]]/g, ""));
        console.log("item", item);
        values.push(parseInt(item.value));
      }
    });

    values.map((value, i) => (itensValues[i] = value));

    console.log("itensValues", itensValues);
    this.setState({ itensInputs: itensValues });
    // this.setState({ somaEdificacoes: sessionStorage.getItem("edificacoes") });
  }

  salvarDadosLocal(e) {
    e.preventDefault();
    let total = parseInt(sessionStorage.getItem("total")) || 0; //  0 50
    let newSomaEd = this.state.somaEdificacoes; //  50  48
    let somaEd = parseInt(sessionStorage.getItem("edificacoes")) || 0; //  0  50

    sessionStorage.setItem("edificacoes", this.state.somaEdificacoes); // 50  48

    if (total === 0) {
      // true  false
      total = newSomaEd; // 50
    } else {
      total -= somaEd; //  50-50=0
      total += newSomaEd; //  0+48=48
    }
    setTimeout(() => {
      this.gerarTotal();
    }, 800);
    browserHistory.push("/infraestrutura"); //
  }

  gerarTotal() {
    let soma = parseInt(sessionStorage.getItem("edificacoes")) || 0; // 50  48
    soma += parseInt(sessionStorage.getItem("infraestrutura")) || 0; // 0 0
    soma += parseInt(sessionStorage.getItem("padraoacabamento")) || 0; // 0 0
    sessionStorage.setItem("total", soma); // 50  48
  }

  mudarItem(e, id) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaEdificacoes;
    let stateItens = this.state.itensInputs;
    let itemArray = [];
    let valorItem = 0;

    itemArray = JSON.parse(sessionStorage.getItem(e.target.name));

    resultado -= this.somarItem(itemArray);

    if (e.target.checked === true) {
      if (
        sessionStorage.getItem(e.target.name) === null ||
        e.target.type === "radio"
      ) {
        console.log("STATE ITENS", e.target.id, id - 1, stateItens);
        this.deleteItem(stateItens[id - 1], e.target.id);
        itemArray = [{ id: e.target.id, value }];
      } else {
        itemArray = JSON.parse(sessionStorage.getItem(e.target.name));
        itemArray.push({ id: e.target.id, value });
      }
    } else {
      console.log("18222222222222222222");
      itemArray = JSON.parse(sessionStorage.getItem(e.target.name));
      this.deleteItem(itemArray, e.target.id);
    }
    sessionStorage.setItem(e.target.name, JSON.stringify(itemArray));

    itemArray = JSON.parse(sessionStorage.getItem(e.target.name));

    valorItem = this.somarItem(itemArray);
    resultado += valorItem;

    console.log("valorItem", valorItem);
    console.log("resultado", resultado);

    stateItens[id - 1] = valorItem;
    this.setState({ itensInputs: stateItens });
    this.setState({ somaEdificacoes: resultado });
  }

  deleteItem(itemArray, id) {
    let index = 0;

    if (itemArray !== null) {
      if (itemArray.length >= 1) {
        index = itemArray.findIndex(item => {
          return item.id === id;
        });
        itemArray.splice(index, 1);
      }
    }
  }

  somarItem(itemArray) {
    let aux = 0;

    if (itemArray !== null) {
      itemArray.map(item => console.log("%", item));
      if (itemArray.length >= 1) {
        aux = itemArray.reduce((totalItem, valor) => {
          totalItem += parseInt(valor.value);
          return totalItem;
        }, 0);
      }
    }

    return aux;
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
          <div className="col-5  mt-4">
            <h2 className="barlow-extrabold preto-metodo">
              fase 1
              <span className="barlow-thin cor-padrao-metodo">
                /edificações
              </span>
            </h2>
          </div>

          <div className="col-2 ">
            <h2 className="barlow-extrabold branco-metodo construir-titulo-padrao">
              construir
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

          <div
            onMouseOver={e => this.mudarFoto("#terraplanagem", Terraplanagem)}
            id="terraplanagem"
            className="col-2  barlow-bold itens-titulos"
          >
            terraplanagem
          </div>
          <div className="col-8">
            <div className="col-padrao-celulas  regular">
              <input
                type="radio"
                name="terraplanagem-rd"
                onClick={e => this.mudarItem(e, 1)}
                value="5"
                id="limpeza-terreno"
              />
              <span className="barlow-regular"> limpeza de terreno</span>
            </div>
            <div className="col-padrao-edificacoes regular">
              <input
                type="radio"
                name="terraplanagem-rd"
                onClick={e => this.mudarItem(e, 1)}
                value="6"
                id="movimentacao"
              />
              <span className="barlow-regular"> movimentação Parcial(50%)</span>
            </div>
            <div className="col-padrao-edificacoes  regular">
              <input
                type="radio"
                name="terraplanagem-rd"
                onClick={e => this.mudarItem(e, 1)}
                value="7"
                id="corte-e-aterro"
              />
              <span className="barlow-regular"> corte e aterro</span>
            </div>
            <div className="col-padrao-edificacoes  regular"></div>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular">
              R$ {this.state.itensInputs[0]}
            </span>
          </div>

          {/* DEMOLIÇÕES DE TERRENO */}

          <div className="col-2  barlow-bold itens-titulos">
            demolições no terreno
          </div>
          <div className="col-8">
            <div className="col-padrao-celulas  regular">
              <input
                name="demolicao-rd"
                type="radio"
                onClick={e => this.mudarItem(e, 2)}
                value="5"
                id="sim"
              />
              <span className="barlow-regular"> sim</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="demolicao-rd"
                type="radio"
                onClick={e => this.mudarItem(e, 2)}
                value="0"
              />
              <span className="barlow-regular"> não</span>
            </div>
            <div className="col-padrao-celulas regular"></div>
            <div className="col-padrao-celulas  regular"></div>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular">
              R$ {this.state.itensInputs[1]}
            </span>
          </div>

          {/* FUNDAÇÃO */}

          <div className="col-2  barlow-bold itens-titulos"> fundação</div>
          <div className="col-8">
            <div className="col-padrao-celulas  regular">
              <input
                name="fundacao-rd"
                type="radio"
                onClick={e => this.mudarItem(e, 3)}
                value="5"
                id="radier"
              />
              <span className="barlow-regular"> radier</span>
            </div>
            <div className="col-padrao-celulas regular">
              <input
                name="fundacao-rd"
                type="radio"
                onClick={e => this.mudarItem(e, 3)}
                value="6"
                id="sapata"
              />
              <span className="barlow-regular"> sapata</span>
            </div>
            <div className="col-padrao-celulas regular">
              <input
                name="fundacao-rd"
                type="radio"
                onClick={e => this.mudarItem(e, 3)}
                value="7"
                id="estaca"
              />
              <span className="barlow-regular"> estaca</span>{" "}
            </div>
            <div className="col-2  regular"></div>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular">
              R$ {this.state.itensInputs[2]}
            </span>
          </div>

          {/* ESTRUTURAS */}

          <div
            onMouseOver={e => this.mudarFoto("#estrutura", Estrutura)}
            id="estrutura"
            className="col-2  barlow-bold itens-titulos"
          >
            {" "}
            estruturas
          </div>
          <div className="col-8">
            <div className="col-padrao-celulas  regular">
              <input
                name="estruturas-rd"
                type="radio"
                onClick={e => this.mudarItem(e, 4)}
                value="5"
                id="concreto-estrutura"
              />{" "}
              <span className="barlow-regular"> concreto</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="estruturas-rd"
                type="radio"
                onClick={e => this.mudarItem(e, 4)}
                value="6"
                id="premoldado"
              />{" "}
              <span className="barlow-regular"> prémoldado</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="estruturas-rd"
                type="radio"
                onClick={e => this.mudarItem(e, 4)}
                value="7"
                id="metalica-estruturas"
              />{" "}
              <span className="barlow-regular"> metálica</span>
            </div>
            <div className="col-padrao-celulas  regular"></div>
          </div>

          <div className="col-2  regular menu-resumo">
            <span className="barlow-regular">
              {" "}
              R$ {this.state.itensInputs[3]}
            </span>
          </div>

          {/* ESCADAS */}

          <div className="col-2  barlow-bold itens-titulos"> escadas</div>
          <div className="col-8">
            <div className="col-padrao-celulas  regular">
              <input
                name="escadas-rd"
                type="radio"
                onClick={e => this.mudarItem(e, 5)}
                value="6"
                id="concreto-escada"
              />{" "}
              <span className="barlow-regular"> concreto</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="escadas-rd"
                type="radio"
                onClick={e => this.mudarItem(e, 5)}
                value="7"
                id="metalica-escadas"
              />{" "}
              <span className="barlow-regular"> metálica</span>
            </div>
            <div className="col-padrao-celulas  regular"></div>
            <div className="col-padrao-celulas  regular"></div>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular">
              R$ {this.state.itensInputs[4]}
            </span>
          </div>

          {/* COBERTURA */}

          <div className="col-2  barlow-bold itens-titulos"> cobertura</div>
          <div className="col-8">
            <div className="col-padrao-celulas  regular">
              <input
                name="cobertura-rd"
                type="radio"
                onClick={e => this.mudarItem(e, 6)}
                value="4"
                id="forro-telhado"
              />{" "}
              <span className="barlow-regular"> forro + telhado</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="cobertura-rd"
                type="radio"
                onClick={e => this.mudarItem(e, 6)}
                value="5"
                id="forro-laje"
              />{" "}
              <span className="barlow-regular"> forro + laje</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="cobertura-rd"
                type="radio"
                onClick={e => this.mudarItem(e, 6)}
                value="6"
                id="laje"
              />{" "}
              <span className="barlow-regular"> laje</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="cobertura-rd"
                type="radio"
                onClick={e => this.mudarItem(e, 6)}
                value="7"
                id="laje-telhado"
              />{" "}
              <span className="barlow-regular"> laje + telhado</span>
            </div>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular">
              R$ {this.state.itensInputs[5]}
            </span>
          </div>

          {/* ESTACIONAMENTO */}

          <div className="col-2  barlow-bold itens-titulos">
            {" "}
            estacionamento
          </div>
          <div className="col-8">
            <div className="col-padrao-celulas  regular">
              <input
                name="estacionamento-rd"
                type="radio"
                onClick={e => this.mudarItem(e, 7)}
                value="5"
                id="proprio"
              />{" "}
              <span className="barlow-regular"> próprio</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="estacionamento-rd"
                type="radio"
                onClick={e => this.mudarItem(e, 7)}
                value="6"
                id="alugado"
              />{" "}
              <span className="barlow-regular"> alugado</span>
            </div>
            <div className="col-padrao-celulas  regular"></div>
            <div className="col-padrao-celulas  regular"></div>
          </div>

          <div className="col-2  regular menu-resumo">
            <span className="barlow-regular">
              R$ {this.state.itensInputs[6]}
            </span>
          </div>

          {/* PASSEIO */}

          <div className="col-2  barlow-bold itens-titulos">passeio</div>
          <div className="col-8">
            <div className="col-padrao-celulas  regular">
              <input
                name="passeio-rd"
                type="radio"
                onClick={e => this.mudarItem(e, 8)}
                value="5"
                id="manter"
              />{" "}
              <span className="barlow-regular"> manter</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="passeio-rd"
                type="radio"
                onClick={e => this.mudarItem(e, 8)}
                value="6"
                id="reformar"
              />{" "}
              <span className="barlow-regular"> reformar</span>
            </div>
            <div className="col-padrao-celulas  regular"></div>
            <div className="col-padrao-celulas  regular"></div>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular">
              R$ {this.state.itensInputs[7]}
            </span>
          </div>

          {/* Numero de pavimentos */}

          <div className="col-2  barlow-bold itens-titulos">
            N° de pavimentos
          </div>
          <div className="col-8">
            <div className="col-padrao-celulas  regular">
              <input
                name="pavimentos-rd"
                type="radio"
                onClick={e => this.mudarItem(e, 9)}
                value="5"
                id="1"
              />{" "}
              <span className="barlow-regular"> 1</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="pavimentos-rd"
                type="radio"
                onClick={e => this.mudarItem(e, 9)}
                value="6"
                id="2"
              />{" "}
              <span className="barlow-regular"> 2</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="pavimentos-rd"
                type="radio"
                onClick={e => this.mudarItem(e, 9)}
                value="7"
                id="3"
              />{" "}
              <span className="barlow-regular"> 3</span>
            </div>
            <div className="col-padrao-celulas  regular"></div>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular">
              R$ {this.state.itensInputs[8]}
            </span>
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
                <span className="texto-rodape barlow-padrao branco-metodo">
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
                <span className="texto-rodape barlow-padrao black">
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
                <span className="texto-rodape barlow-padrao black">
                  padrão de acabamento
                </span>
              </div>
            </div>

            <div
              onClick={e => this.resetAll()}
              className="box-rodape-icone2 barlow-regular"
            >
              <div>
                <img
                  className="tamanho-icone"
                  src={IconeRefresh}
                  alt="Icone reiniciar página"
                />
              </div>
              <span className="pr-1">reiniciar</span>
            </div>
            <div className="box-rodape-icone2 barlow-regular">
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

            <div className="box-rodape-icone3 barlow-regular">
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
