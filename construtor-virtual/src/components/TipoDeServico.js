import React, { Component } from "react";
import { Link } from "react-router";
import "../css/fontes.css";
import "../css/bootstrap.min.css";
import "../css/pagina-inicial.css";

export default class TipoDeServico extends Component {
  render() {
    return (
      <div className="janela">
        <div className="row tamanho-caixa">
          <div className="col-6   background-btn1">
            <div className="col-12 box-esquerda">
              <div className="col-12 box-logo">
                <div className="caixa-logo "></div>
              </div>
              <div className="col-12 box-frase ">
                <div className="frase preto-metodo barlow-padrao">
                  o que você deseja fazer ?
                </div>
                <div className="urlsite barlow-light">www.metodo.com.br</div>
              </div>
            </div>
          </div>

          <div className="col-6 background-btn2">
            <div className="col-12 box-direita">
              <Link className="text-decoration-none" to="/construcao">
                <div className="col-12 box-construir">
                  <div className="icone-construir"></div>
                  <button className="btn-prosseguir1 preto-metodo barlow-padrao">
                    construir
                  </button>
                </div>
              </Link>

              <Link className="text-decoration-none" to="/reforma">
                <div className="col-12 box-reforma">
                  <button className="btn-prosseguir2 preto-metodo barlow-padrao">
                    reformar
                  </button>
                  <div className="icone-reformar"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
