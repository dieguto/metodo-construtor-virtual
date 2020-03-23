import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import App from "./App";

import TelaInicial from "./components/TipoDeServico";
import Edificacoes from "./components/Edificacoes";
import InfraEstrutura from "./components/InfraEstrutura";
import PadraoAcabamento from "./components/PadraoAcabamento";
import Resultado from "./components/Resultado";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route exact path="/" component={App}>
      <IndexRoute component={TelaInicial} />
      <Route path="/reforma" component={Edificacoes} />
      <Route path="/construcao" component={Edificacoes} />
      <Route path="/infraestrutura" component={InfraEstrutura} />
      <Route path="/padraoacabamento" component={PadraoAcabamento} />
      <Route path="/resultado" component={Resultado} />
    </Route>
  </Router>,
  document.getElementById("root")
);
