import React, { Component } from "react";
import "../css/menu.css";
import "../css/fontes.css";
import "../css/bootstrap.min.css";
import { Link } from "react-router";
import "../css/edificacoes.css";

import ImgUm from "../Assets/hidraulica.png";

import MetodoLogo from "../Assets/icons/logo_mtdtech.svg";

// footer que ainda não foi componentizado

import IconeUm from "../Assets/icons/icon_1.svg";
import IconeUmBranco from "../Assets/icons/icon_1_branco.svg";
import IconeDois from "../Assets/icons/icon_2.svg";
import IconeTres from "../Assets/icons/icon_3.svg";
import IconeRefresh from "../Assets/icons/icon_refresh.svg";
import IconeVoltar from "../Assets/icons/icon_voltar.svg";
import IconeContinuar from "../Assets/icons/icon_avancar.svg";

import "../css/rodape.css";

export default class Edificacoes extends Component {
  render() {
    return (
      <div className="">
        <div className="row">
          <div className="col-3 ">
            <img className="logo-metodo" src={MetodoLogo}></img>
          </div>
          <div className="col-7  mt-4">
            <h2 className="barlow-extrabold preto-metodo">
              fase 1
              <span className="barlow-thin cor-padrao-metodo">
                /edificações
              </span>
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

          <div className="col-2  barlow-bold itens-titulos">terraplanagem</div>
          <div className="col-2  regular">
            <input type="radio" name="terraplanagem-rd" />
            <span className="barlow-semibold"></span> limpeza de terreno
          </div>
          <div className="col-2  regular">
            <input type="radio" name="terraplanagem-rd" />
            <span className="barlow-semibold"></span> movimentação Parcial(50%)
          </div>
          <div className="col-2  regular">
            <input type="radio" name="terraplanagem-rd" />
            <span className="barlow-semibold"></span> corte e aterro
          </div>
          <div className="col-1  regular"></div>
          <div className="col-1  regular"></div>
          <div className="col-2  regular menu-resumo">R$ XXXXXX</div>

          <div className="col-2  barlow-bold itens-titulos">
            demolições no terreno
          </div>
          <div className="col-2  regular">
            <input name="demolicao" type="radio" />
            <span className=""> sim</span>
          </div>
          <div className="col-2  regular">
            <input name="demolicao" type="radio" />
            <span className="barlow-semibold"></span> não
          </div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular menu-resumo">R$ XXXXXX</div>

          <div className="col-2  barlow-bold itens-titulos">fundação</div>
          <div className="col-2  regular">
            <input name="fundacao" type="radio" />
            <span className="barlow-semibold"></span> radier
          </div>
          <div className="col-2  regular">
            <input name="fundacao" type="radio" />
            <span className="barlow-semibold"></span> sapata
          </div>
          <div className="col-2 ">
            <input name="fundacao" type="radio" />
            <span className=""> estaca</span>{" "}
          </div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular menu-resumo">R$ XXXXXX</div>

          <div className="col-2  barlow-bold itens-titulos">estruturas</div>
          <div className="col-2  regular">
            <input name="estruturas" type="radio" /> concreto
          </div>
          <div className="col-2  regular">
            <input name="estruturas" type="radio" /> prémoldado
          </div>
          <div className="col-2  regular">
            <input name="estruturas" type="radio" /> metálica
          </div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular menu-resumo">R$ XXXXXX</div>

          <div className="col-2  barlow-bold itens-titulos">escadas</div>
          <div className="col-2  regular">
            <input name="escadas" type="radio" /> concreto
          </div>
          <div className="col-2  regular">
            <input name="escadas" type="radio" /> metálica
          </div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular menu-resumo"> R$ XXXXXX</div>

          <div className="col-2  barlow-bold itens-titulos">cobertura</div>
          <div className="col-2  regular">
            <input name="cobertura" type="radio" /> forro + telhado
          </div>
          <div className="col-2  regular">
            <input name="cobertura" type="radio" /> forro + laje
          </div>
          <div className="col-2  regular">
            <input name="cobertura" type="radio" /> laje
          </div>
          <div className="col-2  regular">
            <input name="cobertura" type="radio" /> laje + telhado
          </div>
          <div className="col-2  regular menu-resumo"> R$ XXXXXX</div>

          <div className="col-2  barlow-bold itens-titulos">estacionamento</div>
          <div className="col-2  regular">
            <input name="estacionamento" type="radio" /> próprio
          </div>
          <div className="col-2  regular">
            <input name="estacionamento" type="radio" /> alugado
          </div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular menu-resumo">R$ XXXXXX</div>

          <div className="col-2  barlow-bold itens-titulos">passeio</div>
          <div className="col-2  regular">
            <input name="passeio" type="radio" /> manter
          </div>
          <div className="col-2  regular">
            <input name="passeio" type="radio" /> reformar
          </div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular"></div>
          <div className="col-2  regular menu-resumo"> R$ XXXXXX</div>

          <div className="col-10 espacamento "></div>
          <div className="col-2 espacamento  menu-resumo"></div>

          {/* Progressbar */}

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
                <img
                  className=" float-left tamanho-icone"
                  src={IconeUmBranco}
                />
              </div>
              <div className="fonte-footer-pag ">
                <span className="texto-rodape barlow branco-metodo">
                  edificações
                </span>
              </div>
            </div>

            <div className=" box-rodape-icone">
              <div className="">
                <img className=" float-left tamanho-icone" src={IconeDois} />
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
                <img className=" float-left tamanho-icone " src={IconeTres} />
              </div>
              <div className="fonte-footer-pag ">
                <span className="texto-rodape barlow black">
                  padrão de acabamento
                </span>
              </div>
            </div>

            <div className="box-rodape-icone2">
              <Link to="/">
                <div>
                  <img className="tamanho-icone" src={IconeVoltar} />
                </div>
              </Link>
              voltar
            </div>

            <div className="box-rodape-icone3">
              <Link to="/infraestrutura">
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
