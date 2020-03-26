import React, { Component, useState } from "react";
import { Link, browserHistory } from "react-router";

// import { Container } from './styles';
import "../css/rodape.css";
import "../css/edificacoes.css";

import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";

import IconeUm from "../Assets/icons/icon_1.svg";
import IconeDois from "../Assets/icons/icon_2.svg";
import IconeTresBranco from "../Assets/icons/icon_3_branco.svg";
import IconeVoltar from "../Assets/icons/icon_voltar.svg";
import IconeContinuar from "../Assets/icons/icon_avancar.svg";
import IconeSeta from "../Assets/icons/down-arrow.png";

import MetodoLogo from "../Assets/icons/logo_mtdtech.svg";

function DropDown() {
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
        <div className="celula-collapse  barlow-regular">
          <div className="linha-dropdown d-flex">
            <div className="regular menu-dropdown-op ">
              <input
                name="revestimento-parede-rd"
                type="checkbox"
                value="4"
                id="4000-A-parede"
              />
              <span className="barlow-regular branco-metodo "> opção 1</span>
            </div>
            <div className="regular menu-dropdown-op ">
              <input
                name="revestimento-parede-rd"
                type="checkbox"
                value="5"
                id="4000-B-parede"
              />
              <span className="barlow-regular branco-metodo "> opção 2</span>
            </div>
            <div className="menu-dropdown-op  regular ">
              <input
                name="revestimento-parede-rd"
                type="checkbox"
                value="6"
                id="4000-C-parede"
              />
              <span className="barlow-regular branco-metodo "> opção 3</span>
            </div>
            <div className="menu-dropdown-op regular ">
              <input
                name="revestimento-parede-rd"
                type="checkbox"
                value="7"
                id="4000-FLEX-parede"
              />
              <span className="barlow-regular branco-metodo "> opção 4</span>
            </div>
            <div className="menu-dropdown-op regular ">
              <input
                name="revestimento-parede-rd"
                type="checkbox"
                value="7"
                id="4000-FLEX-parede"
              />
              <span className="barlow-regular branco-metodo "> opção 5</span>
            </div>
          </div>
        </div>
      </Collapse>
    </>
  );
}

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

  // pegarLista() {
  //   let lista = document.querySelectorAll([
  //     "input[type='radio']",
  //     "input[type='checkbox']"
  //   ]);
  //   let listaNames = [];
  //   let listaSet = [];

  //   lista = Array.from(lista);

  //   for (let i = 0; i < lista.length - 1; i++) {
  //     listaNames.push(lista[i].name);
  //   }

  //   listaSet = [...new Set(listaNames)];
  //   console.log(listaSet);
  //   this.setState({ itens: listaSet });
  //   this.checkItens(listaSet);
  // }
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

  // checkItens(names) {
  //   let itens = [];
  //   let sum = 0;
  //   let item;

  //   names.map(name => {
  //     item = JSON.parse(sessionStorage.getItem(name));
  //     if (item !== null) {
  //       item.map(element => {
  //         itens.push(element.id);
  //       });
  //     }
  //   });

  //   itens.map(item => {
  //     if (item !== "" && item !== null) {
  //       document.getElementById(item).checked = true;
  //       sum += parseInt(document.getElementById(item).value);
  //     }
  //   });

  //   this.setState({ somaAcabamento: sum });
  //   setTimeout(() => {
  //     sessionStorage.setItem("padraoacabamento", this.state.somaAcabamento);
  //     console.log(sum);
  //     this.fillItens();
  //   }, 1000);
  // }
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

    this.setState({ somaAcabamento: sum });
    setTimeout(() => {
      sessionStorage.setItem("padraoacabamento", this.state.somaAcabamento);
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
    this.setState({
      somaAcabamento: sessionStorage.getItem("padraoacabamento")
    });
    // this.setState({ total: sessionStorage.getItem("total") });
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

  salvarDadosLocalVoltar(e) {
    e.preventDefault();
    sessionStorage.setItem("padraoacabamento", this.state.somaAcabamento);
    browserHistory.push("/infraestrutura");
  }
  gerarTotal() {
    let soma = parseInt(sessionStorage.getItem("edificacoes")) || 0; // 50  48
    soma += parseInt(sessionStorage.getItem("infraestrutura")) || 0; // 0 0
    soma += parseInt(sessionStorage.getItem("padraoacabamento")) || 0; // 0 0
    sessionStorage.setItem("total", soma); // 50  48
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
    sessionStorage.setItem(e.target.name, JSON.stringify(itemValor));
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
    sessionStorage.setItem(e.target.name, JSON.stringify(itemValor));
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
    sessionStorage.setItem(e.target.name, JSON.stringify(itemValor));
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
    sessionStorage.setItem(e.target.name, JSON.stringify(itemValor));
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
    sessionStorage.setItem(e.target.name, JSON.stringify(itemValor));
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
    sessionStorage.setItem(e.target.name, JSON.stringify(itemValor));
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
    sessionStorage.setItem(e.target.name, JSON.stringify(itemValor));
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
    sessionStorage.setItem(e.target.name, JSON.stringify(itemValor));
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
    sessionStorage.setItem(e.target.name, JSON.stringify(itemValor));
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
    sessionStorage.setItem(e.target.name, JSON.stringify(itemValor));
  }

  // mudarItem1(e) {
  //   let value = parseInt(e.target.value);
  //   let resultado = this.state.somaAcabamento;
  //   let item1 = this.state.item1;
  //   let itemValor = [];
  //   let aux = 0;

  //   if (e.target.checked === true) {
  //     if (sessionStorage.getItem(e.target.name) === null) {
  //       itemValor = [{ id: e.target.id, value }];
  //     } else {
  //       itemValor = JSON.parse(sessionStorage.getItem(e.target.name));
  //       itemValor.push({ id: e.target.id, value });
  //     }
  //   } else {
  //     itemValor = JSON.parse(sessionStorage.getItem(e.target.name));
  //     aux = itemValor.findIndex(item => {
  //       return item.id == e.target.id;
  //     });
  //     itemValor.splice(aux, 1);
  //   }
  //   sessionStorage.setItem(e.target.name, JSON.stringify(itemValor));

  //   itemValor = JSON.parse(sessionStorage.getItem(e.target.name));
  //   console.log(itemValor);

  //   for (let item in itemValor) {
  //     resultado += parseInt(item.value);
  //     // return totalItens;
  //   }
  //   console.log(resultado);

  //   if (item1 !== value) {
  //     resultado -= item1;
  //     resultado += value;
  //   }
  //   this.setState({ item1: value });

  //   this.setState({ somaAcabamento: resultado });

  //   setTimeout(() => {
  //     console.log(this.state.somaAcabamento);
  //   }, 1000);
  // }

  // mudarItem2(e) {
  //   let value = parseInt(e.target.value);
  //   let resultado = this.state.somaAcabamento;
  //   let item2 = this.state.item2;
  //   let itemValor = [];
  //   let aux = 0;

  //   if (e.target.checked === true) {
  //     if (sessionStorage.getItem(e.target.name) === null) {
  //       itemValor = [{ id: e.target.id, value }];
  //     } else {
  //       itemValor = JSON.parse(sessionStorage.getItem(e.target.name));
  //       itemValor.push({ id: e.target.id, value });
  //     }
  //   } else {
  //     itemValor = JSON.parse(sessionStorage.getItem(e.target.name));
  //     aux = itemValor.findIndex(item => {
  //       return item.id == e.target.id;
  //     });
  //     itemValor.splice(aux, 1);
  //   }
  //   sessionStorage.setItem(e.target.name, JSON.stringify(itemValor));

  //   itemValor = JSON.parse(sessionStorage.getItem(e.target.name));
  //   console.log(itemValor);

  //   for (let item in itemValor) {
  //     resultado += parseInt(item.value);
  //     // return totalItens;
  //   }
  //   console.log(resultado);

  //   if (item2 !== value) {
  //     resultado -= item2;
  //     resultado += value;
  //   }
  //   this.setState({ item2: value });

  //   this.setState({ somaAcabamento: resultado });

  //   setTimeout(() => {
  //     console.log(this.state.somaAcabamento);
  //   }, 1000);
  // }

  // mudarItem3(e) {
  //   let value = parseInt(e.target.value);
  //   let resultado = this.state.somaAcabamento;
  //   let item3 = this.state.item3;
  //   let itemValor = [];
  //   let aux = 0;

  //   if (e.target.checked === true) {
  //     if (sessionStorage.getItem(e.target.name) === null) {
  //       itemValor = [{ id: e.target.id, value }];
  //     } else {
  //       itemValor = JSON.parse(sessionStorage.getItem(e.target.name));
  //       itemValor.push({ id: e.target.id, value });
  //     }
  //   } else {
  //     itemValor = JSON.parse(sessionStorage.getItem(e.target.name));
  //     aux = itemValor.findIndex(item => {
  //       return item.id == e.target.id;
  //     });
  //     itemValor.splice(aux, 1);
  //   }
  //   sessionStorage.setItem(e.target.name, JSON.stringify(itemValor));

  //   itemValor = JSON.parse(sessionStorage.getItem(e.target.name));
  //   console.log(itemValor);

  //   for (let item in itemValor) {
  //     resultado += parseInt(item.value);
  //     // return totalItens;
  //   }
  //   console.log(resultado);

  //   if (item3 !== value) {
  //     resultado -= item3;
  //     resultado += value;
  //   }
  //   this.setState({ item3: value });

  //   this.setState({ somaAcabamento: resultado });

  //   setTimeout(() => {
  //     console.log(this.state.somaAcabamento);
  //   }, 1000);
  // }

  // mudarItem4(e) {
  //   let value = parseInt(e.target.value);
  //   let resultado = this.state.somaAcabamento;
  //   let item4 = this.state.item4;
  //   let itemValor = [];
  //   let aux = 0;

  //   if (e.target.checked === true) {
  //     if (sessionStorage.getItem(e.target.name) === null) {
  //       itemValor = [{ id: e.target.id, value }];
  //     } else {
  //       itemValor = JSON.parse(sessionStorage.getItem(e.target.name));
  //       itemValor.push({ id: e.target.id, value });
  //     }
  //   } else {
  //     itemValor = JSON.parse(sessionStorage.getItem(e.target.name));
  //     aux = itemValor.findIndex(item => {
  //       return item.id == e.target.id;
  //     });
  //     itemValor.splice(aux, 1);
  //   }
  //   sessionStorage.setItem(e.target.name, JSON.stringify(itemValor));

  //   itemValor = JSON.parse(sessionStorage.getItem(e.target.name));
  //   console.log(itemValor);

  //   for (let item in itemValor) {
  //     resultado += parseInt(item.value);
  //     // return totalItens;
  //   }
  //   console.log(resultado);

  //   if (item4 !== value) {
  //     resultado -= item4;
  //     resultado += value;
  //   }
  //   this.setState({ item4: value });

  //   this.setState({ somaAcabamento: resultado });

  //   setTimeout(() => {
  //     console.log(this.state.somaAcabamento);
  //   }, 1000);
  // }

  // mudarItem5(e) {
  //   let value = parseInt(e.target.value);
  //   let resultado = this.state.somaAcabamento;
  //   let item5 = this.state.item5;
  //   let itemValor = [];
  //   let aux = 0;

  //   if (e.target.checked === true) {
  //     if (sessionStorage.getItem(e.target.name) === null) {
  //       itemValor = [{ id: e.target.id, value }];
  //     } else {
  //       itemValor = JSON.parse(sessionStorage.getItem(e.target.name));
  //       itemValor.push({ id: e.target.id, value });
  //     }
  //   } else {
  //     itemValor = JSON.parse(sessionStorage.getItem(e.target.name));
  //     aux = itemValor.findIndex(item => {
  //       return item.id == e.target.id;
  //     });
  //     itemValor.splice(aux, 1);
  //   }
  //   sessionStorage.setItem(e.target.name, JSON.stringify(itemValor));

  //   itemValor = JSON.parse(sessionStorage.getItem(e.target.name));
  //   console.log(itemValor);

  //   for (let item in itemValor) {
  //     resultado += parseInt(item.value);
  //     // return totalItens;
  //   }
  //   console.log(resultado);

  //   if (item5 !== value) {
  //     resultado -= item5;
  //     resultado += value;
  //   }
  //   this.setState({ item5: value });

  //   this.setState({ somaAcabamento: resultado });

  //   setTimeout(() => {
  //     console.log(this.state.somaAcabamento);
  //   }, 1000);
  // }

  // mudarItem6(e) {
  //   let value = parseInt(e.target.value);
  //   let resultado = this.state.somaAcabamento;
  //   let item6 = this.state.item6;
  //   let itemValor = [];
  //   let aux = 0;

  //   if (e.target.checked === true) {
  //     if (sessionStorage.getItem(e.target.name) === null) {
  //       itemValor = [{ id: e.target.id, value }];
  //     } else {
  //       itemValor = JSON.parse(sessionStorage.getItem(e.target.name));
  //       itemValor.push({ id: e.target.id, value });
  //     }
  //   } else {
  //     itemValor = JSON.parse(sessionStorage.getItem(e.target.name));
  //     aux = itemValor.findIndex(item => {
  //       return item.id == e.target.id;
  //     });
  //     itemValor.splice(aux, 1);
  //   }
  //   sessionStorage.setItem(e.target.name, JSON.stringify(itemValor));

  //   itemValor = JSON.parse(sessionStorage.getItem(e.target.name));
  //   console.log(itemValor);

  //   for (let item in itemValor) {
  //     resultado += parseInt(item.value);
  //     // return totalItens;
  //   }
  //   console.log(resultado);

  //   if (item6 !== value) {
  //     resultado -= item6;
  //     resultado += value;
  //   }
  //   this.setState({ item6: value });

  //   this.setState({ somaAcabamento: resultado });

  //   setTimeout(() => {
  //     console.log(this.state.somaAcabamento);
  //   }, 1000);
  // }

  // mudarItem7(e) {
  //   let value = parseInt(e.target.value);
  //   let resultado = this.state.somaAcabamento;
  //   let item7 = this.state.item7;
  //   let itemValor = [];
  //   let aux = 0;

  //   if (e.target.checked === true) {
  //     if (sessionStorage.getItem(e.target.name) === null) {
  //       itemValor = [{ id: e.target.id, value }];
  //     } else {
  //       itemValor = JSON.parse(sessionStorage.getItem(e.target.name));
  //       itemValor.push({ id: e.target.id, value });
  //     }
  //   } else {
  //     itemValor = JSON.parse(sessionStorage.getItem(e.target.name));
  //     aux = itemValor.findIndex(item => {
  //       return item.id == e.target.id;
  //     });
  //     itemValor.splice(aux, 1);
  //   }
  //   sessionStorage.setItem(e.target.name, JSON.stringify(itemValor));

  //   itemValor = JSON.parse(sessionStorage.getItem(e.target.name));
  //   console.log(itemValor);

  //   for (let item in itemValor) {
  //     resultado += parseInt(item.value);
  //     // return totalItens;
  //   }
  //   console.log(resultado);

  //   if (item7 !== value) {
  //     resultado -= item7;
  //     resultado += value;
  //   }
  //   this.setState({ item7: value });

  //   this.setState({ somaAcabamento: resultado });

  //   setTimeout(() => {
  //     console.log(this.state.somaAcabamento);
  //   }, 1000);
  // }

  // mudarItem8(e) {
  //   let value = parseInt(e.target.value);
  //   let resultado = this.state.somaAcabamento;
  //   let item8 = this.state.item8;
  //   let itemValor = [];
  //   let aux = 0;

  //   if (e.target.checked === true) {
  //     if (sessionStorage.getItem(e.target.name) === null) {
  //       itemValor = [{ id: e.target.id, value }];
  //     } else {
  //       itemValor = JSON.parse(sessionStorage.getItem(e.target.name));
  //       itemValor.push({ id: e.target.id, value });
  //     }
  //   } else {
  //     itemValor = JSON.parse(sessionStorage.getItem(e.target.name));
  //     aux = itemValor.findIndex(item => {
  //       return item.id == e.target.id;
  //     });
  //     itemValor.splice(aux, 1);
  //   }
  //   sessionStorage.setItem(e.target.name, JSON.stringify(itemValor));

  //   itemValor = JSON.parse(sessionStorage.getItem(e.target.name));
  //   console.log(itemValor);

  //   for (let item in itemValor) {
  //     resultado += parseInt(item.value);
  //     // return totalItens;
  //   }
  //   console.log(resultado);

  //   if (item8 !== value) {
  //     resultado -= item8;
  //     resultado += value;
  //   }
  //   this.setState({ item8: value });

  //   this.setState({ somaAcabamento: resultado });

  //   setTimeout(() => {
  //     console.log(this.state.somaAcabamento);
  //   }, 1000);
  // }

  // mudarItem9(e) {
  //   let value = parseInt(e.target.value);
  //   let resultado = this.state.somaAcabamento;
  //   let item9 = this.state.item9;
  //   let itemValor = [];
  //   let aux = 0;

  //   if (e.target.checked === true) {
  //     if (sessionStorage.getItem(e.target.name) === null) {
  //       itemValor = [{ id: e.target.id, value }];
  //     } else {
  //       itemValor = JSON.parse(sessionStorage.getItem(e.target.name));
  //       itemValor.push({ id: e.target.id, value });
  //     }
  //   } else {
  //     itemValor = JSON.parse(sessionStorage.getItem(e.target.name));
  //     aux = itemValor.findIndex(item => {
  //       return item.id == e.target.id;
  //     });
  //     itemValor.splice(aux, 1);
  //   }
  //   sessionStorage.setItem(e.target.name, JSON.stringify(itemValor));

  //   itemValor = JSON.parse(sessionStorage.getItem(e.target.name));
  //   console.log(itemValor);

  //   for (let item in itemValor) {
  //     resultado += parseInt(item.value);
  //     // return totalItens;
  //   }
  //   console.log(resultado);

  //   if (item9 !== value) {
  //     resultado -= item9;
  //     resultado += value;
  //   }
  //   this.setState({ item9: value });

  //   this.setState({ somaAcabamento: resultado });

  //   setTimeout(() => {
  //     console.log(this.state.somaAcabamento);
  //   }, 1000);
  // }

  // mudarItem10(e) {
  //   let value = parseInt(e.target.value);
  //   let resultado = this.state.somaAcabamento;
  //   let item10 = this.state.item10;
  //   let itemValor = [];
  //   let aux = 0;

  //   if (e.target.checked === true) {
  //     if (sessionStorage.getItem(e.target.name) === null) {
  //       itemValor = [{ id: e.target.id, value }];
  //     } else {
  //       itemValor = JSON.parse(sessionStorage.getItem(e.target.name));
  //       itemValor.push({ id: e.target.id, value });
  //     }
  //   } else {
  //     itemValor = JSON.parse(sessionStorage.getItem(e.target.name));
  //     aux = itemValor.findIndex(item => {
  //       return item.id == e.target.id;
  //     });
  //     itemValor.splice(aux, 1);
  //   }
  //   sessionStorage.setItem(e.target.name, JSON.stringify(itemValor));

  //   itemValor = JSON.parse(sessionStorage.getItem(e.target.name));
  //   console.log(itemValor);

  //   for (let item of itemValor) {
  //     console.log("..", item);
  //     resultado += parseInt(item.value);
  //     // return totalItens;
  //   }
  //   console.log(resultado);

  //   if (item10 !== value) {
  //     resultado -= item10;
  //     resultado += value;
  //   }
  //   this.setState({ item10: value });

  //   this.setState({ somaAcabamento: resultado });

  //   setTimeout(() => {
  //     console.log(this.state.somaAcabamento);
  //   }, 1000);
  // }

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
          <div className="col-2  regular">
            <input
              type="radio"
              value="4"
              onClick={e => this.mudarItem1(e)}
              name="revestimento-piso-rd"
              id="4000-A-piso"
            />
            <span className="barlow-regular"> 4000 A </span>
            {/* teste */}
            <DropDown></DropDown>
            {/* teste */}
          </div>
          <div className="col-2  regular">
            <input
              type="radio"
              value="5"
              onClick={e => this.mudarItem1(e)}
              name="revestimento-piso-rd"
              id="4000-B-piso"
            />
            <span className="barlow-regular"> 4000 B</span>
          </div>
          <div className="col-2  regular">
            <input
              type="radio"
              value="6"
              onClick={e => this.mudarItem1(e)}
              name="revestimento-piso-rd"
              id="4000-C-piso"
            />
            <span className="barlow-regular"> 4000 C</span>
          </div>
          <div className="col-1  regular">
            <input
              type="radio"
              value="7"
              onClick={e => this.mudarItem1(e)}
              name="revestimento-piso-rd"
              id="4000-FLEX-piso"
            />{" "}
            <span className="barlow-regular"> 4000 FLEX</span>
          </div>
          <div className="col-1  regular">
            <input
              type="radio"
              value="8"
              onClick={e => this.mudarItem1(e)}
              name="revestimento-piso-rd"
              id="5000-piso"
            />{" "}
            <span className="barlow-regular"> 5000</span>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular">R$ {this.state.item1}</span>
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
            <span className="barlow-regular"> 4000 A</span>
          </div>
          <div className="col-2  regular">
            <input
              name="revestimento-parede-rd"
              type="radio"
              value="5"
              onClick={e => this.mudarItem2(e)}
              id="4000-B-parede"
            />
            <span className="barlow-regular"> 4000 B</span>
          </div>
          <div className="col-2  regular">
            <input
              name="revestimento-parede-rd"
              type="radio"
              value="6"
              onClick={e => this.mudarItem2(e)}
              id="4000-C-parede"
            />
            <span className="barlow-regular"> 4000 C</span>
          </div>
          <div className="col-1  regular">
            <input
              name="revestimento-parede-rd"
              type="radio"
              value="7"
              onClick={e => this.mudarItem2(e)}
              id="4000-FLEX-parede"
            />
            <span className="barlow-regular"> 4000 FLEX</span>
          </div>
          <div className="col-1  regular">
            <input
              name="revestimento-parede-rd"
              type="radio"
              value="8"
              onClick={e => this.mudarItem2(e)}
              id="5000-parede"
            />
            <span className="barlow-regular"> 5000 </span>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular"> R$ {this.state.item2}</span>
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
            <span className="barlow-regular"> 4000 A</span>
          </div>
          <div className="col-2  regular">
            <input
              name="forro-rd"
              type="radio"
              value="5"
              onClick={e => this.mudarItem3(e)}
              id="4000-B-forro"
            />
            <span className="barlow-regular"> 4000 B</span>
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
            <span className="barlow-regular"> 4000 C</span>
          </div>

          <div className="col-1  regular">
            <input
              name="forro-rd"
              type="radio"
              value="5"
              onClick={e => this.mudarItem3(e)}
              id="4000-FLEX-forro"
            />
            <span className="barlow-regular"> 4000 FLEX</span>
          </div>
          <div className="col-1  regular">
            <input
              name="forro-rd"
              type="radio"
              value="6"
              onClick={e => this.mudarItem3(e)}
              id="5000-forro"
            />
            <span className="barlow-regular"> 5000 </span>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular"> R$ {this.state.item3}</span>
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
            <span className="barlow-regular"> sim</span>
          </div>
          <div className="col-2  regular">
            <input
              name="caixilhos-rd"
              type="radio"
              value="0"
              id="nao-caixilhos"
              onClick={e => this.mudarItem4(e)}
            />{" "}
            <span className="barlow-regular"> não</span>
          </div>
          <div className="col-2  regular"></div>
          <div className="col-1  regular"></div>
          <div className="col-1  regular"></div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular"> R$ {this.state.item4}</span>
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
            <span className="barlow-regular"> metálico 3000</span>
          </div>
          <div className="col-2  regular">
            <input
              name="painel-bdn-rdo"
              type="radio"
              value="5"
              onClick={e => this.mudarItem5(e)}
              id="metalico-4000-painel"
            />{" "}
            <span className="barlow-regular"> metálico 4000</span>
          </div>
          <div className="col-2  regular">
            <input
              name="painel-bdn-rdo"
              type="radio"
              value="6"
              onClick={e => this.mudarItem5(e)}
              id="metalico-5000-painel"
            />{" "}
            <span className="barlow-regular"> 5000</span>
          </div>
          <div className="col-2  regular">
            <input
              name="painel-bdn-rdo"
              type="radio"
              value="7"
              onClick={e => this.mudarItem5(e)}
              id="metalico-drywall-painel"
            />{" "}
            <span className="barlow-regular"> drywall</span>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular"> R$ {this.state.item5}</span>
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
            <span className="barlow-regular"> 4000</span>
          </div>
          <div className="col-2  regular">
            <input
              name="mobiliario-rdo"
              type="radio"
              value="5"
              onClick={e => this.mudarItem6(e)}
              id="5000-mobiliario"
            />{" "}
            <span className="barlow-regular"> 5000</span>
          </div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular"></div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular"> R$ {this.state.item6}</span>
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
            <span className="barlow-regular"> 4000 A</span>
          </div>
          <div className="col-2  regular">
            <input
              name="persianas-rd"
              type="radio"
              value="5"
              onClick={e => this.mudarItem7(e)}
              id="4000-B-distribuicao"
            />{" "}
            <span className="barlow-regular"> 4000 B</span>
          </div>
          <div className="col-2  regular">
            <input
              name="persianas-rd"
              type="radio"
              value="6"
              onClick={e => this.mudarItem7(e)}
              id="4000-C-distribuicao"
            />{" "}
            <span className="barlow-regular"> 4000 C</span>
          </div>
          <div className="col-1  regular">
            <input
              name="persianas-rd"
              type="radio"
              value="7"
              onClick={e => this.mudarItem7(e)}
              id="4000-FLEX-distribuicao"
            />{" "}
            <span className="barlow-regular"> 4000 FLEX</span>
          </div>
          <div className="col-1  regular">
            <input
              name="persianas-rd"
              type="radio"
              value="8"
              onClick={e => this.mudarItem7(e)}
              id="5000-distribuicao"
            />{" "}
            <span className="barlow-regular"> 5000</span>
          </div>
          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular"> R$ {this.state.item7}</span>
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
            <span className="barlow-regular"> alvenarias</span>
          </div>
          <div className="col-2  regular">
            <input
              name="vedacoes-internas-rd"
              type="radio"
              value="5"
              onClick={e => this.mudarItem8(e)}
              id="drywall-vedacoes"
            />{" "}
            <span className="barlow-regular"> drywall</span>
          </div>
          <div className="col-2  regular">
            <input
              name="vedacoes-internas-rd"
              type="radio"
              value="5"
              onClick={e => this.mudarItem8(e)}
              id="unificacao-vedacoes"
            />{" "}
            <span className="barlow-regular"> unificação</span>
          </div>
          <div className="col-2  regular"></div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular"> R$ {this.state.item8}</span>
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
            <span className="barlow-regular"> 4000 A</span>
          </div>
          <div className="col-2  regular">
            <input
              name="fachada-rd"
              type="radio"
              value="5"
              onClick={e => this.mudarItem9(e)}
              id="4000-B-fachada"
            />{" "}
            <span className="barlow-regular"> 4000 B</span>
          </div>
          <div className="col-2  regular">
            <input
              name="fachada-rd"
              type="radio"
              value="6"
              onClick={e => this.mudarItem9(e)}
              id="4000-C-fachada"
            />{" "}
            <span className="barlow-regular"> 4000 C</span>
          </div>
          <div className="col-1  regular">
            <input
              name="fachada-rd"
              type="radio"
              value="7"
              onClick={e => this.mudarItem9(e)}
              id="4000-FLEX-fachada"
            />{" "}
            <span className="barlow-regular"> 4000 FLEX</span>
          </div>
          <div className="col-1  regular">
            <input
              name="fachada-rd"
              type="radio"
              value="8"
              onClick={e => this.mudarItem9(e)}
              id="5000-A-fachada"
            />{" "}
            <span className="barlow-regular"> 5000</span>
          </div>

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular"> R$ {this.state.item9}</span>
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
            <span className="barlow-regular"> letreiro</span>
          </div>
          <div className="col-2  regular">
            <input
              name="comunicacao-visual-rd"
              type="radio"
              value="5"
              onClick={e => this.mudarItem10(e)}
              id="totem-comunicacao"
            />{" "}
            <span className="barlow-regular"> totem</span>
          </div>
          <div className="col-2  regular">
            <input
              name="comunicacao-visual-rd"
              type="radio"
              value="6"
              onClick={e => this.mudarItem10(e)}
              id="medalhao-comunicacao"
            />{" "}
            <span className="barlow-regular"> medalhão</span>
          </div>
          <div className="col-2  regular">
            <input
              name="comunicacao-visual-rd"
              type="radio"
              value="7"
              onClick={e => this.mudarItem10(e)}
              id="bandeira-comunicacao"
            />{" "}
            <span className="barlow-regular"> bandeira</span>
          </div>
          {/* <div className="col-1  regular">
            <input
              name="comunicacao-visual-rd"
              type="checkbox"
              value="7"
              onClick={e => this.mudarItem10(e)}
              id="todos-comunicacao"
            />{" "}
            <span className="barlow-regular"> todos</span>
          </div> */}

          <div className="col-2  regular menu-resumo">
            {" "}
            <span className="barlow-regular"> R$ {this.state.item10}</span>
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
