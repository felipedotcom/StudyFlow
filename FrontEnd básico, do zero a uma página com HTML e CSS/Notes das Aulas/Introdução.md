### Tags
* Geralmente aparecem em pares, uma tag de abertura e outra de fechamento.
* Servem para marcar onde começa e termina um elemento.
```html
  <a>
    ...
  </a>
```
### Elemento
* Quando temos as tags de abertura e fechamento, junto com o conteúdo, todo esse conjunto é chamamos de elemento.
```html
  <a href="http://google.com">Google</a>
```
### Atributo
* Propriedades que dão informações a mais sobre o elemento.
```html
* <a> - tag de abertura
* </a> - tag de fechamento
* href="http://google.com" - atributo
* "http://google.com" - valor do atributo
```
### Estrutura básica do HTML
```html
<!--
No HTML existem até 6 níveis de títulos, começando do h1 até o h6.
-->
<h1>Título</h1>
<h2>Subtítulo</h2>

<!--
Para parágrafos usamos a tag <p>
-->
<p>Parágrafo</p>

<!--
Precisamos dizer para o computador qual icode ele vai mostrar na página, no caso UTF8.
Para isso usamos uma tag chamada meta, usada para mostrar meta dados, ou seja mostrar 
para o navegador dados sobre nosso conteudo
-->
<meta charset="utf-8">

<!--
Para mostrar o título da página na aba do navegador usamos a tag <title> -->
<title>Minha Página</title>
<head> toda a parte operacioal</head>
<body> corpo todo o conteúdo </body>
<html> Para mostrar para o navegador que a liguagem que estamos nos comunicando é html </html>
<!DOCTYPE html>
Serve para mostrar que estamos usando a última versao disponível de html
<link rel="folha de estilos" href="qual lugar está o css"> 
<!-- Serve para fazer a ligação do arquivo css com o html-->
```
### Elementos básicos do CSS: seletor, propriedade e valor
```css
  seletor{
      propriedade: valor;
  }
/*
  O que? propriedade ( cor da fonte)
  Onde? seletor ( títulos h1)
  Como? valor( azul)
*/
  h1 {
      color: blue;
  }
/* Não usar código css dentro do html*/
```
### Limpando o CSS padrão
```
Para apagar todas as configurações padrões dos
navegadores, e garantir que nosso CSS vai rodar
igual em todos os navegadores.

https://meyerweb.com/eric/tools/css/reset/
```
