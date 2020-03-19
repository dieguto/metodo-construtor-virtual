import React, { Component } from "react";
import { Link } from "react-router";

import "../css/rodape.css";
import "../css/edificacoes.css";

import IconeUm from "../Assets/icons/icon_1.svg";
import IconeBranco from "../Assets/icons/icon_2_branco.svg";
import IconeTres from "../Assets/icons/icon_3.svg";
import IconeVoltar from "../Assets/icons/icon_voltar.svg";
import IconeContinuar from "../Assets/icons/icon_avancar.svg";

import MetodoLogo from "../Assets/icons/logo_mtdtech.svg";

export default class InfraEstrutura extends Component {
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
            <input type="radio" name="climatizacao-rd" />
            <span className="barlow-semibold"></span> central
          </div>
          <div className="col-2  regular">
            <input type="radio" name="climatizacao-rd" />
            <span className="barlow-semibold"></span> split
          </div>
          <div className="col-2  regular">
            <input type="radio" name="climatizacao-rd" />
            <span className="barlow-semibold"></span> misto
          </div>
          <div className="col-1  regular"></div>
          <div className="col-1  regular"></div>

          <div className="col-2  regular menu-resumo">R$ XXXXXX</div>

          {/* ELÉTRICA COMUM */}

          <div className="col-2  barlow-bold itens-titulos">elétrica comum</div>
          <div className="col-2  regular">
            <input name="eletrica-rd" type="radio" />
            <span className=""> 4000 A</span>
          </div>
          <div className="col-2  regular">
            <input name="eletrica-rd" type="radio" />
            <span className="barlow-semibold"></span> 4000 B
          </div>
          <div className="col-2  regular">
            <input name="eletrica-rd" type="radio" /> 4000 C
          </div>
          <div className="col-1  regular">
            <input name="eletrica-rd" type="radio" />
            4000 FLEX
          </div>
          <div className="col-1  regular">
            <input name="eletrica-rd" type="radio" />
            5000
          </div>

          <div className="col-2  regular menu-resumo">R$ XXXXXX</div>

          {/* REDE LÓGICA */}

          <div className="col-2  barlow-bold itens-titulos">rede lógica</div>
          <div className="col-2  regular">
            <input name="rede-rd" type="radio" />
            <span className="barlow-semibold"></span> cabeamento
          </div>
          <div className="col-2  regular">
            <input name="rede-rd" type="radio" />
            <span className="barlow-semibold"></span> wi-fi
          </div>
          <div className="col-2 "></div>

          <div className="col-2  regular"></div>
          <div className="col-2  regular menu-resumo">R$ XXXXXX</div>

          {/* DISTRIBUIÇÃO ELÉTRICA */}

          <div className="col-2  barlow-bold itens-titulos">
            distribuição elétrica
          </div>
          <div className="col-2  regular">
            <input name="distribuica-rd" type="radio" /> 4000 A
          </div>
          <div className="col-2  regular">
            <input name="distribuica-rd" type="radio" /> 4000 B
          </div>
          <div className="col-2  regular">
            <input name="distribuica-rd" type="radio" /> 4000 C
          </div>
          <div className="col-1  regular">
            <input name="distribuica-rd" type="radio" /> 4000 FLEX
          </div>
          <div className="col-1  regular">
            <input name="distribuica-rd" type="radio" /> 5000
          </div>

          <div className="col-2  regular menu-resumo">R$ XXXXXX</div>

          {/* TELEFONIA */}

          <div className="col-2  barlow-bold itens-titulos">telefonia</div>
          <div className="col-2  regular">
            <input name="telefonia-rd" type="radio" /> 4000 A
          </div>
          <div className="col-2  regular">
            <input name="telefonia-rd" type="radio" /> 4000 B
          </div>
          <div className="col-2  regular">
            <input name="telefonia-rd" type="radio" /> 4000 C
          </div>
          <div className="col-1  regular">
            <input name="telefonia-rd" type="radio" /> 4000 FLEX
          </div>
          <div className="col-1  regular">
            <input name="telefonia-rd" type="radio" /> 5000
          </div>

          <div className="col-2  regular menu-resumo"> R$ XXXXXX</div>

          {/* ILUMINAÇÃO */}

          <div className="col-2  barlow-bold itens-titulos">iluminação</div>
          <div className="col-2  regular">
            <input name="iluminacao-rd" type="radio" /> 4000 A
          </div>
          <div className="col-2  regular">
            <input name="iluminacao-rd" type="radio" /> 4000 B
          </div>
          <div className="col-2  regular">
            <input name="iluminacao-rd" type="radio" /> 4000 C
          </div>
          <div className="col-1  regular">
            <input name="iluminacao-rd" type="radio" /> 4000 FLEX
          </div>
          <div className="col-1  regular">
            <input name="iluminacao-rd" type="radio" /> 5000
          </div>
          <div className="col-2  regular menu-resumo"> R$ XXXXXX</div>

          {/* ENTRADA DE ENERGIA */}

          <div className="col-2  barlow-bold itens-titulos">
            entrada de energia
          </div>
          <div className="col-2  regular">
            <input name="entrada-rd" type="radio" /> acréscimo de carga
          </div>
          <div className="col-2  regular">
            <input name="entrada-rd" type="radio" /> substituição de quadros
          </div>
          <div className="col-2  regular">
            <input name="entrada-rd" type="radio" /> unificação
          </div>
          <div className="col-2  regular">
            {" "}
            <input name="entrada-rd" type="radio" /> desmembrar entrada
          </div>

          <div className="col-2  regular menu-resumo">R$ XXXXXX</div>

          {/* BOMBEIROS */}

          <div className="col-2  barlow-bold itens-titulos">bombeiros</div>
          <div className="col-2  regular">
            <input name="bombeiros-rd" type="radio" /> hidrante
          </div>
          <div className="col-2  regular">
            <input name="bombeiros-rd" type="radio" /> sprinkler
          </div>
          <div className="col-2  regular">
            <input name="bombeiros-rd" type="radio" /> extintores
          </div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular menu-resumo"> R$ XXXXXX</div>

          {/* Rede Hidráulica */}

          <div className="col-2  barlow-bold itens-titulos">
            rede hidráulica
          </div>
          <div className="col-2  regular">
            <input name="hidraulica-rd" type="radio" /> unificação
          </div>
          <div className="col-2  regular">
            <input name="hidraulica-rd" type="radio" /> desmebrar entrada
          </div>
          <div className="col-2  regular">
            <input name="hidraulica-rd" type="radio" /> nova alimentação
          </div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular menu-resumo"> R$ XXXXXX</div>

          {/* ACESSIBILIDADE */}

          <div className="col-2  barlow-bold itens-titulos">acessibilidade</div>
          <div className="col-2  regular">
            <input name="acessibilidade-rd" type="radio" /> elevador
          </div>
          <div className="col-2  regular">
            <input name="acessibilidade-rd" type="radio" /> plataforma
          </div>
          <div className="col-2  regular">
            <input name="acessibilidade-rd" type="radio" /> rampa
          </div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular menu-resumo"> R$ XXXXXX</div>

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
                <span className="texto-rodape barlow black">edificações</span>
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
                <span className="texto-rodape barlow branco-metodo">
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
                <span className="texto-rodape barlow black">
                  padrão de acabamento
                </span>
              </div>
            </div>

            <div className="box-rodape-icone2">
              <Link to="/reforma">
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
              <Link to="/padraoacabamento">
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
              <div className="resultado barlow-bold ">R$ XXXXXXX</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
