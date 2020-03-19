import React, { Component } from "react";
import { Link } from "react-router";

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
            <input type="radio" name="revestimento-piso-rd" />
            <span className="barlow-semibold"></span> 4000 A
          </div>
          <div className="col-2  regular">
            <input type="radio" name="revestimento-piso-rd" />
            <span className="barlow-semibold"></span> 4000 B
          </div>
          <div className="col-2  regular">
            <input type="radio" name="revestimento-piso-rd" />
            <span className="barlow-semibold"></span> 4000 C
          </div>
          <div className="col-1  regular">
            <input type="radio" name="revestimento-piso-rd" /> 4000 FLEX
          </div>
          <div className="col-1  regular">
            <input type="radio" name="revestimento-piso-rd" /> 5000
          </div>

          <div className="col-2  regular menu-resumo">R$ XXXXXX</div>

          {/* revestimento-parede */}

          <div className="col-2  barlow-bold itens-titulos">
            revestimento parede
          </div>
          <div className="col-2  regular">
            <input name="revestimento-parede-rd" type="radio" />
            <span className=""> 4000 A</span>
          </div>
          <div className="col-2  regular">
            <input name="revestimento-parede-rd" type="radio" />
            <span className=""> 4000 B</span>
          </div>
          <div className="col-2  regular">
            <input name="revestimento-parede-rd" type="radio" />
            <span className=""> 4000 C</span>
          </div>
          <div className="col-1  regular">
            <input name="revestimento-parede-rd" type="radio" />
            <span className=""> 4000 FLEX</span>
          </div>
          <div className="col-1  regular">
            <input name="revestimento-parede-rd" type="radio" />
            <span className=""> 5000 </span>
          </div>

          <div className="col-2  regular menu-resumo">R$ XXXXXX</div>

          {/* forro */}

          <div className="col-2  barlow-bold itens-titulos">forro</div>
          <div className="col-2  regular">
            <input name="forro-rd" type="radio" />
            <span className="barlow-semibold"></span> 4000 A
          </div>
          <div className="col-2  regular">
            <input name="forro-rd" type="radio" />
            <span className="barlow-semibold"></span> 4000 B
          </div>
          <div className="col-2 ">
            {" "}
            <input name="forro-rd" type="radio" />
            4000 C
          </div>

          <div className="col-1  regular">
            <input name="forro-rd" type="radio" />
            <span className=""> 4000 FLEX</span>
          </div>
          <div className="col-1  regular">
            <input name="forro-rd" type="radio" />
            <span className=""> 5000 </span>
          </div>

          <div className="col-2  regular menu-resumo">R$ XXXXXX</div>

          {/* caixilhos */}

          <div className="col-2  barlow-bold itens-titulos">caixilhos</div>
          <div className="col-2  regular">
            <input name="caixilhos-rd" type="radio" /> sim
          </div>
          <div className="col-2  regular">
            <input name="caixilhos-rd" type="radio" /> não
          </div>
          <div className="col-2  regular"></div>
          <div className="col-1  regular"></div>
          <div className="col-1  regular"></div>

          <div className="col-2  regular menu-resumo">R$ XXXXXX</div>

          {/* painel bdn */}

          <div className="col-2  barlow-bold itens-titulos">painel bdn</div>
          <div className="col-2  regular">
            <input name="painel-bdn-rdo" type="radio" /> metálico 3000
          </div>
          <div className="col-2  regular">
            <input name="painel-bdn-rdo" type="radio" /> metálico 4000
          </div>
          <div className="col-2  regular">
            <input name="painel-bdn-rdo" type="radio" /> 5000
          </div>
          <div className="col-2  regular">
            <input name="painel-bdn-rdo" type="radio" /> drywall
          </div>

          <div className="col-2  regular menu-resumo"> R$ XXXXXX</div>

          {/* MOBILIARIO */}

          <div className="col-2  barlow-bold itens-titulos">mobiliário</div>
          <div className="col-2  regular">
            <input name="mobiliario-rdo" type="radio" /> 4000
          </div>
          <div className="col-2  regular">
            <input name="mobiliario-rdo" type="radio" /> 5000
          </div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular"></div>

          <div className="col-2  regular menu-resumo"> R$ XXXXXX</div>

          {/* persianas */}

          <div className="col-2  barlow-bold itens-titulos">persianas</div>
          <div className="col-2  regular">
            <input name="persianas-rd" type="radio" /> 4000 A
          </div>
          <div className="col-2  regular">
            <input name="persianas-rd" type="radio" /> 4000 B
          </div>
          <div className="col-2  regular">
            <input name="persianas-rd" type="radio" /> 4000 C
          </div>
          <div className="col-1  regular">
            <input name="persianas-rd" type="radio" /> 4000 FLEX
          </div>
          <div className="col-1  regular">
            <input name="persianas-rd" type="radio" /> 5000
          </div>
          <div className="col-2  regular menu-resumo"> R$ XXXXXX</div>

          {/* vedacoes-internas-rd */}

          <div className="col-2  barlow-bold itens-titulos">
            vedações internas
          </div>
          <div className="col-2  regular">
            <input name="vedacoes-internas-rd" type="radio" /> alvenarias
          </div>
          <div className="col-2  regular">
            <input name="vedacoes-internas-rd" type="radio" /> drywall
          </div>
          <div className="col-2  regular">
            <input name="vedacoes-internas-rd" type="radio" /> unificação
          </div>
          <div className="col-2  regular"></div>

          <div className="col-2  regular menu-resumo">R$ XXXXXX</div>

          {/* fachada-rd */}

          <div className="col-2  barlow-bold itens-titulos">fachada</div>
          <div className="col-2  regular">
            <input name="fachada-rd" type="radio" /> 4000 A
          </div>
          <div className="col-2  regular">
            <input name="fachada-rd" type="radio" /> 4000 B
          </div>
          <div className="col-2  regular">
            <input name="fachada-rd" type="radio" /> 4000 C
          </div>
          <div className="col-1  regular">
            <input name="fachada-rd" type="radio" /> 4000 FLEX
          </div>
          <div className="col-1  regular">
            <input name="fachada-rd" type="radio" /> 5000
          </div>

          <div className="col-2  regular menu-resumo"> R$ XXXXXX</div>

          {/* comunicacao-visual-rd */}

          <div className="col-2  barlow-bold itens-titulos">
            comunicação visual ext.
          </div>
          <div className="col-2  regular">
            <input name="comunicacao-visual-rd" type="radio" /> letreiro
          </div>
          <div className="col-2  regular">
            <input name="comunicacao-visual-rd" type="radio" /> totem
          </div>
          <div className="col-2  regular">
            <input name="comunicacao-visual-rd" type="radio" /> medalhão
          </div>
          <div className="col-2  regular">
            <input name="comunicacao-visual-rd" type="radio" /> bandeira
          </div>

          <div className="col-2  regular menu-resumo"> R$ XXXXXX</div>

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
                    src={IconeContinuar}
                    alt="Icone continuar"
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
