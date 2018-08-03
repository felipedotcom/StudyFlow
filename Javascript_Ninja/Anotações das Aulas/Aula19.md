### Regex
```js
/*
^ - Fora de uma lista ele funciona como início de string
$ - Dentro da regex ele significa fim de string
flag m multiline - faz a captura em mais de uma linha
? - Vai fazer o mínimo de captura necessárias para fazer o match, usar logo após um repetidor
Captura gulosa - Vai pegar o máximo de caracteres que ele conseguir pegar
(?:) - Somente agrupamento sem capturar
\1, \2 - Referência dentro da regex
*/
  /^<p>/ // Verificando se existe a tag p no começo da string
  />$/ // Verificando se o final da string termina com fechamento de tag
  /(^<).+(>$)/ /* Fazendo match com começo da string
                  com abre tag, com qualquer caracter e
                  depois se a string termina com fecha tag.*/

  /^<.+>$/gm /*Vai fazer match com todos os começos
             de linha que começem com
             abre tag  tenha qualquer carater depois e termine com fecha tag*/

  /(<\w+>).+?(<\/\w+>)/ /* Vai fazer match com todas as aberturas de tag, mais todos os
                           caracteres e até o fechamento da tag
                        */
  /ju(?:n|l)ho/ // Vai fazer a captura de junho ou julho
  /<(\w+).+<\/(\1)>/ /* Vai fazer a captura do começo da tag h1 e o 1 vai fazer
                        a captura do fechamento da tag h1
                        pq ele está referenciando a primeira captura */
```
### Regex
```js
// Métodos de string onde eu posso usar regex:


.match(regexp) // Vai fazer um match com a regex, retorna um array
'fernando'.match(/nando/); // ['nando']

.replace(regexp, string) // Recebe uma regex e uma string ou função
.split()
'111.222.333-44'.split(/\D/); // ['111','222','333','44']
.search() // Vai fazer uma busca na string
'111.222.333-44'.search(/\./); /* Vai devolver o indice da onde o ponto foi encontrado,
                                no caso indice 3, só vai até o primeiro match */
```
### O construtor RegExp()
```js
    var regex = new RegExp( '/nando/' ); /nando/
    'fernando'.match( regex ); // ["nando"]

    var regex = new RegExp('\\d'); // Duas barras para fazer o escape
    'fer123nando'.match(/\d/g); // ["1","2","3"];

    // RegExp()Tem alguns métodos:

    /\d/.test('fer123nando'); // true

    var name = 'fernando';
    var regex = /\d/g;
    regex.exec(name); // ["1"]
    regex.exec(name); // ["2"]
    regex.exec(name); // ["3"]

    regex.lastIndex // 4

    // Caracteres de regex podem ser utilizado em strings
    '\n' // Quebra uma linha
    '\t' // Tab
    'Julio\'s bar ' // Escapando a aspas Julio's bar'
```