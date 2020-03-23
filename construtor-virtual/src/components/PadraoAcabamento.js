import React, { Component } from "react";
import { Link, browserHistory } from "react-router";

// import { Container } from './styles';
import "../css/rodape.css";
import "../css/edificacoes.css";

import IconeUm from "../Assets/icons/icon_1.svg";
import IconeDois from "../Assets/icons/icon_2.svg";
import IconeTresBranco from "../Assets/icons/icon_3_branco.svg";
import IconeVoltar from "../Assets/icons/icon_voltar.svg";
import IconeContinuar from "../Assets/icons/icon_avancar.svg";

import MetodoLogo from "../Assets/icons/logo_mtdtech.svg";

export default class PadraoAcabamento extends Component {
  constructor() {
    super();
    this.state = {
      somaAcabamento: 0,
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

    this.setState({ somaAcabamento: sum });
    setTimeout(() => {
      localStorage.setItem("padraoacabamento", this.state.somaAcabamento);
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
    this.setState({ item10: values[9] || 0 });
    this.setState({ somaAcabamento: localStorage.getItem("padraoacabamento") });
    // this.setState({ total: localStorage.getItem("total") });
  }

  salvarDadosLocal(e) {
    e.preventDefault();
    let total = parseInt(localStorage.getItem("total")) || 0; //  0 50  99
    let newSomaInf = this.state.somaAcabamento; //  50  48  54
    let somaInf = parseInt(localStorage.getItem("padraoacabamento")) || 0; //  0  50  48

    localStorage.setItem("padraoacabamento", this.state.somaAcabamento); //  50 48  54

    if (total === 0) {
      // true  false   false
      total = newSomaInf; //  50
    } else {
      total -= somaInf; //  50-50=0  99-48=51
      total += newSomaInf; //  0+48=48   51+54=105
    }
    localStorage.setItem("total", total); //  50  48  105
    // this.setState({ total: total });
    browserHistory.push("/resultado");
  }

  mudarItem1(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaAcabamento;
    let item1 = this.state.item1;
    let itemValor;

    if (item1 !== value) {
      resultado -= item1;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item1: value });

    this.setState({ somaAcabamento: resultado });

    setTimeout(() => {
      console.log(this.state.somaAcabamento);
    }, 1000);

    itemValor = { id: e.target.id, value };
    localStorage.setItem(e.target.name, JSON.stringify(itemValor));
  }

  mudarItem2(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaAcabamento;
    let item2 = this.state.item2;
    let itemValor;

    if (item2 !== value) {
      resultado -= item2;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item2: value });

    this.setState({ somaAcabamento: resultado });

    setTimeout(() => {
      console.log(this.state.somaAcabamento);
    }, 1000);

    itemValor = { id: e.target.id, value };
    localStorage.setItem(e.target.name, JSON.stringify(itemValor));
  }

  mudarItem3(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaAcabamento;
    let item3 = this.state.item3;
    let itemValor;

    if (item3 !== value) {
      resultado -= item3;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item3: value });

    this.setState({ somaAcabamento: resultado });

    setTimeout(() => {
      console.log(this.state.somaAcabamento);
    }, 1000);

    itemValor = { id: e.target.id, value };
    localStorage.setItem(e.target.name, JSON.stringify(itemValor));
  }

  mudarItem4(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaAcabamento;
    let item4 = this.state.item4;
    let itemValor;

    if (item4 !== value) {
      resultado -= item4;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item4: value });

    this.setState({ somaAcabamento: resultado });

    setTimeout(() => {
      console.log(this.state.somaAcabamento);
    }, 1000);

