---


---

<h1 id="documentação-método-construtor">Documentação Método Construtor</h1>
<h1 id="histórico-de-revisões">Histórico de revisões</h1>

<table>
<thead>
<tr>
<th>Data</th>
<th>Versão</th>
<th>Descrição</th>
<th>Autor</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>08/04/2020</code></td>
<td><code>'1.0'</code></td>
<td><code>Documento Inicial</code></td>
<td><code>Diego Augusto</code></td>
</tr>
</tbody>
</table><h1 id="introdução">Introdução</h1>
<p>Está documentação tem como objetivo, explicar o  projeto, mostrar o seu funcionamento e auxiliar quem estiver dando manutenção/lendo no/o código.<br>
O objetivo desse sistema é dar poder de compra ao cliente, facilitando o processo orçamentário de uma obra.</p>
<h1 id="visão-geral">Visão Geral</h1>
<p>O sistema foi desenvolvido na linguagem Javascript com a biblioteca REACT.JS, o sistema tem 5 componentes,  TipoDeServico.js, Edificacoes.js, Infraestrutura.js, PadraoAcabamento.js e Resultado.js. Cada uma dessas fases representa uma etapa de obra e seus seguimentos. O sistema funciona em torno dessas 5 telas na qual o usuário escolherá qual o tipo de obra ele quer orçar, quais componentes a obra possuirá e verificar se o valor total está de acordo com o orçamento previsto. Em caso de inconformidades, o usuário poderá voltar nas páginas e reorganizar as opções, desmarcando  itens e escolhendo outros mais caros ou mais baratos. Esse processo torna o orçamento de obras mais fácil de ser realizado.</p>
<h1 id="requisitos-não-funcionais">Requisitos não-funcionais</h1>

