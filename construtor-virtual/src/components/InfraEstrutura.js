import React, { Component } from "react";
import { Link } from "react-router";
import $ from "jquery";

import "../css/rodape.css";
import "../css/edificacoes.css";

import IconeUm from "../Assets/icons/icon_1.svg";
import IconeDois from "../Assets/icons/icon_2.svg";
import IconeTres from "../Assets/icons/icon_3.svg";
import IconeRefresh from "../Assets/icons/icon_refresh.svg";
import IconeVoltar from "../Assets/icons/icon_voltar.svg";
import IconeContinuar from "../Assets/icons/icon_avancar.svg";

import MetodoLogo from "../Assets/icons/logo_mtdtech.svg";

export default class InfraEstrutura extends Component {
  render() {
    return (
      <div className="">
        <div className="row">
          <div className="col-3 ">
            <img className="logo-metodo" src={MetodoLogo}></img>
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

          <div className="col-2  barlow-bold itens-titulos">climatização</div>
          <div className="col-2  regular">
            <input type="radio" name="terraplanagem-rd" />
            <span className="barlow-semibold"></span> central
          </div>
          <div className="col-2  regular">
            <input type="radio" name="terraplanagem-rd" />
            <span className="barlow-semibold"></span> split
          </div>
          <div className="col-2  regular">
            <input type="radio" name="terraplanagem-rd" />
            <span className="barlow-semibold"></span> misto
          </div>
          <div className="col-1  regular"></div>
          <div className="col-1  regular"></div>

          <div className="col-2  regular menu-resumo">R$ XXXXXX</div>

          <div className="col-2  barlow-bold itens-titulos">elétrica comum</div>
          <div className="col-2  regular">
            <input name="demolicao" type="radio" />
            <span className=""> 4000 A</span>
          </div>
          <div className="col-2  regular">
            <input name="demolicao" type="radio" />
            <span className="barlow-semibold"></span> 4000 B
          </div>
          <div className="col-2  regular">
            <input name="demolicao" type="radio" /> 4000 C
          </div>
          <div className="col-1  regular">
            <input name="demolicao" type="radio" />
            4000 FLEX
          </div>
          <div className="col-1  regular">
            <input name="demolicao" type="radio" />
            5000
          </div>

          <div className="col-2  regular menu-resumo">R$ XXXXXX</div>

          <div className="col-2  barlow-bold itens-titulos">rede lógica</div>
          <div className="col-2  regular">
            <input name="fundacao" type="radio" />
            <span className="barlow-semibold"></span> cabeamento
          </div>
          <div className="col-2  regular">
            <input name="fundacao" type="radio" />
            <span className="barlow-semibold"></span> wi-fi
          </div>
          <div className="col-2 "></div>

          <div className="col-2  regular"></div>
          <div className="col-2  regular menu-resumo">R$ XXXXXX</div>

          <div className="col-2  barlow-bold itens-titulos">
            distribuição elétrica
          </div>
          <div className="col-2  regular">
            <input name="estruturas" type="radio" /> 4000 A
          </div>
          <div className="col-2  regular">
            <input name="estruturas" type="radio" /> 4000 B
          </div>
          <div className="col-2  regular">
            <input name="estruturas" type="radio" /> 4000 C
          </div>
          <div className="col-1  regular">
            <input name="estruturas" type="radio" /> 4000 FLEX
          </div>
          <div className="col-1  regular">
            <input name="estruturas" type="radio" /> 5000
          </div>

          <div className="col-2  regular menu-resumo">R$ XXXXXX</div>

          <div className="col-2  barlow-bold itens-titulos">telefonia</div>
          <div className="col-2  regular">
            <input name="escadas" type="radio" /> 4000 A
          </div>
          <div className="col-2  regular">
            <input name="escadas" type="radio" /> 4000 B
          </div>
          <div className="col-2  regular">
            <input name="escadas" type="radio" /> 4000 C
          </div>
          <div className="col-1  regular">
            <input name="escadas" type="radio" /> 4000 FLEX
          </div>
          <div className="col-1  regular">
            <input name="escadas" type="radio" /> 5000
          </div>

          <div className="col-2  regular menu-resumo"> R$ XXXXXX</div>

          <div className="col-2  barlow-bold itens-titulos">iluminação</div>
          <div className="col-2  regular">
            <input name="cobertura" type="radio" /> 4000 A
          </div>
          <div className="col-2  regular">
            <input name="cobertura" type="radio" /> 4000 B
          </div>
          <div className="col-2  regular">
            <input name="cobertura" type="radio" /> 4000 C
          </div>
          <div className="col-1  regular">
            <input name="cobertura" type="radio" /> 4000 FLEX
          </div>
          <div className="col-1  regular">
            <input name="cobertura" type="radio" /> 5000
          </div>
          <div className="col-2  regular menu-resumo"> R$ XXXXXX</div>

          <div className="col-2  barlow-bold itens-titulos">
            entrada de energia
          </div>
          <div className="col-2  regular">
            <input name="estacionamento" type="radio" /> acréscimo de carga
          </div>
          <div className="col-2  regular">
            <input name="estacionamento" type="radio" /> substituição de quadros
          </div>
          <div className="col-2  regular">
            <input name="entrada-energia" type="radio" /> unificação
          </div>
          <div className="col-2  regular">
            {" "}
            <input name="entrada-energia" type="radio" /> desmembrar entrada
          </div>

          <div className="col-2  regular menu-resumo">R$ XXXXXX</div>

          <div className="col-2  barlow-bold itens-titulos">bombeiros</div>
          <div className="col-2  regular">
            <input name="passeio" type="radio" /> hidrante
          </div>
          <div className="col-2  regular">
            <input name="passeio" type="radio" /> sprinkler
          </div>
          <div className="col-2  regular">
            <input name="passeio" type="radio" /> extintores
          </div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular menu-resumo"> R$ XXXXXX</div>

          <div className="col-10 espacamento "></div>
          <div className="col-2 espacamento  menu-resumo"></div>

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
              <Link to="/reforma">
                <div>
                  <img className="tamanho-icone" src={IconeVoltar} />
                </div>
              </Link>
              voltar
            </div>

            <div className="box-rodape-icone3">
              <Link to="/padraoacabamento">
                <div>
                  <img className="tamanho-icone" src={IconeContinuar} />
                </div>
              </Link>
              prosseguir
            </div>

            <div className="box-rodape-palavras">
              <div className="metro-quadrado barlow-bold ">total m²</div>
              <div className="resultado barlow-bold ">R$ XXXXXXX</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
