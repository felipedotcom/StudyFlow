### Introdução à Ajax
```js
/*
Asynchronous JavaScript and XML

Asynchronous - Quando não deixo uma operação que
demanda muito consumo de recurso bloquear minha thread principal,executando
ela em uma thread secundária para que eu possa manter a principal
liberada. Usando eventos, setTimeout(), etc...

AJAX - serve para fazer requisições de preferência
na mesma origem(url, dominio), e essas requisições, vão trazer informações,
sem precisar recarregar toda
a tela para trazer essas informações.

Ou seja, fazer uma requisição assíncrona no meu servidor, ou outro servidor que
permita essa requisição,
e me traga uma resposta(XML, HTML, documento de texto, JSON)

XMLHttpRequest() é um objeto do window
que precisa ser instanciado para fazer a requisição AJAX
*/
 window.XMLHttpRequest()
```
### 3 passos para fazer funcionar uma requisição AJAX
```js
1 - instanciar o objeto
var ajax = new XMLHttpRequest(); // objeto global não precisa passar window.XMLHttpRequest
```
```js
2 - abrir uma conexão (Protocolo - POST / GET / PUT / DELETE ...)
ajax.open(<protocolo>, <url>);
```
```js
3 - Enviar dados
ajax.send(<data>);
```
### Introdução à Ajax - parte 2
```js
onreadystatechange /* Evento que vai ver quando o
                      estado da requisição mudou, e ele vai responder
                      nesse evento. */

ajax.readyState // Verifica o estado atual da requisição.

/*
0: Não enviado, acontece quando o open não é chamado,conexão fechada
1 : Conexão aberta
2 : Headers recebidos, os cabeçalhos( informações do arquivo )
3 : Fazendo load, Carregando corpo do request
4 : Concluído com sucessajax.status  (HTTP Status)
*/
```
### Introdução à Ajax - parte 3
```js
ajax.responseText // Manipulando a resposta da requisição AJAX

ajax.responseXML // Converte a resposta de um documento XML em um documento
```
### Introdução à Ajax - Tratamento de Erros
```js
throw new Error('Mensagem de erro'); // Disparando Erro

//Usar para o user não ver os erros, não deixar o código parar

try { /* Executa o código, se disparar qualquer
         erro manda o objeto para o catch, para não
         mostrar o erro para o usuário */

  throw new Error(' Mensagem de erro');
}
catch(e) {
  console.log( e );
}

```