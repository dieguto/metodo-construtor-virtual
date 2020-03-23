import React, { Component } from "react";
import { Link } from "react-router";
import "../css/fontes.css";
import "../css/bootstrap.min.css";
import "../css/pagina-inicial.css";

export default class TipoDeServico extends Component {
  render() {
    return (
      <div className="">
        <div className="row tamanho-caixa">
          <div className="col-6 border  background-btn1">
            <Link className="text-decoration-none" to="/construcao">
              <button className="btn-prosseguir1 preto-metodo barlow-padrao">
                construir
              </button>
            </Link>
          </div>
          <div className="col-6 border background-btn2">
            <Link className="text-decoration-none" to="/reforma">
              <button className="btn-prosseguir2 preto-metodo barlow-padrao">
                reformar
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
