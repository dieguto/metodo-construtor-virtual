import React, { Component } from "react";
import { Link, browserHistory } from "react-router";

import "../css/rodape.css";
import "../css/edificacoes.css";

import IconeUm from "../Assets/icons/icon_1.svg";
import IconeBranco from "../Assets/icons/icon_2_branco.svg";
import IconeTres from "../Assets/icons/icon_3.svg";
import IconeVoltar from "../Assets/icons/icon_voltar.svg";
import IconeContinuar from "../Assets/icons/icon_avancar.svg";
import IconeRefresh from "../Assets/icons/icon_refresh.svg";

import MetodoLogo from "../Assets/icons/logo_mtdtech.svg";

export default class InfraEstrutura extends Component {
  constructor() {
    super();
    this.state = {
      somaInfra: 0,
      itens: [],
      itensInputs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
  }

  componentDidMount() {
    this.pegarLista();
    this.gerarTotal();
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

    this.setState({ somaInfra: 0 });
    this.setState({ itensInputs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] });

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

    this.setState({ somaInfra: sum });
    setTimeout(() => {
      sessionStorage.setItem("infraestrutura", this.state.somaInfra);
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
    let total = parseInt(sessionStorage.getItem("total")) || 0; //  0 50  99
    let newSomaInf = this.state.somaInfra; //  50  48  54
    let somaInf = parseInt(sessionStorage.getItem("infraestrutura")) || 0; //  0  50  48

    sessionStorage.setItem("infraestrutura", this.state.somaInfra); //  50 48  54

    if (total === 0) {
      // true  false   false
      total = newSomaInf; //  50
    } else {
      total -= somaInf; //  50-50=0  99-48=51
      total += newSomaInf; //  0+48=48   51+54=105
    }
    setTimeout(() => {
      this.gerarTotal();
    }, 800);
    // this.setState({ total: total });
    browserHistory.push("/padraoacabamento");
  }

  gerarTotal() {
    let soma = parseInt(sessionStorage.getItem("edificacoes")) || 0; // 50  48
    soma += parseInt(sessionStorage.getItem("infraestrutura")) || 0; // 0 0
    soma += parseInt(sessionStorage.getItem("padraoacabamento")) || 0; // 0 0
    sessionStorage.setItem("total", soma); // 50  48
  }

  salvarDadosLocalVoltar(e) {
    e.preventDefault();
    sessionStorage.setItem("infraestrutura", this.state.somaInfra);
    browserHistory.push("/construcao");
  }

  mudarItem(e, id) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaInfra;
    let stateItens = this.state.itensInputs;
    let itemArray = [];
    let valorItem = 0;
    let index = 0;

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
    this.setState({ somaInfra: resultado });
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
            />
          </div>
          <div className="col-5  mt-4">
            <h2 className="barlow-extrabold preto-metodo">
              fase 2{" "}
              <span className="barlow-thin cor-padrao-metodo">
                /infra estrutura
              </span>{" "}
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

          {/* iniciando a table */}

          {/* CLIMATIZAÇÃO */}

          <div className="col-2  barlow-bold itens-titulos">climatização</div>
          <div className="col-8 ">
            <div className="col-padrao-celulas  regular">
              <input
                onClick={e => this.mudarItem(e, 1)}
                value="4000"
                type="radio"
                name="climatizacao-rd"
                id="central-clima"
              />
              <span className="barlow-regular"> central</span>
            </div>
            <div className="col-padrao-celulas regular">
              <input
                onClick={e => this.mudarItem(e, 1)}
                value="5000"
                type="radio"
                name="climatizacao-rd"
                id="split-clima"
              />
              <span className="barlow-regular"> split</span>
            </div>
            <div className="col-padrao-celulas regular">
              <input
                onClick={e => this.mudarItem(e, 1)}
                value="6000"
                type="radio"
                name="climatizacao-rd"
                id="misto-clima"
              />
              <span className="barlow-regular"> misto</span>
            </div>
            <div className="col-padrao-celulas  regular"></div>
            <div className="col-padrao-celulas  regular"></div>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular">
              {" "}
              R$ {this.state.itensInputs[0]}
            </span>
          </div>

          {/* ELÉTRICA COMUM */}

          <div className="col-2  barlow-bold itens-titulos">elétrica comum</div>
          <div className="col-8 ">
            <div className="col-padrao-celulas  regular">
              <input
                name="eletrica-rd"
                onClick={e => this.mudarItem(e, 2)}
                value="4000"
                type="radio"
                id="4000-A-eletrica"
              />
              <span className="barlow-regular"> 4000 A</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="eletrica-rd"
                onClick={e => this.mudarItem(e, 2)}
                value="5000"
                type="radio"
                id="4000-B-eletrica"
              />
              <span className="barlow-regular"> 4000 B</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="eletrica-rd"
                onClick={e => this.mudarItem(e, 2)}
                value="6000"
                type="radio"
                id="4000-C-eletrica"
              />{" "}
              <span className="barlow-regular"> 4000 C</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="eletrica-rd"
                onClick={e => this.mudarItem(e, 2)}
                value="7000"
                type="radio"
                id="4000-FLEX-eletrica"
              />
              <span className="barlow-regular"> 4000 FLEX</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="eletrica-rd"
                onClick={e => this.mudarItem(e, 2)}
                value="8000"
                type="radio"
                id="5000-eletrica"
              />
              <span className="barlow-regular"> 5000 </span>
            </div>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular">
              R$ {this.state.itensInputs[1]}
            </span>
          </div>

          {/* REDE LÓGICA */}

          <div className="col-2  barlow-bold itens-titulos">rede lógica</div>
          <div className="col-8 ">
            <div className="col-padrao-celulas  regular">
              <input
                name="rede-rd"
                onClick={e => this.mudarItem(e, 3)}
                value="4000"
                type="radio"
                id="cabeamento-rede"
              />
              <span className="barlow-regular"> cabeamento</span>
            </div>
            <div className="col-padrao-celulas regular">
              <input
                name="rede-rd"
                onClick={e => this.mudarItem(e, 3)}
                value="5000"
                type="radio"
                id="wi-fi-rede"
              />
              <span className="barlow-regular"> wi-fi</span>
            </div>
            <div className=""></div>
            <div className="  regular"></div>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular"></span>R${" "}
            {this.state.itensInputs[2]}
          </div>

          {/* DISTRIBUIÇÃO ELÉTRICA */}

          <div className="col-2  barlow-bold itens-titulos">
            distribuição elétrica
          </div>
          <div className="col-8 ">
            <div className="col-padrao-celulas  regular">
              <input
                name="distribuica-rd"
                onClick={e => this.mudarItem(e, 4)}
                value="4000"
                type="radio"
                id="4000-A-distribuicao"
              />{" "}
              <span className="barlow-regular"> 4000 A</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="distribuica-rd"
                onClick={e => this.mudarItem(e, 4)}
                value="5000"
                type="radio"
                id="4000-B-distribuicao"
              />{" "}
              <span className="barlow-regular"> 4000 B</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="distribuica-rd"
                onClick={e => this.mudarItem(e, 4)}
                value="6000"
                type="radio"
                id="4000-C-distribuicao"
              />{" "}
              <span className="barlow-regular"> 4000 C</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="distribuica-rd"
                onClick={e => this.mudarItem(e, 4)}
                value="7000"
                type="radio"
                id="4000-FLEX-distribuicao"
              />{" "}
              <span className="barlow-regular"> 4000 FLEX</span>
            </div>
            <div className="col-padrao-celulas regular">
              <input
                name="distribuica-rd"
                onClick={e => this.mudarItem(e, 4)}
                value="8000"
                type="radio"
                id="5000-distribuicao"
              />{" "}
              <span className="barlow-regular"> 5000</span>
            </div>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular">
              {" "}
              R$ {this.state.itensInputs[3]}
            </span>
          </div>

          {/* TELEFONIA */}

          <div className="col-2  barlow-bold itens-titulos">telefonia</div>
          <div className="col-8 ">
            <div className="col-padrao-celulas regular">
              <input
                name="telefonia-rd"
                onClick={e => this.mudarItem(e, 5)}
                value="4000"
                type="radio"
                id="4000-A-telefonia"
              />{" "}
              <span className="barlow-regular"> 4000 A</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="telefonia-rd"
                onClick={e => this.mudarItem(e, 5)}
                value="5000"
                type="radio"
                id="4000-B-telefonia"
              />{" "}
              <span className="barlow-regular"> 4000 B</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="telefonia-rd"
                onClick={e => this.mudarItem(e, 5)}
                value="6000"
                type="radio"
                id="4000-C-telefonia"
              />{" "}
              <span className="barlow-regular"> 4000 C</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="telefonia-rd"
                onClick={e => this.mudarItem(e, 5)}
                value="7000"
                type="radio"
                id="4000-FLEX-telefonia"
              />{" "}
              <span className="barlow-regular"> 4000 FLEX</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="telefonia-rd"
                onClick={e => this.mudarItem(e, 5)}
                value="8000"
                type="radio"
                id="5000-telefonia"
              />{" "}
              <span className="barlow-regular"> 5000</span>
            </div>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular">
              {" "}
              R$ {this.state.itensInputs[4]}
            </span>
          </div>

          {/* ILUMINAÇÃO */}

          <div className="col-2  barlow-bold itens-titulos">iluminação</div>
          <div className="col-8 ">
            <div className="col-padrao-celulas  regular">
              <input
                name="iluminacao-rd"
                onClick={e => this.mudarItem(e, 6)}
                value="4000"
                type="radio"
                id="4000-A-iluminacao"
              />{" "}
              <span className="barlow-regular"> 4000 A</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="iluminacao-rd"
                onClick={e => this.mudarItem(e, 6)}
                value="5000"
                type="radio"
                id="4000-B-iluminacao"
              />{" "}
              <span className="barlow-regular"> 4000 B</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="iluminacao-rd"
                onClick={e => this.mudarItem(e, 6)}
                value="6000"
                type="radio"
                id="4000-B-iluminacao"
              />{" "}
              <span className="barlow-regular"> 4000 C</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="iluminacao-rd"
                onClick={e => this.mudarItem(e, 6)}
                value="7000"
                type="radio"
                id="4000-FLEX-iluminacao"
              />{" "}
              <span className="barlow-regular"> 4000 FLEX</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="iluminacao-rd"
                onClick={e => this.mudarItem(e, 6)}
                value="8000"
                type="radio"
                id="5000-iluminacao"
              />{" "}
              <span className="barlow-regular"> 5000</span>
            </div>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular">
              {" "}
              R$ {this.state.itensInputs[5]}
            </span>
          </div>

          {/* ENTRADA DE ENERGIA */}

          <div className="col-2  barlow-bold itens-titulos">
            entrada de energia
          </div>
          <div className="col-8">
            <div className="col-padrao-celulas  regular">
              <input
                name="entrada-rd"
                onClick={e => this.mudarItem(e, 7)}
                value="4000"
                type="radio"
                id="acrescimo-entrada"
              />{" "}
              <span className="barlow-regular"> acréscimo de carga</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="entrada-rd"
                onClick={e => this.mudarItem(e, 7)}
                value="5000"
                type="radio"
                id="substituicao-entrada"
              />{" "}
              <span className="barlow-regular"> substituição de quadros</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="entrada-rd"
                onClick={e => this.mudarItem(e, 7)}
                value="6000"
                type="radio"
                id="unificacao-entrada"
              />{" "}
              <span className="barlow-regular"> unificação</span>
            </div>
            <div className="col-padrao-celulas  regular">
              {" "}
              <input
                name="entrada-rd"
                onClick={e => this.mudarItem(e, 7)}
                value="7000"
                type="radio"
                id="desmembrar-entrada"
              />{" "}
              <span className="barlow-regular"> desmembrar entrada</span>
            </div>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular">
              {" "}
              R$ {this.state.itensInputs[6]}
            </span>
          </div>

          {/* BOMBEIROS */}

          <div className="col-2  barlow-bold itens-titulos">bombeiros</div>
          <div className="col-8">
            <div className="col-padrao-celulas regular">
              <input
                name="bombeiros-rd"
                onClick={e => this.mudarItem(e, 8)}
                value="4000"
                type="checkbox"
                id="hidrante-bombeiros"
              />{" "}
              <span className="barlow-regular"> hidrante</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="bombeiros-rd"
                onClick={e => this.mudarItem(e, 8)}
                value="5000"
                type="checkbox"
                id="hidrante-bombeiros"
              />{" "}
              <span className="barlow-regular"> sprinkler</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="bombeiros-rd"
                onClick={e => this.mudarItem(e, 8)}
                value="6000"
                type="checkbox"
                id="extintores-bombeiros"
              />{" "}
              <span className="barlow-regular"> extintores</span>
            </div>
            <div className="col-padrao-celulas  regular"></div>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular">
              R$ {this.state.itensInputs[7]}
            </span>
          </div>

          {/* Rede Hidráulica */}

          <div className="col-2  barlow-bold itens-titulos">
            rede hidráulica
          </div>
          <div className="col-8">
            <div className="col-padrao-celulas regular">
              <input
                name="hidraulica-rd"
                onClick={e => this.mudarItem(e, 9)}
                value="4000"
                type="radio"
                id="unificacao-hidraulica"
              />{" "}
              <span className="barlow-regular"> unificação</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="hidraulica-rd"
                onClick={e => this.mudarItem(e, 9)}
                value="5000"
                type="radio"
                id="desmebrar-hidraulica"
              />{" "}
              <span className="barlow-regular"> desmebrar entrada</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="hidraulica-rd"
                onClick={e => this.mudarItem(e, 9)}
                value="6000"
                type="radio"
                id="alimentacao-hidraulica"
              />{" "}
              <span className="barlow-regular"> nova alimentação</span>
            </div>
            <div className="col-padrao-celulas  regular"></div>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular">
              R$ {this.state.itensInputs[8]}
            </span>
          </div>

          {/* ACESSIBILIDADE */}

          <div className="col-2  barlow-bold itens-titulos">acessibilidade</div>
          <div className="col-8">
            <div className="col-padrao-celulas  regular">
              <input
                name="acessibilidade-rd"
                onClick={e => this.mudarItem(e, 10)}
                value="4000"
                type="checkbox"
                id="elevador-acessibilidade"
              />{" "}
              <span className="barlow-regular"> elevador</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="acessibilidade-rd"
                onClick={e => this.mudarItem(e, 10)}
                value="5000"
                type="checkbox"
                id="plataforma-acessibilidade"
              />{" "}
              <span className="barlow-regular"> plataforma</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="acessibilidade-rd"
                onClick={e => this.mudarItem(e, 10)}
                value="6000"
                type="checkbox"
                id="rampa-acessibilidade"
              />{" "}
              <span className="barlow-regular"> rampa</span>
            </div>
            <div className="col-padrao-celulas  regular"></div>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular">
              R$ {this.state.itensInputs[9]}
            </span>
          </div>

          <div className="col-10 espacamento "></div>
          <div className="col-2 espacamento  menu-resumo"></div>

          {/* PROGRESSBAR */}

          <div className="div-progressbar">
            <div className="col-10 ">
              <div className="progress">
                <div
                  className="progress-bar progressbar2"
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
                  src={IconeUm}
                  alt="Icone numero um"
                />
              </div>
              <div className="fonte-footer-pag ">
                <span className="texto-rodape barlow-padrao black">
                  edificações
                </span>
              </div>
            </div>

            <div className=" box-rodape-icone">
              <div className="">
                <img
                  className=" float-left tamanho-icone"
                  src={IconeBranco}
                  alt="Icone numero dois"
                />
              </div>
              <div className="fonte-footer-pag ">
                <span className="texto-rodape barlow-padrao branco-metodo">
                  infraestrutura
                </span>
              </div>
            </div>

            {/* <div className="col-1  box-rodape-palavras"></div> */}
            <div className=" box-rodape-icone">
              <div className="">
                <img
                  className=" float-left tamanho-icone"
                  src={IconeTres}
                  alt="Icone numero três"
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
              <Link onClick={e => this.salvarDadosLocalVoltar(e)}>
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
                to="/padraoacabamento"
              >
                <div>
                  <img
                    className="tamanho-icone"
                    src={IconeContinuar}
                    alt="Icone prosseguir"
                  />
                </div>
              </Link>
              prosseguir
            </div>

            <div className="box-rodape-palavras">
              <div className="metro-quadrado barlow-bold ">total m²</div>
              <div className="resultado barlow-bold ">
                R$ {this.state.somaInfra}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
