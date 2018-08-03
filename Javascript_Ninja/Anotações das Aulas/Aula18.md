### Continuação Regex
```js
    /*
        [] - Lista, que corresponde a um dos caracteres que estiverem la dentro
        () - Grupo ou captura, agrupar itens e fazer capturas específicas da nossa expressão regular
        \w - Representa o match com caracteres alfanuméricos [A-Za-z0-9_]
        \d - Representa o match com todos os números de [0-9]
        \s - Representa o match com espaço em branco, e todos os carateres especiais como quebra
        de linha e tabulação
        \n - Representa o match com quebra de linha
        \t - Representa o match com tabulção (tab)
        . - Representa todos os caracteres, menos quebra de linha
    */
```
```js
       /\d\d\d/ // Vai mostrar os primeiros três números encontrados no texto
       /\w\w\w/ // Vai mostrar os três primeiros caracteres alfanuméricos encontrados no texto
       /\d\d\s/ // Vai casar dois números e um espaço em branco
       /\s-\s/ // Vai casar espaço em branco com o caracter - e com outro espaço em branco
```
### Continuação Regex - Negação
```js
    /*
        [abc] - Dentro da lista, o match deve ser feito com qualquer item  que estiver dentro da lista
        ^ - Sinal de negação
        [^aeiou] - O match deve ser feito com qualquer caractere, menos com os as vogais..
        \W - Representa o match com qualquer caractere, menos os alfanuméricos.
        \D - Representa o match com qualquer caractere ,menos os dígitos
        \S - Represetna o match com qualquer caractere, menos os espaços em branco
   */
```
```js
  /[\S\s]/g /* Vai casar todos os caracteres sem espaço em branco e todos
            menos os espaços em branco ( Vai fazer o match de todos os caracteres do texto) */
```
### Continuação Regex - Repetidores
```js
    /*
        Intervalo {n,m} - Repete o item anterior ao menos n vezes, e no máximo m vezes
        Intervalo aberto {n, } - Repete o item anterior n ou mais vezes
        { n } - Repete o item anterior exatamente n vezes
        ? Opcional - zero ou uma ocorrência do item anterior
        + Representa uma ou mais ocorrências do item anterior
        * Representa zero ou mais ocorrências do item anterior

   */
```
```js
// Para dizer que eu não quero uma barra literal preciso 'escapar' a barra:
/\/\/ - // Duas barras laterais
```
```js
  /\d{2,4}/g  // Vai casar os números com no minimo dois digitos e com no máximo quatro digitos.
  /\d{1, }/g  // Vai casar com no minimo um digito e sem máximo.
  /\d{4}/g  // Vai casar com números que tem quatro digitos.
  /\d\d\d/?  // Vai casar com dois números com dois digitos e o terceiro digito é 0 ou 1 vez.

  // O exemplo de cima funciona como:
  /\d\d\d{0,1}/g // O último número é opcional

  /\s\d?/g  // Espaço em branco seguido ou não por um dígito
  /s+/g   // Pelo menos um, ou mais s
  /\w+/g  // Vai fazer o match com todas as palavras
  /\w*/g  // Vai fazer o match com uma palavra seguida de qualquer caractere
```
### Continuação Regex - Exemplos
```js

    // Encontrando uma url válida:
```
* http://www.google.com.br
* htp: // chinloe.
* http: //.olha.com
* https://google.como
```js
   /http:\/\/\w+\.\w+\.\w{3}\.\w{2}/g // Não pega o https
   /https?:\/\/\w+[.\w]+/g  // Pega https e sem o www na frente
```
```js
    // Encontrando um e-mail válido:
```
* fernando@email.com
* jose@hotmail.com
* js@nodejs.com.br
```js
   /[\w+]+@\w+\.\w+.?([.\w]+)?/g
```
```js
    // Validando um queryString
```
```js
    var queryString = '?s=lala&b=bebe&c=cce';
    queryString.replace(/[?&](\w+)=(\w+)/g , function(regex, chave, valor) {
        console.log(chave, valor);
    });
    /*Saida:
        s lala
        b bebe
        c cce
    */
   var queryString = '?s=lala&b=bebe&c=cce';
    queryString.replace(/[?&](\w+)=(\w+)/g , function(regex, chave, valor) {
        if( chave === 's'){
            console.log('o resultado de busca para a busca ' + valor + ' é: ');
    });

```