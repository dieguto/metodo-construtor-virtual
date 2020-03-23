import React, { Component } from "react";
import { Link, browserHistory } from "react-router";

import "../css/rodape.css";
import "../css/edificacoes.css";

import IconeUm from "../Assets/icons/icon_1.svg";
import IconeBranco from "../Assets/icons/icon_2_branco.svg";
import IconeTres from "../Assets/icons/icon_3.svg";
import IconeVoltar from "../Assets/icons/icon_voltar.svg";
import IconeContinuar from "../Assets/icons/icon_avancar.svg";

import MetodoLogo from "../Assets/icons/logo_mtdtech.svg";

export default class InfraEstrutura extends Component {
  constructor() {
    super();
    this.state = {
      somaInfra: 0,
      item1: 0,
      item2: 0,
      item3: 0,
      item4: 0,
      item5: 0,
      item6: 0,
      item7: 0,
      item8: 0,
      item9: 0,
      item10: 0,
      itens: []
      // total: 0
    };
  }

  componentDidMount() {
    this.pegarLista();
    // this.salvarDadosLocalVoltar();
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
      item = JSON.parse(sessionStorage.getItem(name));
      if (item !== null) itens.push(item.id);
    });
    console.log(itens);

    itens.map(item => {
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
    let item;
    let values = [];
    itens.map(item => {
      item = JSON.parse(sessionStorage.getItem(item));
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
    this.setState({ item10: values[9] || 0 });
    this.setState({ somaInfra: sessionStorage.getItem("infraestrutura") });
    // this.setState({ total: sessionStorage.getItem("total") });
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
    sessionStorage.setItem("total", total); //  50  48  105
    // this.setState({ total: total });
    browserHistory.push("/padraoacabamento");
  }

  // salvarDadosLocalVoltar() {
  //   // e.preventDefault();
  //   let total = parseInt(sessionStorage.getItem("total")) || 0; //  0 50  99
  //   let newSomaEd = this.state.somaEdificacoes; //  50  48  54
  //   let somaEd = parseInt(sessionStorage.getItem("edificacoes")) || 0; //  0  50  48

  //   sessionStorage.setItem("edificacoes", this.state.somaEdificacoes); //  50 48  54

  //   if (total === 0) {
  //     // true  false   false
  //     total = newSomaEd; //  50
  //   } else {
  //     total -= somaEd; //  50-50=0  99-48=51
  //     total += newSomaEd; //  0+48=48   51+54=105
  //   }
  //   sessionStorage.setItem("total", total); //  50  48  105
  //   // this.setState({ total: total });
  //   // browserHistory.push("/construcao");
  // }

  mudarItem1(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaInfra;
    let item1 = this.state.item1;
    let itemValor;

    if (item1 !== value) {
      resultado -= item1;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item1: value });

    this.setState({ somaInfra: resultado });

    setTimeout(() => {
      console.log(this.state.somaInfra);
    }, 1000);

    itemValor = { id: e.target.id, value };
    sessionStorage.setItem(e.target.name, JSON.stringify(itemValor));
  }

  mudarItem2(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaInfra;
    let item2 = this.state.item2;
    let itemValor;

    if (item2 !== value) {
      resultado -= item2;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item2: value });

    this.setState({ somaInfra: resultado });

    setTimeout(() => {
      console.log(this.state.somaInfra);
    }, 1000);

    itemValor = { id: e.target.id, value };
    sessionStorage.setItem(e.target.name, JSON.stringify(itemValor));
  }

  mudarItem3(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaInfra;
    let item3 = this.state.item3;
    let itemValor;

    if (item3 !== value) {
      resultado -= item3;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item3: value });

    this.setState({ somaInfra: resultado });

    setTimeout(() => {
      console.log(this.state.somaInfra);
    }, 1000);

    itemValor = { id: e.target.id, value };
    sessionStorage.setItem(e.target.name, JSON.stringify(itemValor));
  }

  mudarItem4(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaInfra;
    let item4 = this.state.item4;
    let itemValor;

    if (item4 !== value) {
      resultado -= item4;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item4: value });

    this.setState({ somaInfra: resultado });

    setTimeout(() => {
      console.log(this.state.somaInfra);
    }, 1000);

    itemValor = { id: e.target.id, value };
    sessionStorage.setItem(e.target.name, JSON.stringify(itemValor));
  }

  mudarItem5(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaInfra;
    let item5 = this.state.item5;
    let itemValor;

    if (item5 !== value) {
      resultado -= item5;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item5: value });

    this.setState({ somaInfra: resultado });

    setTimeout(() => {
      console.log(this.state.somaInfra);
    }, 1000);

    itemValor = { id: e.target.id, value };
    sessionStorage.setItem(e.target.name, JSON.stringify(itemValor));
  }

  mudarItem6(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaInfra;
    let item6 = this.state.item6;
    let itemValor;

    if (item6 !== value) {
      resultado -= item6;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item6: value });

    this.setState({ somaInfra: resultado });

    setTimeout(() => {
      console.log(this.state.somaInfra);
    }, 1000);

    itemValor = { id: e.target.id, value };
    sessionStorage.setItem(e.target.name, JSON.stringify(itemValor));
  }

  mudarItem7(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaInfra;
    let item7 = this.state.item7;
    let itemValor;

    if (item7 !== value) {
      resultado -= item7;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item7: value });

    this.setState({ somaInfra: resultado });

    setTimeout(() => {
      console.log(this.state.somaInfra);
    }, 1000);

    itemValor = { id: e.target.id, value };
    sessionStorage.setItem(e.target.name, JSON.stringify(itemValor));
  }

  mudarItem8(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaInfra;
    let item8 = this.state.item8;
    let itemValor;

    if (item8 !== value) {
      resultado -= item8;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item8: value });

    this.setState({ somaInfra: resultado });

    setTimeout(() => {
      console.log(this.state.somaInfra);
    }, 1000);

    itemValor = { id: e.target.id, value };
    sessionStorage.setItem(e.target.name, JSON.stringify(itemValor));
  }

  mudarItem9(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaInfra;
    let item9 = this.state.item9;
    let itemValor;

    if (item9 !== value) {
      resultado -= item9;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item9: value });

    this.setState({ somaInfra: resultado });

    setTimeout(() => {
      console.log(this.state.somaInfra);
    }, 1000);

    itemValor = { id: e.target.id, value };
    sessionStorage.setItem(e.target.name, JSON.stringify(itemValor));
  }

  mudarItem10(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaInfra;
    let item10 = this.state.item10;
    let itemValor;

    if (item10 !== value) {
      resultado -= item10;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item10: value });

    this.setState({ somaInfra: resultado });

    setTimeout(() => {
      console.log(this.state.somaInfra);
    }, 1000);

    itemValor = { id: e.target.id, value };
    sessionStorage.setItem(e.target.name, JSON.stringify(itemValor));
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
          <div className="col-7  mt-4">
            <h2 className="barlow-extrabold preto-metodo">
              fase 2{" "}
              <span className="barlow-thin cor-padrao-metodo">
                /infra estrutura
              </span>{" "}
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
          <div className="col-2  regular">
            <input
              onClick={e => this.mudarItem1(e)}
              value="4"
              type="radio"
              name="climatizacao-rd"
              id="central-clima"
            />
            <span className="barlow-semibold"></span> central
          </div>
          <div className="col-2  regular">
            <input
              onClick={e => this.mudarItem1(e)}
              value="5"
              type="radio"
              name="climatizacao-rd"
              id="split-clima"
            />
            <span className="barlow-semibold"></span> split
          </div>
          <div className="col-2  regular">
            <input
              onClick={e => this.mudarItem1(e)}
              value="6"
              type="radio"
              name="climatizacao-rd"
              id="misto-clima"
            />
            <span className="barlow-semibold"></span> misto
          </div>
          <div className="col-1  regular"></div>
          <div className="col-1  regular"></div>

          <div className="col-2  regular menu-resumo">
            {" "}
            R$ {this.state.item1}
          </div>

          {/* ELÉTRICA COMUM */}

          <div className="col-2  barlow-bold itens-titulos">elétrica comum</div>
          <div className="col-2  regular">
            <input
              name="eletrica-rd"
              onClick={e => this.mudarItem2(e)}
              value="4"
              type="radio"
              id="4000-A-eletrica"
            />
            <span className=""> 4000 A</span>
          </div>
          <div className="col-2  regular">
            <input
              name="eletrica-rd"
              onClick={e => this.mudarItem2(e)}
              value="5"
              type="radio"
              id="4000-B-eletrica"
            />
            <span className="barlow-semibold"></span> 4000 B
          </div>
          <div className="col-2  regular">
            <input
              name="eletrica-rd"
              onClick={e => this.mudarItem2(e)}
              value="6"
              type="radio"
              id="4000-C-eletrica"
            />{" "}
            4000 C
          </div>
          <div className="col-1  regular">
            <input
              name="eletrica-rd"
              onClick={e => this.mudarItem2(e)}
              value="7"
              type="radio"
              id="4000-FLEX-eletrica"
            />
            4000 FLEX
          </div>
          <div className="col-1  regular">
            <input
              name="eletrica-rd"
              onClick={e => this.mudarItem2(e)}
              value="8"
              type="radio"
              id="5000-eletrica"
            />
            5000
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            R$ {this.state.item2}
          </div>

          {/* REDE LÓGICA */}

          <div className="col-2  barlow-bold itens-titulos">rede lógica</div>
          <div className="col-2  regular">
            <input
              name="rede-rd"
              onClick={e => this.mudarItem3(e)}
              value="4"
              type="radio"
              id="cabeamento-rede"
            />
            <span className="barlow-semibold"></span> cabeamento
          </div>
          <div className="col-2  regular">
            <input
              name="rede-rd"
              onClick={e => this.mudarItem3(e)}
              value="5"
              type="radio"
              id="wi-fi-rede"
            />
            <span className="barlow-semibold"></span> wi-fi
          </div>
          <div className="col-2 "></div>

          <div className="col-2  regular"></div>
          <div className="col-2  regular menu-resumo">
            {" "}
            R$ {this.state.item3}
          </div>

          {/* DISTRIBUIÇÃO ELÉTRICA */}

          <div className="col-2  barlow-bold itens-titulos">
            distribuição elétrica
          </div>
          <div className="col-2  regular">
            <input
              name="distribuica-rd"
              onClick={e => this.mudarItem4(e)}
              value="4"
              type="radio"
              id="4000-A-distribuicao"
            />{" "}
            4000 A
          </div>
          <div className="col-2  regular">
            <input
              name="distribuica-rd"
              onClick={e => this.mudarItem4(e)}
              value="5"
              type="radio"
              id="4000-B-distribuicao"
            />{" "}
            4000 B
          </div>
          <div className="col-2  regular">
            <input
              name="distribuica-rd"
              onClick={e => this.mudarItem4(e)}
              value="6"
              type="radio"
              id="4000-C-distribuicao"
            />{" "}
            4000 C
          </div>
          <div className="col-1  regular">
            <input
              name="distribuica-rd"
              onClick={e => this.mudarItem4(e)}
              value="7"
              type="radio"
              id="4000-FLEX-distribuicao"
            />{" "}
            4000 FLEX
          </div>
          <div className="col-1  regular">
            <input
              name="distribuica-rd"
              onClick={e => this.mudarItem4(e)}
              value="8"
              type="radio"
              id="5000-distribuicao"
            />{" "}
            5000
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            R$ {this.state.item4}
          </div>

          {/* TELEFONIA */}

          <div className="col-2  barlow-bold itens-titulos">telefonia</div>
          <div className="col-2  regular">
            <input
              name="telefonia-rd"
              onClick={e => this.mudarItem5(e)}
              value="4"
              type="radio"
              id="4000-A-telefonia"
            />{" "}
            4000 A
          </div>
          <div className="col-2  regular">
            <input
              name="telefonia-rd"
              onClick={e => this.mudarItem5(e)}
              value="5"
              type="radio"
              id="4000-B-telefonia"
            />{" "}
            4000 B
          </div>
          <div className="col-2  regular">
            <input
              name="telefonia-rd"
              onClick={e => this.mudarItem5(e)}
              value="6"
              type="radio"
              id="4000-C-telefonia"
            />{" "}
            4000 C
          </div>
          <div className="col-1  regular">
            <input
              name="telefonia-rd"
              onClick={e => this.mudarItem5(e)}
              value="7"
              type="radio"
              id="4000-FLEX-telefonia"
            />{" "}
            4000 FLEX
          </div>
          <div className="col-1  regular">
            <input
              name="telefonia-rd"
              onClick={e => this.mudarItem5(e)}
              value="8"
              type="radio"
              id="5000-telefonia"
            />{" "}
            5000
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            R$ {this.state.item5}
          </div>

          {/* ILUMINAÇÃO */}

          <div className="col-2  barlow-bold itens-titulos">iluminação</div>
          <div className="col-2  regular">
            <input
              name="iluminacao-rd"
              onClick={e => this.mudarItem6(e)}
              value="4"
              type="radio"
              id="4000-A-iluminacao"
            />{" "}
            4000 A
          </div>
          <div className="col-2  regular">
            <input
              name="iluminacao-rd"
              onClick={e => this.mudarItem6(e)}
              value="5"
              type="radio"
              id="4000-B-iluminacao"
            />{" "}
            4000 B
          </div>
          <div className="col-2  regular">
            <input
              name="iluminacao-rd"
              onClick={e => this.mudarItem6(e)}
              value="6"
              type="radio"
              id="4000-B-iluminacao"
            />{" "}
            4000 C
          </div>
          <div className="col-1  regular">
            <input
              name="iluminacao-rd"
              onClick={e => this.mudarItem6(e)}
              value="7"
              type="radio"
              id="4000-FLEX-iluminacao"
            />{" "}
            4000 FLEX
          </div>
          <div className="col-1  regular">
            <input
              name="iluminacao-rd"
              onClick={e => this.mudarItem6(e)}
              value="8"
              type="radio"
              id="5000-iluminacao"
            />{" "}
            5000
          </div>
          <div className="col-2  regular menu-resumo">
            {" "}
            R$ {this.state.item6}
          </div>

          {/* ENTRADA DE ENERGIA */}

          <div className="col-2  barlow-bold itens-titulos">
            entrada de energia
          </div>
          <div className="col-2  regular">
            <input
              name="entrada-rd"
              onClick={e => this.mudarItem7(e)}
              value="4"
              type="radio"
              id="acrescimo-entrada"
            />{" "}
            acréscimo de carga
          </div>
          <div className="col-2  regular">
            <input
              name="entrada-rd"
              onClick={e => this.mudarItem7(e)}
              value="5"
              type="radio"
              id="substituicao-entrada"
            />{" "}
            substituição de quadros
          </div>
          <div className="col-2  regular">
            <input
              name="entrada-rd"
              onClick={e => this.mudarItem7(e)}
              value="6"
              type="radio"
              id="unificacao-entrada"
            />{" "}
            unificação
          </div>
          <div className="col-2  regular">
            {" "}
            <input
              name="entrada-rd"
              onClick={e => this.mudarItem7(e)}
              value="7"
              type="radio"
              id="desmembrar-entrada"
            />{" "}
            desmembrar entrada
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            R$ {this.state.item7}
          </div>

          {/* BOMBEIROS */}

          <div className="col-2  barlow-bold itens-titulos">bombeiros</div>
          <div className="col-2  regular">
            <input
              name="bombeiros-rd"
              onClick={e => this.mudarItem8(e)}
              value="4"
              type="radio"
              id="hidrante-bombeiros"
            />{" "}
            hidrante
          </div>
          <div className="col-2  regular">
            <input
              name="bombeiros-rd"
              onClick={e => this.mudarItem8(e)}
              value="5"
              type="radio"
              id="hidrante-bombeiros"
            />{" "}
            sprinkler
          </div>
          <div className="col-2  regular">
            <input
              name="bombeiros-rd"
              onClick={e => this.mudarItem8(e)}
              value="6"
              type="radio"
              id="extintores-bombeiros"
            />{" "}
            extintores
          </div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular menu-resumo">
            {" "}
            R$ {this.state.item8}
          </div>

          {/* Rede Hidráulica */}

          <div className="col-2  barlow-bold itens-titulos">
            rede hidráulica
          </div>
          <div className="col-2  regular">
            <input
              name="hidraulica-rd"
              onClick={e => this.mudarItem9(e)}
              value="4"
              type="radio"
              id="unificacao-hidraulica"
            />{" "}
            unificação
          </div>
          <div className="col-2  regular">
            <input
              name="hidraulica-rd"
              onClick={e => this.mudarItem9(e)}
              value="5"
              type="radio"
              id="desmebrar-hidraulica"
            />{" "}
            desmebrar entrada
          </div>
          <div className="col-2  regular">
            <input
              name="hidraulica-rd"
              onClick={e => this.mudarItem9(e)}
              value="6"
              type="radio"
              id="alimentacao-hidraulica"
            />{" "}
            nova alimentação
          </div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular menu-resumo">
            {" "}
            R$ {this.state.item9}
          </div>

          {/* ACESSIBILIDADE */}

          <div className="col-2  barlow-bold itens-titulos">acessibilidade</div>
          <div className="col-2  regular">
            <input
              name="acessibilidade-rd"
              onClick={e => this.mudarItem10(e)}
              value="4"
              type="radio"
              id="elevador-acessibilidade"
            />{" "}
            elevador
          </div>
          <div className="col-2  regular">
            <input
              name="acessibilidade-rd"
              onClick={e => this.mudarItem10(e)}
              value="5"
              type="radio"
              id="plataforma-acessibilidade"
            />{" "}
            plataforma
          </div>
          <div className="col-2  regular">
            <input
              name="acessibilidade-rd"
              onClick={e => this.mudarItem10(e)}
              value="6"
              type="radio"
              id="rampa-acessibilidade"
            />{" "}
            rampa
          </div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular menu-resumo">
            {" "}
            R$ {this.state.item10}
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

            <div className="box-rodape-icone2">
              <Link to="/construcao">
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
