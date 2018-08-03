### Regex Parte 1
```js
 /*Expressões regulares servem para manipular string
   São tipos primitivos em Javascript, e são case sensetive
   https://regex101.com, para fazer testes online de regex.
   Entre os / / vamos colocar expressões para analisar texto com o regex.
    Flags:
        g - global
        i - ignore case sensetive
    /a/g vai pegar todas as letras a do texto
    /M/gi - vai pegar todas as letras m, maiúsculas e minúsculas.

   Como expressão regular é um tipo primitivo, eu posso atribuir a uma variável
   */
   var regex = /m/; - // procurando todas as palavras m
   var texto = 'JavaScript é uma linguagem de programação interpretada.[2] Foi originalmente implementada como parte dos navegadores web para que scripts pudessem ser executados do lado do cliente e interagissem com o usuário sem a necessidade deste script passar pelo servidor, controlando o navegador, realizando comunicação assíncrona e alterando o conteúdo do documento exibido.';

   match() - // Propriedade do objeto string
   texto.match(/j/g); // Vai trazer todos os j do texto
```
### Regex Parte 2
```js
    /*
    Podemos usar caracteres literais:
        letras maiúsculas
        letras minúsculas
        números
    Termos:
        \w: caracteres alfanuméricos e _
        \d: números( digits )
    */
    var texto = 'JavaScript foi originalmente desenvolvido por Brendan Eich quando trabalhou na Netscape sob o nome de Mocha, posteriormente teve seu nome mudado para LiveScript e por fim JavaScript. LiveScript foi o nome oficial da linguagem quando foi lançada pela primeira vez na versão beta do navegador Netscape 2.0 em setembro de 1995, mas teve seu nome mudado em um anúncio conjunto com a Sun Microsystems em dezembro de 1995 quando foi implementado no navegador Netscape versão 2.0B3.';

    texto.match(/\w/g); // Traz um array com 390 itens, com todas as letras do texto
    texto.match(/Ronaldo/); // null, pq não existe match
    texto.match(/\d/); // Vai trazer o primeiro número que ele encontrar
    texto.match(/\d/g); // vai trazer todos os números
    texto.match(/\d\d/g); // Vai trazer dois números de forma global['19','95','19','95'].

    /* Classe de caracteres: Quando quer casar com algumas letras específicas. São
    representados por colchetes [] e representam um só caracter */

    /[129]/ // Vai trazer todos os números que casarem

    /* Posso fazer também um agrupamento de caracteres() */  /[(1995)(1995)]/
    /1995 | 1995 / // Vai fazer um agrupamento de 1995
    // Sequência de caracteres
    /[123456789]/ // Lista representa um único caracter, vai casar os digitos de 1 a 9
    /[a-zA-z\d]/ // Todos os caracteres de a até z minúsculo,A até Z maiúsculo, 0 até 9
```
### Regex Parte 3
```js
    /[\w]/ // Pega todos os caracteres alfanuméricos
    // Conseguimos usar regex com método replace
    var texto = 'JavaScript foi originalmente desenvolvido por Brendan Eich quando trabalhou na Netscape sob o nome de Mocha, posteriormente teve seu nome mudado para LiveScript e por fim JavaScript. LiveScript foi o nome oficial da linguagem quando foi lançada pela primeira vez na versão beta do navegador Netscape 2.0 em setembro de 1995, mas teve seu nome mudado em um anúncio conjunto com a Sun Microsystems em dezembro de 1995 quando foi implementado no navegador Netscape versão 2.0B3.';
    texto.replace(/a/g, 'NO'); // Regex dentro do replace substituindo todos os a por NO

    /* Agrupamento usando replace, quando eu agrupo o item, eu estou criando um grupo
    de captura. Vai pegar esse item e vai ser representado no segundo parâmetro */

    texto.replace(/(a)/g, '$1--'); // Pegando todos os a,e passando para o grupo de captura $1
    texto.replace(/(a)(de)/g, '$2$2--');// Pegando a segundo captura
    texto.replace(/(a)(de)/g, '--$&'); // Pega as duas capturas juntas

    // replace com regex, eu posso utilizar uma função
    texto.replace(/(d)(e)/g, function(capturaTotal, d,e) {
        return (d + e).toUpperCase();
    }); // Retorna DE

    'Ronaldo'.replace(/(\w)/g, function(capturaTotal, letra){
        return letra.toUpperCase();
    }); // RONALDO

    'Ronaldo'.replace(/(\w)(\w)/g, function(capturaTotal, letra1, letra2){
        return letra1.toUpperCase() + letra2.toLowerCase();
    });// RoNaLdO






















```