    itemValor = { id: e.target.id, value };
    localStorage.setItem(e.target.name, JSON.stringify(itemValor));
  }

  mudarItem5(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaAcabamento;
    let item5 = this.state.item5;
    let itemValor;

    if (item5 !== value) {
      resultado -= item5;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item5: value });

    this.setState({ somaAcabamento: resultado });

    setTimeout(() => {
      console.log(this.state.somaAcabamento);
    }, 1000);

    itemValor = { id: e.target.id, value };
    localStorage.setItem(e.target.name, JSON.stringify(itemValor));
  }

  mudarItem6(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaAcabamento;
    let item6 = this.state.item6;
    let itemValor;

    if (item6 !== value) {
      resultado -= item6;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item6: value });

    this.setState({ somaAcabamento: resultado });

    setTimeout(() => {
      console.log(this.state.somaAcabamento);
    }, 1000);

    itemValor = { id: e.target.id, value };
    localStorage.setItem(e.target.name, JSON.stringify(itemValor));
  }

  mudarItem7(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaAcabamento;
    let item7 = this.state.item7;
    let itemValor;

    if (item7 !== value) {
      resultado -= item7;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item7: value });

    this.setState({ somaAcabamento: resultado });

    setTimeout(() => {
      console.log(this.state.somaAcabamento);
    }, 1000);

    itemValor = { id: e.target.id, value };
    localStorage.setItem(e.target.name, JSON.stringify(itemValor));
  }

  mudarItem8(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaAcabamento;
    let item8 = this.state.item8;
    let itemValor;

    if (item8 !== value) {
      resultado -= item8;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item8: value });

    this.setState({ somaAcabamento: resultado });

    setTimeout(() => {
      console.log(this.state.somaAcabamento);
    }, 1000);

    itemValor = { id: e.target.id, value };
    localStorage.setItem(e.target.name, JSON.stringify(itemValor));
  }

  mudarItem9(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaAcabamento;
    let item9 = this.state.item9;
    let itemValor;

    if (item9 !== value) {
      resultado -= item9;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item9: value });

    this.setState({ somaAcabamento: resultado });

    setTimeout(() => {
      console.log(this.state.somaAcabamento);
    }, 1000);

    itemValor = { id: e.target.id, value };
    localStorage.setItem(e.target.name, JSON.stringify(itemValor));
  }

  mudarItem10(e) {
    let value = parseInt(e.target.value);
    let resultado = this.state.somaAcabamento;
    let item10 = this.state.item10;
    let itemValor;

    if (item10 !== value) {
      resultado -= item10;
      console.log(">> " + resultado);
      resultado += value;
      console.log(":: " + resultado);
    }
    this.setState({ item10: value });

    this.setState({ somaAcabamento: resultado });

    setTimeout(() => {
      console.log(this.state.somaAcabamento);
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
              fase 3{" "}
              <span className="barlow-thin cor-padrao-metodo">
                /padrão acabamento
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

          {/* Inicio da tabela */}

          {/* revestimento piso */}

          <div className="col-2  barlow-bold itens-titulos">
            revestimento piso
          </div>
          <div className="col-2  regular">
            <input
              type="radio"
              value="4"
              onClick={e => this.mudarItem1(e)}
              name="revestimento-piso-rd"
              id="4000-A-piso"
            />
            <span className="barlow-semibold"></span> 4000 A
          </div>
          <div className="col-2  regular">
            <input
              type="radio"
              value="5"
              onClick={e => this.mudarItem1(e)}
              name="revestimento-piso-rd"
              id="4000-B-piso"
            />
            <span className="barlow-semibold"></span> 4000 B
          </div>
          <div className="col-2  regular">
            <input
              type="radio"
              value="6"
              onClick={e => this.mudarItem1(e)}
              name="revestimento-piso-rd"
              id="4000-C-piso"
            />
            <span className="barlow-semibold"></span> 4000 C
          </div>
          <div className="col-1  regular">
            <input
              type="radio"
              value="7"
              onClick={e => this.mudarItem1(e)}
              name="revestimento-piso-rd"
              id="4000-FLEX-piso"
            />{" "}
            4000 FLEX
          </div>
          <div className="col-1  regular">
            <input
              type="radio"
              value="8"
              onClick={e => this.mudarItem1(e)}
              name="revestimento-piso-rd"
              id="5000-piso"
            />{" "}
            5000
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            R$ {this.state.item1}
          </div>

          {/* revestimento-parede */}

          <div className="col-2  barlow-bold itens-titulos">
            revestimento parede
          </div>
          <div className="col-2  regular">
            <input
              name="revestimento-parede-rd"
              type="radio"
              value="4"
              onClick={e => this.mudarItem2(e)}
              id="4000-A-parede"
            />
            <span className=""> 4000 A</span>
          </div>
          <div className="col-2  regular">
            <input
              name="revestimento-parede-rd"
              type="radio"
              value="5"
              onClick={e => this.mudarItem2(e)}
              id="4000-B-parede"
            />
            <span className=""> 4000 B</span>
          </div>
          <div className="col-2  regular">
            <input
              name="revestimento-parede-rd"
              type="radio"
              value="6"
              onClick={e => this.mudarItem2(e)}
              id="4000-C-parede"
            />
            <span className=""> 4000 C</span>
          </div>
          <div className="col-1  regular">
            <input
              name="revestimento-parede-rd"
              type="radio"
              value="7"
              onClick={e => this.mudarItem2(e)}
              id="4000-FLEX-parede"
            />
            <span className=""> 4000 FLEX</span>
          </div>
          <div className="col-1  regular">
            <input
              name="revestimento-parede-rd"
              type="radio"
              value="8"
              onClick={e => this.mudarItem2(e)}
              id="5000-parede"
            />
            <span className=""> 5000 </span>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            R$ {this.state.item2}
          </div>

          {/* forro */}

          <div className="col-2  barlow-bold itens-titulos">forro</div>
          <div className="col-2  regular">
            <input
              name="forro-rd"
              type="radio"
              value="4"
              onClick={e => this.mudarItem3(e)}
              id="4000-A-forro"
            />
            <span className="barlow-semibold"></span> 4000 A
          </div>
          <div className="col-2  regular">
            <input
              name="forro-rd"
              type="radio"
              value="5"
              onClick={e => this.mudarItem3(e)}
              id="4000-B-forro"
            />
            <span className="barlow-semibold"></span> 4000 B
          </div>
          <div className="col-2 ">
            {" "}
            <input
              name="forro-rd"
              type="radio"
              value="5"
              onClick={e => this.mudarItem3(e)}
              id="4000-C-forro"
            />
            4000 C
          </div>

          <div className="col-1  regular">
            <input
              name="forro-rd"
              type="radio"
              value="5"
              onClick={e => this.mudarItem3(e)}
              id="4000-FLEX-forro"
            />
            <span className=""> 4000 FLEX</span>
          </div>
          <div className="col-1  regular">
            <input
              name="forro-rd"
              type="radio"
              value="6"
              onClick={e => this.mudarItem3(e)}
              id="5000-forro"
            />
            <span className=""> 5000 </span>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            R$ {this.state.item3}
          </div>

          {/* caixilhos */}

          <div className="col-2  barlow-bold itens-titulos">caixilhos</div>
          <div className="col-2  regular">
            <input
              name="caixilhos-rd"
              type="radio"
              value="4"
              onClick={e => this.mudarItem4(e)}
              id="sim-caixilhos"
            />{" "}
            sim
          </div>
          <div className="col-2  regular">
            <input
              name="caixilhos-rd"
              type="radio"
              value="0"
              id="nao-caixilhos"
              onClick={e => this.mudarItem4(e)}
            />{" "}
            não
          </div>
          <div className="col-2  regular"></div>
          <div className="col-1  regular"></div>
          <div className="col-1  regular"></div>

          <div className="col-2  regular menu-resumo">
            {" "}
            R$ {this.state.item4}
          </div>

          {/* painel bdn */}

          <div className="col-2  barlow-bold itens-titulos">painel bdn</div>
          <div className="col-2  regular">
            <input
              name="painel-bdn-rdo"
              type="radio"
              value="4"
              onClick={e => this.mudarItem5(e)}
              id="metalico-3000-painel"
            />{" "}
            metálico 3000
          </div>
          <div className="col-2  regular">
            <input
              name="painel-bdn-rdo"
              type="radio"
              value="5"
              onClick={e => this.mudarItem5(e)}
              id="metalico-4000-painel"
            />{" "}
            metálico 4000
          </div>
          <div className="col-2  regular">
            <input
              name="painel-bdn-rdo"
              type="radio"
              value="6"
              onClick={e => this.mudarItem5(e)}
              id="metalico-5000-painel"
            />{" "}
            5000
          </div>
          <div className="col-2  regular">
            <input
              name="painel-bdn-rdo"
              type="radio"
              value="7"
              onClick={e => this.mudarItem5(e)}
              id="metalico-drywall-painel"
            />{" "}
            drywall
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            R$ {this.state.item5}
          </div>

          {/* MOBILIARIO */}

          <div className="col-2  barlow-bold itens-titulos">mobiliário</div>
          <div className="col-2  regular">
            <input
              name="mobiliario-rdo"
              type="radio"
              value="4"
              onClick={e => this.mudarItem6(e)}
              id="4000-mobiliario"
            />{" "}
            4000
          </div>
          <div className="col-2  regular">
            <input
              name="mobiliario-rdo"
              type="radio"
              value="5"
              onClick={e => this.mudarItem6(e)}
              id="5000-mobiliario"
            />{" "}
            5000
          </div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular"></div>

          <div className="col-2  regular menu-resumo">
            {" "}
            R$ {this.state.item6}
          </div>

          {/* persianas */}

          <div className="col-2  barlow-bold itens-titulos">persianas</div>
          <div className="col-2  regular">
            <input
              name="persianas-rd"
              type="radio"
              value="4"
              onClick={e => this.mudarItem7(e)}
              id="4000-A-persianas"
            />{" "}
            4000 A
          </div>
          <div className="col-2  regular">
            <input
              name="persianas-rd"
              type="radio"
              value="5"
              onClick={e => this.mudarItem7(e)}
              id="4000-B-distribuicao"
            />{" "}
            4000 B
          </div>
          <div className="col-2  regular">
            <input
              name="persianas-rd"
              type="radio"
              value="6"
              onClick={e => this.mudarItem7(e)}
              id="4000-C-distribuicao"
            />{" "}
            4000 C
          </div>
          <div className="col-1  regular">
            <input
              name="persianas-rd"
              type="radio"
              value="7"
              onClick={e => this.mudarItem7(e)}
              id="4000-FLEX-distribuicao"
            />{" "}
            4000 FLEX
          </div>
          <div className="col-1  regular">
            <input
              name="persianas-rd"
              type="radio"
              value="8"
              onClick={e => this.mudarItem7(e)}
              id="5000-distribuicao"
            />{" "}
            5000
          </div>
          <div className="col-2  regular menu-resumo">
            {" "}
            R$ {this.state.item7}
          </div>

          {/* vedacoes-internas-rd */}

          <div className="col-2  barlow-bold itens-titulos">
            vedações internas
          </div>
          <div className="col-2  regular">
            <input
              name="vedacoes-internas-rd"
              type="radio"
              value="4"
              onClick={e => this.mudarItem8(e)}
              id="alvenarias-vedacoes"
            />{" "}
            alvenarias
          </div>
          <div className="col-2  regular">
            <input
              name="vedacoes-internas-rd"
              type="radio"
              value="5"
              onClick={e => this.mudarItem8(e)}
              id="drywall-vedacoes"
            />{" "}
            drywall
          </div>
          <div className="col-2  regular">
            <input
              name="vedacoes-internas-rd"
              type="radio"
              value="5"
              onClick={e => this.mudarItem8(e)}
              id="unificacao-vedacoes"
            />{" "}
            unificação
          </div>
          <div className="col-2  regular"></div>

          <div className="col-2  regular menu-resumo">
            {" "}
            R$ {this.state.item8}
          </div>

          {/* fachada-rd */}

          <div className="col-2  barlow-bold itens-titulos">fachada</div>
          <div className="col-2  regular">
            <input
              name="fachada-rd"
              type="radio"
              value="4"
              onClick={e => this.mudarItem9(e)}
              id="4000-A-fachada"
            />{" "}
            4000 A
          </div>
          <div className="col-2  regular">
            <input
              name="fachada-rd"
              type="radio"
              value="5"
              onClick={e => this.mudarItem9(e)}
              id="4000-B-fachada"
            />{" "}
            4000 B
          </div>
          <div className="col-2  regular">
            <input
              name="fachada-rd"
              type="radio"
              value="6"
              onClick={e => this.mudarItem9(e)}
              id="4000-C-fachada"
            />{" "}
            4000 C
          </div>
          <div className="col-1  regular">
            <input
              name="fachada-rd"
              type="radio"
              value="7"
              onClick={e => this.mudarItem9(e)}
              id="4000-FLEX-fachada"
            />{" "}
            4000 FLEX
          </div>
          <div className="col-1  regular">
            <input
              name="fachada-rd"
              type="radio"
              value="8"
              onClick={e => this.mudarItem9(e)}
              id="5000-A-fachada"
            />{" "}
            5000
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            R$ {this.state.item9}
          </div>

          {/* comunicacao-visual-rd */}

          <div className="col-2  barlow-bold itens-titulos">
            comunicação visual ext.
          </div>
          <div className="col-2  regular">
            <input
              name="comunicacao-visual-rd"
              type="radio"
              value="4"
              onClick={e => this.mudarItem10(e)}
              id="letreiro-comunicacao"
            />{" "}
            letreiro
          </div>
          <div className="col-2  regular">
            <input
              name="comunicacao-visual-rd"
              type="radio"
              value="5"
              onClick={e => this.mudarItem10(e)}
              id="totem-comunicacao"
            />{" "}
            totem
          </div>
          <div className="col-2  regular">
            <input
              name="comunicacao-visual-rd"
              type="radio"
              value="6"
              onClick={e => this.mudarItem10(e)}
              id="medalhao-comunicacao"
            />{" "}
            medalhão
          </div>
          <div className="col-2  regular">
            <input
              name="comunicacao-visual-rd"
              type="radio"
              value="7"
              onClick={e => this.mudarItem10(e)}
              id="bandeira-comunicacao"
            />{" "}
            bandeira
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            R$ {this.state.item10}
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
                <span className="texto-rodape barlow black">edificações</span>
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
                  className=" float-left tamanho-icone"
                  src={IconeTresBranco}
                  alt="Icone numero três"
                />
              </div>
              <div className="fonte-footer-pag ">
                <span className="texto-rodape barlow branco-metodo">
                  padrão de acabamento
                </span>
              </div>
            </div>

            <div className="box-rodape-icone2">
              <Link to="/infraestrutura">
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

            <div className="box-rodape-icone3">
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