<table>
<thead>
<tr>
<th>Interoperabilidade</th>
<th>Deve ser desenvolvido na linguagem Javascript, com a Lib REACT.JS</th>
</tr>
</thead>
<tbody></tbody>
</table><h1 id="mecanismos-arquiteturais">Mecanismos arquiteturais</h1>
<p>##AVISO PRÉVIO<br>
Este trecho será mais esclarecedor caso você tenha o código aberto, pois ele segue o fluxo do código e por conseguinte de cada função.</p>
<h2 id="funções">Funções</h2>
<h3 id="componentdidmount">componentDidMount()</h3>
<p>Ela é acionada toda a vez que a página é carregada, e aciona duas funções, pegarLista() e gerarTotal()</p>
<h3 id="mudarfoto">mudarFoto()</h3>
<p>ela altera a foto de fundo, das telas edificações, infraestrutura e padrão acabamento.</p>
<p>– A função possui 3 variáveis, que são:</p>
<ul>
<li>
<p><strong>"Elemento"</strong>, que resgata o elemento pelo id que passamos como parâmetro para a função. Esse id é colocado na div, que queremos utilizar como gatilho, para quando passarmos o mouse em cima dela, ela acione a função.</p>
</li>
<li>
<p><strong>"imagemTrans"</strong>, que resgata a imagem pela classe “imagem-transitoria”, que é a variável que possibilita mudar a imagem pelas classes.</p>
</li>
<li>
<p><strong>"imagemPadrao"</strong>, que resgata a imagem padrão a sempre estar na página, quando não for alterada, ela resgata a imagem que foi importada no cabeçalho do arquivo.</p>
</li>
</ul>
<p>E possui dois <strong>addEventListener</strong> que são as <strong>funcionalidades principais</strong> da função:</p>
<ul>
<li>
<p>A <strong>“mouseover”</strong> ela altera o background, adicionando um novo, com a imagem que desejamos. Então quando colocamos o cursor do mouse, na div que decidimos ser o gatilho pra função, ela altera a imagem de fundo, para a imagem que passamos como parâmetro.</p>
</li>
<li>
<p>A <strong>“mouseout”</strong> ela altera o background para o <strong>background padrão</strong> quando tiramos o mouse de cima da div que usamos como gatilho para a função.</p>
</li>
</ul>
<h3 id="pegarnames">pegarNames()</h3>
<p>Tem como funcionalidade resgatar os <strong>names</strong> dos inputs.<br>
Possui três variáveis, que são arrays:</p>
<ul>
<li>lista, que nós utilizamos pra resgatar o input e futuramente pra saber se é um radio ou checkbox.</li>
<li>listaNames que utilizamos pra salvar os names dos inputs que vem dentro do array lista.</li>
<li>listaSet que utilizamos pra receber o listaNames só que filtrado.</li>
</ul>
<p>Depois de fazer esse processo de filtragem, retornamos o array filtrado com os names (return listaSet)</p>
<h3 id="pegarlista">pegarLista()</h3>
<p>Ele armazena a lista filtrada de names dentro da variável <strong>listaSet</strong>, pra armazenar dentro do state <strong>“itens”</strong> e chama a função <strong>checkItens()</strong> passando como argumento da função a <strong>listaSet</strong>.</p>
<h3 id="resetall">resetAll()</h3>
<p>A função serve parar reiniciar todos os dados da página, para o usuário começar novamente.<br>
Ele armazena a lista filtrada de names dentro da variável <strong>lista</strong>.<br>
Armazena uma lista de  <strong>“radios”</strong> e resgata dentro do array, transformando em um objeto<br>
Depois remove os valores do state, que são as variáveis “somaX” (cada pagina possui a sua própria) e itensInputs, colocando o valor zero<br>
utiliza o array radio, para mapear todos os <strong>radios</strong> que estão <strong>checked</strong> e receber <strong>“false”</strong> para desmarcar o rádio.<br>
Mapeia todos os names dentro da lista e remove esses itens do sessionStorage</p>
<h3 id="checkitens">checkItens()</h3>
<p>A função serve para marcar(selecionar) os inputs.</p>
<p>Ela possui três variáveis:</p>
<ul>
<li>checkedIds que é um array vazio,</li>
<li>sum que inicia como zero,</li>
<li>auxItem que serve como auxiliar.</li>
</ul>
<p>primeiro ela mapeia os names dentro do array names que recebemos como parâmetro da função, e armazena todos os itens do sessionStorage que possuem o mesmo name, dentro da auxItem, e realiza uma verificação pra saber se são diferentes de null, e insere dentro da checkedIds os valores.<br>
Em seguida mapeia a checkedIds passando item e i(index) como parâmetro, realiza uma verificação pra saber se a item está vindo vazio ou null e marca os inputs. E adiciona os valores dentro da sum, para gerar a soma dos itens.<br>
Depois adiciona o valor sum(que é a soma dos itens selecionados) dentro do state somaX(cada página possui o seu).<br>
E no final adiciona o state da somaX dentro da sessionStorage e realiza a chamada da função fillItens()</p>
<h3 id="fillitens">fillItens()</h3>
<p>A função serve para filtrar os itens<br>
Ela possui três variáveis:</p>
<ul>
<li>itens : que recebe o state da itens,</li>
<li>values : que inicia como um array vazio,</li>
<li>itensValues : que recebe o state da itensInputs.</li>
</ul>
<p>Mapeamos cada item da itens resgatando do sessionStorage e salvando na variável item, depois realiza uma verificação pra saber se está vindo diferente de null.<br>
Dentro desta verificação, é realizado uma expressão regular na itens, depois transformamos em inteiro e adicionamos o valor da itens dentro da variável values.</p>
<p>E por fim, mapeamos a value para resgatar o valor e salvar dentro da itensValues em posições e colocamos esse array itensValues dentro do state da itensInputs.</p>
<h3 id="salvardadoslocal">salvarDadosLocal()</h3>
<p>A função serve para salvar os dados no sessionStorage e gerar o total.<br>
Ela possui três variáveis:</p>
<ul>
<li>total : tornamos inteiro o item total do sessionStorage e armazenamos esse valor dentro da variável total.</li>
<li>newSomaEd : recebe o state da somaX</li>
<li>somaX : tornamos inteiro o item edificacoes ou infraestrutura ou padraoacabamento (depende de qual página estamos utilizando) e armazenamos esse valor dentro da variável somaX;</li>
</ul>
<p>resgatamos o state da somaX e armazenamos ela no sessionStorage no item edificacoes ou infraestrutura ou padraoacabamento (depende de qual página estamos utilizando)</p>
<p>É realizado uma verificação se o total é igual a zero, se for, nós adicionamos o valor da variável newSomaEd dentro da variável total, caso não seja nós retiramos da variável total o valor da variável somaEd e adicionamos o valor da variável newSomaEd.</p>
<p>Por fim acionamos a função gerarTotal() e enviamos o usuário para a próxima página.</p>
<h3 id="gerartotal">gerarTotal()</h3>
<p>A função serve para gerar o <strong>orçamento final</strong> da soma de todas as páginas.</p>
<p>Ela utiliza uma variável que é a soma, e com ela resgatamos os itens edificacoes, infraestrutura e padraoacabamento do sessionStorage e itera os valores dentro da variável soma. Isso gera o orçamento total, então adicionamos o valor da variável soma dentro do item total da sessionStorage.</p>
<h3 id="mudaritem">mudarItem()</h3>
<p>A função serve para <strong>marcar os itens</strong>.<br>
Ela possui cinco variáveis:</p>
<ul>
<li>value: serve para resgatar o valor inteiro do input.</li>
<li>resultado: serve parar resgatar o state da somaX da página.</li>
<li>stateItens: serve para resgatar o valor do state do itensInputs</li>
<li>itemArray: serve para armazenar itens dentro de um array.</li>
<li>valorItem: serve para armazenar os valores dos itens.</li>
</ul>
<p>Armazena o <strong>name</strong> do sessionStorage do <strong>“e”</strong>, que é passado no parâmetro da função dentro do <strong>itemArray</strong>.<br>
Resgata a variável <strong>resultados</strong> e retira o valor dela de acordo com o resultado da função somarItem passando como parâmetro o itemArray.</p>
<p>Realiza uma verificação pra saber se o input está selecionado (<strong>checked</strong>)</p>
<ul>
<li>verifica se o name que está sendo resgatado do sessionStorage é null ou se o tipo do input que estamos lidando (e.target.type) é um <strong>“radio”</strong>, caso seja <strong>true</strong>, ele chama a função deleteItem e remove do array stateItens na posição do id o id daquele item, caso seja <strong>false</strong>, ele resgata o itemArray e salva o name dos inputs do sessionStorage. E em seguida envia o <strong>valor</strong> para dentro do array itemArray.</li>
</ul>
<p>Caso a verificação seja false (<strong>ou seja ela não foi selecionada</strong>)<br>
Resgata o itemArray e salva o name dos inputs do sessionStorage. E realiza a chamada da função <strong>deleteItem</strong> passando como argumento o itemArray e o <a href="http://e.target.id">e.target.id</a>, para deletar o id dentro do itemArray.</p>
<p>Setamos dentro do <strong>sessionStorage</strong> os item com o <strong>name</strong> passando o objeto dentro do itemArray.</p>
<p>Salvamos dentro do itemArray o name que salvamos dentro do sessionStorage.</p>
<p>Armazenamos dentro da variável valorItem o valor da chamada da função somaritem passando como argumento o itemArray;</p>
<p>E somamos o valorItem dentro da <strong>resultado</strong>.</p>
<p>stateItens na posição do id recebe a variável valoritem;<br>
E depois setamos o stateItens dentro do state do itensInputs e setamos o resultado dentro do state da <strong>somaX</strong>(Ex: somaEdificacoes).</p>
<h3 id="resetarstorage">resetarStorage():</h3>
<p>Resgata as variáveis do sessionStorage e remove <strong>todos os dados</strong>, para reiniciar o sistema, e te envia para a página inicial.</p>
<h3 id="deleteitem">deleteItem():</h3>
<p>A função serve para <strong>deletar os itens</strong> dentro do array.</p>
<p>Ela utiliza uma variável que é a index, que inicia com valor zero.</p>
<p>Realiza a verificação, se o itemArray que está no parâmetro da função é diferente de null, depois verifica se o tamanho do array é maior ou igual a 1, então ele filtra a itemArray buscando os index de cada item e retornando o id, para só então remover do itemArray os índices.</p>
<h3 id="somaritem">somarItem():</h3>
<p>A função serve para <strong>somar os itens</strong> dentro do array</p>
<p>Ela utiliza uma variável que é a aux, que inicia com valor zero.<br>
Verifica se o itemArray é diferente de null, depois verifica se o tamanho do array é maior ou igual a 1, então utiliza a aux para armazenar o itemArray com um reduce que serve para somar o totalItem, que é uma variável que utilizamos dentro do reduce, para iterar o valor.value.</p>
<h2 id="fluxo-de-páginas">Fluxo de páginas</h2>
<p>O sistema possuí 5 páginas:</p>
<ul>
<li>Página de seleção, aonde o usuário escolhe qual tipo de projeto ele irá orçar</li>
<li>Página de Edificações, você realiza o orçamento da sua obra, clicando em itens referente a edificações</li>
<li>Página de Infraestrutura, você realiza o orçamento da sua obra, clicando em itens referente a edificações</li>
<li>Página de Padrão de Acabamento, você realiza o orçamento da sua obra, clicando em itens referente a edificações</li>
<li>Resultado final, onde mostra, o resultado da soma das páginas anteriores (o orçamento da junção das três páginas)</li>
</ul>
<div class="mermaid"><svg xmlns="http://www.w3.org/2000/svg" id="mermaid-svg-cRXo7iFf6QDpZo2T" width="100%" style="max-width: 777.40625px;" viewBox="0 0 777.40625 62"><g transform="translate(-12, -12)"><g class="output"><g class="clusters"></g><g class="edgePaths"><g class="edgePath" style="opacity: 1;"><path class="path" d="M93.984375,43L118.984375,43L143.984375,43" marker-end="url(#arrowhead112)" style="fill:none"></path><defs><marker id="arrowhead112" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath" style="opacity: 1;"><path class="path" d="M242.40625,43L267.40625,43L292.40625,43" marker-end="url(#arrowhead113)" style="fill:none"></path><defs><marker id="arrowhead113" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath" style="opacity: 1;"><path class="path" d="M408.984375,43L433.984375,43L458.984375,43" marker-end="url(#arrowhead114)" style="fill:none"></path><defs><marker id="arrowhead114" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath" style="opacity: 1;"><path class="path" d="M642.109375,43L667.109375,43L692.109375,43" marker-end="url(#arrowhead115)" style="fill:none"></path><defs><marker id="arrowhead115" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g></g><g class="edgeLabels"><g class="edgeLabel" transform="" style="opacity: 1;"><g transform="translate(0,0)" class="label"><foreignObject width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel" transform="" style="opacity: 1;"><g transform="translate(0,0)" class="label"><foreignObject width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel" transform="" style="opacity: 1;"><g transform="translate(0,0)" class="label"><foreignObject width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel" transform="" style="opacity: 1;"><g transform="translate(0,0)" class="label"><foreignObject width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel"></span></div></foreignObject></g></g></g><g class="nodes"><g class="node" id="A" transform="translate(56.9921875,43)" style="opacity: 1;"><rect rx="0" ry="0" x="-36.9921875" y="-23" width="73.984375" height="46"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-26.9921875,-13)"><foreignObject width="53.984375" height="26"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">Seleção</div></foreignObject></g></g></g><g class="node" id="B" transform="translate(193.1953125,43)" style="opacity: 1;"><rect rx="0" ry="0" x="-49.2109375" y="-23" width="98.421875" height="46"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-39.2109375,-13)"><foreignObject width="78.421875" height="26"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">Edificações</div></foreignObject></g></g></g><g class="node" id="C" transform="translate(350.6953125,43)" style="opacity: 1;"><rect rx="0" ry="0" x="-58.2890625" y="-23" width="116.578125" height="46"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-48.2890625,-13)"><foreignObject width="96.578125" height="26"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">Infraestrutura</div></foreignObject></g></g></g><g class="node" id="D" transform="translate(550.546875,43)" style="opacity: 1;"><rect rx="0" ry="0" x="-91.5625" y="-23" width="183.125" height="46"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-81.5625,-13)"><foreignObject width="163.125" height="26"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">Padrão de Acabamento</div></foreignObject></g></g></g><g class="node" id="F" transform="translate(736.7578125,43)" style="opacity: 1;"><rect rx="0" ry="0" x="-44.6484375" y="-23" width="89.296875" height="46"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-34.6484375,-13)"><foreignObject width="69.296875" height="26"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">Resultado</div></foreignObject></g></g></g></g></g></g></svg></div>
<h2 id="fluxo-do-sistema">Fluxo do sistema</h2>
<p>O funcionamento do sistema gira em torno de três telas principais:</p>
<ul>
<li>Edificações</li>
<li>Infraestrutura</li>
<li>Padrão de Acabamento</li>
</ul>
<p>Elas possuem o mesmo fluxo, existem variáveis que são iniciadas ao entrar na tela que são salvas no localStorage e variáveis que são utilizadas apenas no React.js, utilizando o recurso de state, que possibilita você alterar o seu valor, durante a função, removendo e adicionando dados.</p>
<p>a tela é dividida em três principais partes:</p>
<ul>
<li><strong>planilha de dados</strong>, que são os itens a serem selecionados, com seus valores e nomes,</li>
<li><strong>resumo</strong>, é um menu lateral onde mostra os valores, dos itens selecionados</li>
<li><strong>rodapé</strong>, onde fica a transição de páginas, o resultado e a barra de progresso de páginas</li>
</ul>
<p>Dentro de <strong>planilha de dados</strong>, ao clicar nos itens o sistema resgata a <strong>posição do array</strong>, o <strong>name</strong> e o <strong>value</strong>.</p>
<ul>
<li>A posição do array serve para identificarmos qual componente estamos manipulando e salvando os dados, e para usarmos uma função que sirva parar todos os itens, ao invés de criar uma função para cada item.</li>
<li>O name, serve para identificarmos qual item estamos lidando, dentro da planilha.</li>
<li>O value serve para obtermos o valor daquele item, para realizarmos o cálculo</li>
</ul>
<p>No <strong>Resumo</strong>,  nós mostramos ao usuário o valor dos itens selecionados, através da posição do array dentro do state do itensInputs.</p>
<ul>
<li>O itensInputs é um array que utilizamos dentro do state do React</li>
</ul>
<p>E no <strong>Rodapé</strong>, utilizamos um sistema de prosseguir e retornar, o total da página e a barra de progresso.</p>
<ul>
<li>
<p>O sistema de prosseguir e voltar, é um sistema que salva os dados da página (itens selecionados e total da página) para que, quando você ir para outra página, os inputs que foram marcados, não percam os seus valores, ao retornar a página, e o total, não seja alterado, caso você mude de página</p>
</li>
<li>
<p>O total, é o resultado da soma, de todos os itens selecionados dentro da página. Todos os itens possuem um value, mesmo que seja 0, e o total, é a soma deles.</p>
</li>
<li>
<p>E a barra de progresso, mostra quanto falta para a página final, que mostra a página de resultado</p>
</li>
</ul>
<div class="mermaid"><svg xmlns="http://www.w3.org/2000/svg" id="mermaid-svg-VFei4EPQkjutVLx2" width="100%" style="max-width: 478.3265609741211px;" viewBox="0 0 478.3265609741211 263.53125"><g transform="translate(-12, -12)"><g class="output"><g class="clusters"></g><g class="edgePaths"><g class="edgePath" style="opacity: 1;"><path class="path" d="M115.40824037641494,75.1484375L171.7109375,47.765625L242.640625,47.765625" marker-end="url(#arrowhead131)" style="fill:none"></path><defs><marker id="arrowhead131" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath" style="opacity: 1;"><path class="path" d="M115.40824037641494,121.1484375L171.7109375,148.53125L227.1875,148.53125" marker-end="url(#arrowhead132)" style="fill:none"></path><defs><marker id="arrowhead132" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath" style="opacity: 1;"><path class="path" d="M298.171875,47.765625L338.625,47.765625L396.4317992738712,116.72445148906841" marker-end="url(#arrowhead133)" style="fill:none"></path><defs><marker id="arrowhead133" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath" style="opacity: 1;"><path class="path" d="M313.625,148.53125L338.625,148.53125L364.1250007629395,149.03125" marker-end="url(#arrowhead134)" style="fill:none"></path><defs><marker id="arrowhead134" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath" style="opacity: 1;"><path class="path" d="M293.40625,244.53125L338.625,244.53125L395.7171830058952,180.62343376883484" marker-end="url(#arrowhead135)" style="fill:none"></path><defs><marker id="arrowhead135" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g></g><g class="edgeLabels"><g class="edgeLabel" transform="translate(171.7109375,47.765625)" style="opacity: 1;"><g transform="translate(-30.4765625,-13)" class="label"><foreignObject width="60.953125" height="26"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel">Link text</span></div></foreignObject></g></g><g class="edgeLabel" transform="" style="opacity: 1;"><g transform="translate(0,0)" class="label"><foreignObject width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel" transform="" style="opacity: 1;"><g transform="translate(0,0)" class="label"><foreignObject width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel" transform="" style="opacity: 1;"><g transform="translate(0,0)" class="label"><foreignObject width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel" transform="" style="opacity: 1;"><g transform="translate(0,0)" class="label"><foreignObject width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel"></span></div></foreignObject></g></g></g><g class="nodes"><g class="node" id="A" transform="translate(68.1171875,98.1484375)" style="opacity: 1;"><rect rx="0" ry="0" x="-48.1171875" y="-23" width="96.234375" height="46"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-38.1171875,-13)"><foreignObject width="76.234375" height="26"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">mudarItem</div></foreignObject></g></g></g><g class="node" id="B" transform="translate(270.40625,47.765625)" style="opacity: 1;"><circle x="-27.765625" y="-23" r="27.765625"></circle><g class="label" transform="translate(0,0)"><g transform="translate(-17.765625,-13)"><foreignObject width="35.53125" height="26"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">radio</div></foreignObject></g></g></g><g class="node" id="C" transform="translate(270.40625,148.53125)" style="opacity: 1;"><rect rx="5" ry="5" x="-43.21875" y="-23" width="86.4375" height="46"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-33.21875,-13)"><foreignObject width="66.4375" height="26"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">checkbox</div></foreignObject></g></g></g><g class="node" id="D" transform="translate(422.97578048706055,148.53125)" style="opacity: 1;"><polygon points="59.350781250000004,0 118.70156250000001,-59.350781250000004 59.350781250000004,-118.70156250000001 0,-59.350781250000004" rx="5" ry="5" transform="translate(-59.350781250000004,59.350781250000004)"></polygon><g class="label" transform="translate(0,0)"><g transform="translate(-32.9453125,-13)"><foreignObject width="65.890625" height="26"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">Rhombus</div></foreignObject></g></g></g><g class="node" id="E" transform="translate(270.40625,244.53125)" style="opacity: 1;"><circle x="-14.2265625" y="-23" r="23"></circle><g class="label" transform="translate(0,0)"><g transform="translate(-4.2265625,-13)"><foreignObject width="8.453125" height="26"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">e</div></foreignObject></g></g></g></g></g></g></svg></div>
<h1 id="fundamentação">Fundamentação</h1>
<p>nesta fase, o arquiteto deve fundamentar todas as decisões importantes de design. Além disso, deve descrever as alternativas significativas rejeitadas no projeto. Esta seção pode indicar hipóteses, restrições, resultados de análises e experiências significativas para a arquitetura.</p>
<h1 id="visão-de-casos-de-uso">Visão de casos de uso</h1>
<p>esta fase, será responsável por apresentar os casos de uso ou cenários escolhidos para a validação da arquitetura apresentada. Casos de uso, backlog, requisitos de usuários ou qualquer outro nome que represente os itens relevantes para o funcionamento do sistema final, o intuito é exercitar e testar os principais aspectos de risco da arquitetura.</p>
<h1 id="componentes">Componentes</h1>
<h3 id="diretórios">Diretórios</h3>
<p>nesta fase, o arquiteto deve apresentar o diagrama de componentes. É recomendado como boas praticas de mercado o uso do modelo UML para criação do diagrama, que deve apresentar os possíveis componentes e suas dependências. Além disso, o arquiteto deve criar uma tabela detalhando as responsabilidades de cada componente.</p>
<p>/construtor-virtual : pasta raiz do sistema<br>
/node_modules : pasta onde é salvo as bibliotecas que o sistema utiliza<br>
/public : pasta onde se encontra sua index.html<br>
/src : pasta principal do sistema<br>
/src/App.js : arquivo que renderiza as páginas desenvolvidas e envia pra index<br>
/src/Index.js : index do sistema em js, onde ficam as rotas para cada componente (página ou função)<br>
/src/Assets : pasta onde se localiza as imagens e icones do sistema<br>
/src/components/ : pasta onde se localiza os componentes (páginas ou funções) do sistema<br>
/src/css : pasta onde se localiza a estilização do sistema<br>
/src/Utils : pasta onde se localiza as utilidades do sistema, como por exemplo fontes<br>
/wire-frames : pasta onde se localiza as wireframes do sistema</p>
<h1 id="implantação">Implantação</h1>
<h3 id="como-acessar-o-sistema">Como acessar o sistema</h3>
<p>O software é disponibilizado de forma online, acessando o link:</p>
<ul>
<li><a href="https://metodo-construtor-virtual.herokuapp.com">https://metodo-construtor-virtual.herokuapp.com</a></li>
</ul>
<h3 id="como-iniciar-o-projeto">Como iniciar o projeto</h3>
<h3 id="mas-para-inicia-lo-na-sua-máquina-você-necessita-de-alguns-requisitos">Mas para inicia-lo na sua máquina, você necessita de alguns requisitos:</h3>
<ul>
<li>repositório github do sistema</li>
<li>ferramenta de versionamento “Git”</li>
<li>Node.js</li>
</ul>
<p>Ao resgatar o link do repositório, abra o seu terminando cmd dentro de uma pasta de sua preferencia, e digite:</p>
<ul>
<li>git init</li>
<li>git remote add origin  “link do repositório”</li>
<li>git pull</li>
</ul>
<p>Agora o repositório já esta no seu computador, abra a pasta no caminho:<br>
/construtor-virtual<br>
abra o cmd, digite :</p>
<ul>
<li>npm install (instala as bibliotecas que o sistema necessita no seu dispositivo)</li>
</ul>
<p>Assim que terminar de instalar as dependências, digite,</p>
<ul>
<li>npm start (inicia o projeto)</li>
</ul>
<p>O navegador irá abrir o sistema</p>
<h1 id="conclusão">Conclusão</h1>
<p>O projeto foi desenvolvido dentro da método com o intuito de facilitar a geração de orçamento das obras e concluímos que a melhor forma de auxiliar o usuário é dar várias maneiras de ações que ele possa tomar, sempre mostrando o resultado e de maneira rápida.</p>

