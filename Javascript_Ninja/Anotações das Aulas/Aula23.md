### Debug - parte 1
```js
/*
Elements: Use o painel Elements para iterar no layout
e criar um site manipulando livremente o DOM e o CSS.

Console: Use o Console para registrar informações de
diagnóstico durante o desenvolvimento ou como shell para
interagir com o JavaScript da página.

Sources: Depure o JavaScript usando pontos de interrupção
no painel Sources ou conecte seus arquivos locais por meio
de Espaços de trabalho para usar o editor em tempo real do DevTools.

Network: Use o painel Network para obter insights sobre
recursos solicitados e baixados e otimizar o desempenho do
carregamento da página.

Timeline: Use o Timeline para melhorar o desempenho da página
em tempo de execução, gravando e explorando os
diversos eventos que acontecem durante o ciclo de vida de um site.

Profiles: Use o painel Profiles se precisar de mais informações
que as fornecidas pelo Timeline como, por exemplo, para
rastrear vazamentos de memória.

Application: Use o painel Resources para inspecionar todos os
recursos carregados, incluindo bancos de dados Web SQL ou IndexedDB,
armazenamento local e da sessão, cookies, cache do aplicativo, imagens,fontes e
folhas de estilo.

Security: Use o painel Security para depurar problemas
de conteúdo misto e com seu certificado, entre outros.

Breakpoint - vai fazer com que quando o js estiver
fazendo a leitura do código, eu consigo para em um determinado ponto

Call Stack: pilha de execuções

Scope: Serve para visualisar toda as variáveis,
que estão no escopo no momento em que eu parei o código.

debugger; - faz o breakpoint dentro do seu código sem
precisar fazer marcação no browser, não usar em produção,
porque ele pode parar a aplicação.
*/
```
### Debug - parte 2
![Debugger](https://i.imgur.com/V4RQSZ2.gif)

### Debug - parte 3
Site do chrome-devtools [chrome-dev tools](https://developers.google.com/web/tools/chrome-devtools/?hl=pt-br)

### Debug - parte 4
```js
console.time();
console.timeEnd();/* Mostra o tempo que demora para
                     executar determinado código*/

(function(){
  'use strict';
  console.time('Calculando tempo do for');
  for( var i = 0; i < 10000; i++ ){
    console.log( 'calculando...');
  }
console.timeEnd('Calculando tempo do for');
})();

// Debugando arrays

console.table(); // Transforma arrays em tabela
(function(){
  'use strict';
  var arr = [
    {item: 'Arroz', price: 'R$ 10', weight: '10kg' },
    {item: 'Feijão', price: 'R$ 8', weight: '2kg' },
    {item: 'Batata', price: 'R$ 6', weight: '1kg' },
    {item: 'Ovo', price: 'R$ 12',   weight: '1kg' },
    {item: 'Macarrão', price: 'R$ 4', weight: '1kg' }
  ];
  console.table( arr );
})();

```