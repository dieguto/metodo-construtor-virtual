import React, { Component } from "react";
import { Link, browserHistory } from "react-router";

// import { Container } from './styles';

import "../css/rodape.css";
import "../css/edificacoes.css";
import "../css/resultado.css";

import IconeUm from "../Assets/icons/icon_1.svg";
import IconeDois from "../Assets/icons/icon_2.svg";
import IconeTres from "../Assets/icons/icon_3.svg";
import IconeRefresh from "../Assets/icons/icon_refresh.svg";
import IconeVoltar from "../Assets/icons/icon_voltar.svg";

import MetodoLogo from "../Assets/icons/logo_mtdtech.svg";

export default class Resultado extends Component {
  componentDidMount() {
    var total = sessionStorage.getItem("total");
    var edificacoes = sessionStorage.getItem("edificacoes");
    var infra = sessionStorage.getItem("infraestrutura");
  }

  resetarStorage() {
    sessionStorage.clear();
    localStorage.clear();
    browserHistory.push("/");
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
          <div className="col-2 ">
            <h2 className="barlow-extrabold branco-metodo construir-titulo">
              construir
            </h2>
          </div>

          <div className="col-1 "></div>
          <div className="col-11 "></div>

          <div className="col-2 "></div>
          <div className="col-4 "></div>
          <div className="col-4 ">
            <div className="imagem-transitoria"></div>
          </div>
          <div className="col-2 "></div>

          <div className="col-1 "></div>
          <div className="col-11 ">
            <h3 className="barlow-extrabold acinzentado-metodo">final</h3>
          </div>
          <div className="col-1 "></div>
          <div className="col-11 "></div>
          <div className="col-1 "></div>
          <div className="col-11 ">
            <h2 className="barlow-extrabold cor-padrao-metodo total">
              total m²
            </h2>
          </div>
          <div className="col-1 "></div>
          <div className="col-11 "></div>
          <div className="col-1 "></div>
          <div className="col-4 ">
            <h1 className="barlow-extrabold cor-padrao-metodo resultado-final">
              R$ {sessionStorage.getItem("total")}
            </h1>
          </div>
          <div className="col-7 "></div>

          <div className="col-1 "></div>
          <div className="col-2  empurrar">
            <h2 className="barlow-extrabold cor-padrao-metodo">
              R$ {sessionStorage.getItem("edificacoes")}
            </h2>
            <span className="barlow-extrabold acinzentado-metodo fonte-resultado ">
              edificações
            </span>
          </div>
          <div className="col-2  empurrar">
            <h2 className="barlow-extrabold cor-padrao-metodo">
              R$ {sessionStorage.getItem("infraestrutura")}
            </h2>
            <span className="barlow-extrabold acinzentado-metodo fonte-resultado ">
              infra estrutura
            </span>
          </div>

          <div className="col-7  empurrar"></div>

          <div className="col-1  espaco"></div>
          <div className="col-4 "></div>
          <div className="col-7  "></div>

          <div className="col-1 "></div>
          <div className="col-2 ">
            <h2 className="barlow-extrabold cor-padrao-metodo">
              R$ {sessionStorage.getItem("padraoacabamento")}
            </h2>
            <span className="barlow-extrabold acinzentado-metodo fonte-resultado ">
              padrão de acabamento
            </span>
          </div>
          <div className="col-2 ">
            <h2 className="barlow-extrabold cor-padrao-metodo">700 m²</h2>
            <span className="barlow-extrabold acinzentado-metodo fonte-resultado ">
              m² de obra
            </span>
          </div>

          <div className="col-7 "></div>

          <div className="col-1 "></div>
          <div className="col-2 ">
            <span className="barlow acinzentado-metodo">
              <input className="btn" type="button" value="enviar por e-mail" />
            </span>
          </div>
          <div className="col-9 ">
            <span className="barlow acinzentado-metodo">
              <input className="btn" type="button" value="fazer o download" />
            </span>
          </div>

          {/* Rodape */}

          <div className="div-rodape">
            <div className=" box-rodape-icone">
              <div className="">
                <img
                  className=" float-left tamanho-icone"
                  alt="icone numero um"
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
                  alt="icone numero dois"
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
                  alt="icone numero três"
                  src={IconeTres}
                />
              </div>
              <div className="fonte-footer-pag ">
                <span className="texto-rodape barlow-padrao black">
                  padrão de acabamento
                </span>
              </div>
            </div>

            <div className="box-rodape-icone2">
              <Link to="/padraoacabamento">
                <div>
                  <img
                    className="tamanho-icone"
                    alt="icone voltar"
                    src={IconeVoltar}
                  />
                </div>
              </Link>
              voltar
            </div>

            <div className="box-rodape-icone3">
              <Link onClick={e => this.resetarStorage(e)} to="/">
                <div>
                  <img
                    className="tamanho-icone"
                    alt="icone reiniciar sistema"
                    src={IconeRefresh}
                  />
                </div>
              </Link>
              reiniciar
            </div>

            <div className="box-rodape-palavras">
              <div className="metro-quadrado barlow-bold "></div>
              <div className="resultado barlow-bold "></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
