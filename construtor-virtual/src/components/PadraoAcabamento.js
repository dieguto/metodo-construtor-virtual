import React, { Component, useState } from "react";
import { Link, browserHistory } from "react-router";

// import { Container } from './styles';
import "../css/rodape.css";
import "../css/edificacoes.css";

import Collapse from "react-bootstrap/Collapse";

import IconeUm from "../Assets/icons/icon_1.svg";
import IconeDois from "../Assets/icons/icon_2.svg";
import IconeTresBranco from "../Assets/icons/icon_3_branco.svg";
import IconeVoltar from "../Assets/icons/icon_voltar.svg";
import IconeContinuar from "../Assets/icons/icon_avancar.svg";
import IconeRefresh from "../Assets/icons/icon_refresh.svg";
import IconeSeta from "../Assets/icons/down-arrow.png";
import "bootstrap/dist/js/bootstrap.bundle.min";

import MetodoLogo from "../Assets/icons/logo_mtdtech.svg";

export default class PadraoAcabamento extends Component {
  constructor() {
    super();
    this.state = {
      somaAcabamento: 0,
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

    this.setState({ somaAcabamento: 0 });
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

    this.setState({ somaAcabamento: sum });
    setTimeout(() => {
      sessionStorage.setItem("padraoacabamento", this.state.somaAcabamento);
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
    let newSomaPad = this.state.somaAcabamento; //  50  48  54
    let somaPad = parseInt(sessionStorage.getItem("padraoacabamento")) || 0; //  0  50  48

    sessionStorage.setItem("padraoacabamento", this.state.somaAcabamento); //  50 48  54

    if (total === 0) {
      // true  false   false
      total = newSomaPad; //  50
    } else {
      total -= somaPad; //  50-50=0  99-48=51
      total += newSomaPad; //  0+48=48   51+54=105
    }
    setTimeout(() => {
      this.gerarTotal();
      browserHistory.push("/resultado");
    }, 800);
    // this.setState({ total: total });
    // browserHistory.push("/resultado");
  }

  gerarTotal() {
    let soma = parseInt(sessionStorage.getItem("edificacoes")) || 0; // 50  48
    soma += parseInt(sessionStorage.getItem("infraestrutura")) || 0; // 0 0
    soma += parseInt(sessionStorage.getItem("padraoacabamento")) || 0; // 0 0
    sessionStorage.setItem("total", soma); // 50  48
  }

  salvarDadosLocalVoltar(e) {
    e.preventDefault();
    sessionStorage.setItem("padraoacabamento", this.state.somaAcabamento);
    browserHistory.push("/infraestrutura");
  }

  mudarItem(e, id) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaAcabamento;
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
    this.setState({ somaAcabamento: resultado });
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
              fase 3{" "}
              <span className="barlow-thin cor-padrao-metodo">
                /padrão acabamento
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

          {/* Inicio da tabela */}

          {/* revestimento piso */}

          <div className="col-2  barlow-bold itens-titulos">
            revestimento piso
          </div>
          <div className="col-8">
            <div className="col-padrao-celulas-com-menu  regular">
              <input
                type="radio"
                value="4"
                // onClick={e => this.mudarItem(e, 1)}
                name="revestimento-piso-rd"
                id="4000-A-piso"
                data-toggle="collapse"
                data-target="#collapse"
                aria-expanded="false"
                aria-controls="collapse"
              />
              <span className="barlow-regular"> 4000 A </span>
              {/* teste */}

              <div
                id="collapse"
                className="celula-collapse  barlow-regular collapse"
              >
                <div className="linha-dropdown d-flex">
                  <div className="regular menu-dropdown-op ">
                    <input
                      name="revestimento-piso-rd"
                      type="checkbox"
                      value="4"
                      id="4000-A-parede"
                      onClick={e => this.mudarItem(e, 1)}
                    />
                    <span className="barlow-regular branco-metodo ">
                      {" "}
                      auto atendimento
                    </span>
                  </div>
                  <div className="regular menu-dropdown-op ">
                    <input
                      name="revestimento-piso-rd"
                      type="checkbox"
                      value="5"
                      id="4000-B-parede"
                      onClick={e => this.mudarItem(e, 1)}
                    />
                    <span className="barlow-regular branco-metodo ">
                      {" "}
                      área de público classic
                    </span>
                  </div>
                  <div className="menu-dropdown-op  regular ">
                    <input
                      name="revestimento-piso-rd"
                      type="checkbox"
                      value="6"
                      id="4000-C-parede"
                      onClick={e => this.mudarItem(e, 1)}
                    />
                    <span className="barlow-regular branco-metodo ">
                      {" "}
                      espaço exclusive
                    </span>
                  </div>
                  <div className="menu-dropdown-op regular ">
                    <input
                      name="revestimento-piso-rd"
                      type="checkbox"
                      value="7"
                      id="4000-FLEX-parede"
                      onClick={e => this.mudarItem(e, 1)}
                    />
                    <span className="barlow-regular branco-metodo ">
                      {" "}
                      espaço prime
                    </span>
                  </div>
                  <div className="menu-dropdown-op regular ">
                    <input
                      name="revestimento-piso-rd"
                      type="checkbox"
                      value="8"
                      id="4000-FLEX-parede"
                      onClick={e => this.mudarItem(e, 1)}
                    />
                    <span className="barlow-regular branco-metodo ">
                      {" "}
                      retaguarda
                    </span>
                  </div>
                  <div className="menu-dropdown-op regular ">
                    <input
                      name="revestimento-piso-rd"
                      type="checkbox"
                      value="9"
                      id="4000-FLEX-parede"
                      onClick={e => this.mudarItem(e, 1)}
                    />
                    <span className="barlow-regular branco-metodo ">
                      {" "}
                      intervenções externas
                    </span>
                  </div>
                </div>
              </div>

              {/* teste */}
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                type="radio"
                value="5"
                onClick={e => this.mudarItem(e, 1)}
                name="revestimento-piso-rd"
                id="4000-B-piso"
              />
              <span className="barlow-regular"> 4000 B</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                type="radio"
                value="6"
                onClick={e => this.mudarItem(e, 1)}
                name="revestimento-piso-rd"
                id="4000-C-piso"
              />
              <span className="barlow-regular"> 4000 C</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                type="radio"
                value="7"
                onClick={e => this.mudarItem(e, 1)}
                name="revestimento-piso-rd"
                id="4000-FLEX-piso"
              />{" "}
              <span className="barlow-regular"> 4000 FLEX</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                type="radio"
                value="8"
                onClick={e => this.mudarItem(e, 1)}
                name="revestimento-piso-rd"
                id="5000-piso"
              />{" "}
              <span className="barlow-regular"> 5000</span>
            </div>
          </div>
          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular">
              R$ {this.state.itensInputs[0]}
            </span>
          </div>

          {/* revestimento-parede */}

          <div className="col-2  barlow-bold itens-titulos">
            revestimento parede
          </div>
          <div className="col-8">
            <div className="col-padrao-celulas  regular">
              <input
                name="revestimento-parede-rd"
                type="radio"
                value="4"
                onClick={e => this.mudarItem(e, 2)}
                id="4000-A-parede"
              />
              <span className="barlow-regular"> 4000 A</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="revestimento-parede-rd"
                type="radio"
                value="5"
                onClick={e => this.mudarItem(e, 2)}
                id="4000-B-parede"
              />
              <span className="barlow-regular"> 4000 B</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="revestimento-parede-rd"
                type="radio"
                value="6"
                onClick={e => this.mudarItem(e, 2)}
                id="4000-C-parede"
              />
              <span className="barlow-regular"> 4000 C</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="revestimento-parede-rd"
                type="radio"
                value="7"
                onClick={e => this.mudarItem(e, 2)}
                id="4000-FLEX-parede"
              />
              <span className="barlow-regular"> 4000 FLEX</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="revestimento-parede-rd"
                type="radio"
                value="8"
                onClick={e => this.mudarItem(e, 2)}
                id="5000-parede"
              />
              <span className="barlow-regular"> 5000 </span>
            </div>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular">
              {" "}
              R$ {this.state.itensInputs[1]}
            </span>
          </div>

          {/* forro */}

          <div className="col-2  barlow-bold itens-titulos">forro</div>
          <div className="col-8">
            <div className="col-padrao-celulas  regular">
              <input
                name="forro-rd"
                type="radio"
                value="4"
                onClick={e => this.mudarItem(e, 3)}
                id="4000-A-forro"
              />
              <span className="barlow-regular"> 4000 A</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="forro-rd"
                type="radio"
                value="5"
                onClick={e => this.mudarItem(e, 3)}
                id="4000-B-forro"
              />
              <span className="barlow-regular"> 4000 B</span>
            </div>
            <div className="col-padrao-celulas ">
              {" "}
              <input
                name="forro-rd"
                type="radio"
                value="5"
                onClick={e => this.mudarItem(e, 3)}
                id="4000-C-forro"
              />
              <span className="barlow-regular"> 4000 C</span>
            </div>

            <div className="col-padrao-celulas  regular">
              <input
                name="forro-rd"
                type="radio"
                value="5"
                onClick={e => this.mudarItem(e, 3)}
                id="4000-FLEX-forro"
              />
              <span className="barlow-regular"> 4000 FLEX</span>
            </div>
            <div className="col-padrao-celulas regular">
              <input
                name="forro-rd"
                type="radio"
                value="6"
                onClick={e => this.mudarItem(e, 3)}
                id="5000-forro"
              />
              <span className="barlow-regular"> 5000 </span>
            </div>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular">
              {" "}
              R$ {this.state.itensInputs[2]}
            </span>
          </div>

          {/* caixilhos */}

          <div className="col-2  barlow-bold itens-titulos">caixilhos</div>
          <div className="col-8">
            <div className="col-padrao-celulas  regular">
              <input
                name="caixilhos-rd"
                type="radio"
                value="4"
                onClick={e => this.mudarItem(e, 4)}
                id="sim-caixilhos"
              />{" "}
              <span className="barlow-regular"> sim</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="caixilhos-rd"
                type="radio"
                value="0"
                id="nao-caixilhos"
                onClick={e => this.mudarItem(e, 4)}
              />{" "}
              <span className="barlow-regular"> não</span>
            </div>
            <div className="col-padrao-celulas  regular"></div>
            <div className="col-padrao-celulas  regular"></div>
            <div className="col-padrao-celulas  regular"></div>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular">
              {" "}
              R$ {this.state.itensInputs[3]}
            </span>
          </div>

          {/* painel bdn */}

          <div className="col-2  barlow-bold itens-titulos">painel bdn</div>
          <div className="col-8">
            <div className="col-padrao-celulas  regular">
              <input
                name="painel-bdn-rdo"
                type="radio"
                value="4"
                onClick={e => this.mudarItem(e, 5)}
                id="metalico-3000-painel"
              />{" "}
              <span className="barlow-regular"> metálico 3000</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="painel-bdn-rdo"
                type="radio"
                value="5"
                onClick={e => this.mudarItem(e, 5)}
                id="metalico-4000-painel"
              />{" "}
              <span className="barlow-regular"> metálico 4000</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="painel-bdn-rdo"
                type="radio"
                value="6"
                onClick={e => this.mudarItem(e, 5)}
                id="metalico-5000-painel"
              />{" "}
              <span className="barlow-regular"> 5000</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="painel-bdn-rdo"
                type="radio"
                value="7"
                onClick={e => this.mudarItem(e, 5)}
                id="metalico-drywall-painel"
              />{" "}
              <span className="barlow-regular"> drywall</span>
            </div>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular">
              {" "}
              R$ {this.state.itensInputs[4]}
            </span>
          </div>

          {/* MOBILIARIO */}

          <div className="col-2  barlow-bold itens-titulos">mobiliário</div>
          <div className="col-8">
            <div className="col-padrao-celulas  regular">
              <input
                name="mobiliario-rdo"
                type="radio"
                value="4"
                onClick={e => this.mudarItem(e, 6)}
                id="4000-mobiliario"
              />{" "}
              <span className="barlow-regular"> 4000</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="mobiliario-rdo"
                type="radio"
                value="5"
                onClick={e => this.mudarItem(e, 6)}
                id="5000-mobiliario"
              />{" "}
              <span className="barlow-regular"> 5000</span>
            </div>
            <div className="col-padrao-celulas  regular"></div>
            <div className="col-padrao-celulas  regular"></div>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular">
              {" "}
              R$ {this.state.itensInputs[5]}
            </span>
          </div>

          {/* persianas */}

          <div className="col-2  barlow-bold itens-titulos">persianas</div>
          <div className="col-8">
            <div className="col-padrao-celulas  regular">
              <input
                name="persianas-rd"
                type="radio"
                value="4"
                onClick={e => this.mudarItem(e, 7)}
                id="4000-A-persianas"
              />{" "}
              <span className="barlow-regular"> 4000 A</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="persianas-rd"
                type="radio"
                value="5"
                onClick={e => this.mudarItem(e, 7)}
                id="4000-B-distribuicao"
              />{" "}
              <span className="barlow-regular"> 4000 B</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="persianas-rd"
                type="radio"
                value="6"
                onClick={e => this.mudarItem(e, 7)}
                id="4000-C-distribuicao"
              />{" "}
              <span className="barlow-regular"> 4000 C</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="persianas-rd"
                type="radio"
                value="7"
                onClick={e => this.mudarItem(e, 7)}
                id="4000-FLEX-distribuicao"
              />{" "}
              <span className="barlow-regular"> 4000 FLEX</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="persianas-rd"
                type="radio"
                value="8"
                onClick={e => this.mudarItem(e, 7)}
                id="5000-distribuicao"
              />{" "}
              <span className="barlow-regular"> 5000</span>
            </div>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular">
              {" "}
              R$ {this.state.itensInputs[6]}
            </span>
          </div>

          {/* vedacoes-internas-rd */}

          <div className="col-2  barlow-bold itens-titulos">
            vedações internas
          </div>
          <div className="col-8">
            <div className="col-padrao-celulas  regular">
              <input
                name="vedacoes-internas-rd"
                type="radio"
                value="4"
                onClick={e => this.mudarItem(e, 8)}
                id="alvenarias-vedacoes"
              />{" "}
              <span className="barlow-regular"> alvenarias</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="vedacoes-internas-rd"
                type="radio"
                value="5"
                onClick={e => this.mudarItem(e, 8)}
                id="drywall-vedacoes"
              />{" "}
              <span className="barlow-regular"> drywall</span>
            </div>
            {/* <div className="col-2  regular">
            <input
              name="vedacoes-internas-rd"
              type="radio"
              value="5"
              onClick={e => this.mudarItem(e, 8)}
              id="unificacao-vedacoes"
            />{" "}
            <span className="barlow-regular"> unificação</span>
          </div> */}
            <div className="col-padrao-celulas  regular"></div>
            <div className="col-padrao-celulas  regular"></div>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular">
              {" "}
              R$ {this.state.itensInputs[7]}
            </span>
          </div>

          {/* fachada-rd */}

          <div className="col-2  barlow-bold itens-titulos">fachada</div>
          <div className="col-8">
            <div className="col-padrao-celulas  regular">
              <input
                name="fachada-rd"
                type="radio"
                value="4"
                onClick={e => this.mudarItem(e, 9)}
                id="4000-A-fachada"
              />{" "}
              <span className="barlow-regular"> 4000 A</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="fachada-rd"
                type="radio"
                value="5"
                onClick={e => this.mudarItem(e, 9)}
                id="4000-B-fachada"
              />{" "}
              <span className="barlow-regular"> 4000 B</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="fachada-rd"
                type="radio"
                value="6"
                onClick={e => this.mudarItem(e, 9)}
                id="4000-C-fachada"
              />{" "}
              <span className="barlow-regular"> 4000 C</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="fachada-rd"
                type="radio"
                value="7"
                onClick={e => this.mudarItem(e, 9)}
                id="4000-FLEX-fachada"
              />{" "}
              <span className="barlow-regular"> 4000 FLEX</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="fachada-rd"
                type="radio"
                value="8"
                onClick={e => this.mudarItem(e, 9)}
                id="5000-A-fachada"
              />{" "}
              <span className="barlow-regular"> 5000</span>
            </div>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular">
              {" "}
              R$ {this.state.itensInputs[8]}
            </span>
          </div>

          {/* comunicacao-visual-rd */}

          <div className="col-2  barlow-bold itens-titulos">
            comunicação visual ext.
          </div>
          <div className="col-8">
            <div className="col-padrao-celulas  regular">
              <input
                name="comunicacao-visual-rd"
                type="checkbox"
                value="4"
                onClick={e => this.mudarItem(e, 10)}
                id="letreiro-comunicacao"
              />{" "}
              <span className="barlow-regular"> letreiro</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="comunicacao-visual-rd"
                type="checkbox"
                value="5"
                onClick={e => this.mudarItem(e, 10)}
                id="totem-comunicacao"
              />{" "}
              <span className="barlow-regular"> totem</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="comunicacao-visual-rd"
                type="checkbox"
                value="6"
                onClick={e => this.mudarItem(e, 10)}
                id="medalhao-comunicacao"
              />{" "}
              <span className="barlow-regular"> medalhão</span>
            </div>
            <div className="col-padrao-celulas  regular">
              <input
                name="comunicacao-visual-rd"
                type="checkbox"
                value="7"
                onClick={e => this.mudarItem(e, 10)}
                id="bandeira-comunicacao"
              />{" "}
              <span className="barlow-regular"> bandeira</span>
            </div>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular">
              {" "}
              R$ {this.state.itensInputs[9]}
            </span>
          </div>

          {/* ESPAÇAMENTO */}

          <div className="col-10 espacamento"></div>
          <div className="col-2 espacamento  menu-resumo"></div>

          <div className="div-progressbar">
            <div className="col-10 ">
              <div className="progress">
                <div
                  className="progress-bar progressbar3"
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
                  alt="Icone numero um"
                  src={IconeUm}
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
                  className=" float-left tamanho-icone"
                  src={IconeTresBranco}
                  alt="Icone numero três"
                />
              </div>
              <div className="fonte-footer-pag ">
                <span className="texto-rodape barlow-padrao branco-metodo">
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
              reiniciar
            </div>
            <div className="box-rodape-icone2 barlow-regular">
              <Link onClick={e => this.salvarDadosLocalVoltar(e)}>
                <div>
                  <img
                    className="tamanho-icone"
                    src={IconeVoltar}
                    alt="Icone voltar "
                  />
                </div>
              </Link>
              voltar
            </div>

            <div className="box-rodape-icone3 barlow-regular">
              <Link to="/resultado">
                <div>
                  <img
                    className="tamanho-icone"
                    onClick={e => this.salvarDadosLocal(e)}
                    src={IconeContinuar}
                    alt="Icone continuar"
                  />
                </div>
              </Link>
              prosseguir
            </div>

            <div className="box-rodape-palavras">
              <div className="metro-quadrado barlow-bold ">total m²</div>
              <div className="resultado barlow-bold ">
                R$ {this.state.somaAcabamento}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
