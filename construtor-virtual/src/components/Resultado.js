import React, { Component } from "react";
import { Link } from "react-router";

// import { Container } from './styles';

import "../css/rodape.css";
import "../css/edificacoes.css";
import "../css/resultado.css";

import IconeUm from "../Assets/icons/icon_1.svg";
import IconeDois from "../Assets/icons/icon_2.svg";
import IconeTres from "../Assets/icons/icon_3.svg";
import IconeRefresh from "../Assets/icons/icon_refresh.svg";
import IconeVoltar from "../Assets/icons/icon_voltar.svg";
import IconeContinuar from "../Assets/icons/icon_avancar.svg";

import MetodoLogo from "../Assets/icons/logo_mtdtech.svg";

export default class Resultado extends Component {
  render() {
    return (
      <div className="">
        <div className="row">
          <div className="col-3 ">
            <img className="logo-metodo" src={MetodoLogo}></img>
          </div>
          <div className="col-9 ">
            <h2 className="barlow-extrabold acinzentado-metodo construir-titulo">
              construir
            </h2>
          </div>

          <div className="col-1 "></div>
          <div className="col-11 "></div>
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
              R$ XXXXXXXX
            </h1>
          </div>
          <div className="col-7 ">
            <h1 className="barlow-extrabold acinzentado-metodo"></h1>
          </div>

          <div className="col-1 ">
            <h2 className="barlow-extrabold acinzentado-metodo"></h2>
          </div>
          <div className="col-2  empurrar">
            <h2 className="barlow-extrabold cor-padrao-metodo">R$ XXXXXX</h2>
            <span className="barlow-extrabold acinzentado-metodo fonte-resultado ">
              edificações
            </span>
          </div>
          <div className="col-2  empurrar">
            <h2 className="barlow-extrabold cor-padrao-metodo">R$ XXXXXX</h2>
            <span className="barlow-extrabold acinzentado-metodo fonte-resultado ">
              infra estrutura
            </span>
          </div>

          <div className="col-7  empurrar"></div>

          <div className="col-1  espaco">
            <h2 className="barlow-extrabold acinzentado-metodo"></h2>
          </div>
          <div className="col-4 ">
            <h1 className="barlow-extrabold acinzentado-metodo"></h1>
          </div>
          <div className="col-7  ">
            <h1 className="barlow-extrabold acinzentado-metodo"></h1>
          </div>

          <div className="col-1 ">
            <h2 className="barlow-extrabold acinzentado-metodo"></h2>
          </div>
          <div className="col-2 ">
            <h2 className="barlow-extrabold cor-padrao-metodo">XXXXXX</h2>
            <span className="barlow-extrabold acinzentado-metodo fonte-resultado ">
              m² de obra
            </span>
          </div>
          <div className="col-2 ">
            <h2 className="barlow-extrabold cor-padrao-metodo">XXXXXX</h2>
            <span className="barlow-extrabold acinzentado-metodo fonte-resultado ">
              dias pra finalizar
            </span>
          </div>

          <div className="col-7 "></div>

          <div className="col-1 ">
            <h2 className="barlow-extrabold acinzentado-metodo"></h2>
          </div>
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
                <img className=" float-left tamanho-icone" src={IconeUm} />
              </div>
              <div className="fonte-footer-pag ">
                <span className="texto-rodape barlow">edificações</span>
              </div>
            </div>

            <div className=" box-rodape-icone">
              <div className="">
                <img className=" float-left tamanho-icone" src={IconeDois} />
              </div>
              <div className="fonte-footer-pag ">
                <span className="texto-rodape barlow">infraestrutura</span>
              </div>
            </div>

            {/* <div className="col-1  box-rodape-palavras"></div> */}
            <div className=" box-rodape-icone">
              <div className="">
                <img className=" float-left tamanho-icone" src={IconeTres} />
              </div>
              <div className="fonte-footer-pag ">
                <span className="texto-rodape barlow">
                  padrão de acabamento
                </span>
              </div>
            </div>

            <div className="box-rodape-icone2">
              <Link to="/padraoacabamento">
                <div>
                  <img className="tamanho-icone" src={IconeVoltar} />
                </div>
              </Link>
              voltar
            </div>

            <div className="box-rodape-icone3">
              <Link to="/">
                <div>
                  <img className="tamanho-icone" src={IconeRefresh} />
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
