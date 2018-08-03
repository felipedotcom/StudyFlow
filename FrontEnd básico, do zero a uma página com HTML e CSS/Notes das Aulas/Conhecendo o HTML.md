### Elementos inline e em bloco
```html
<div> blocos </div>
<span> in-line </span>
<!--
Funcionam como Containers, para ajudar nos
estilos no CSS.

Elementos em blocos: empilhados um embaixo do outro,
ocupam toda a largura disponível e podem envolver outros elemntos in-line.

Elementos in-line: alinhados um após o outro, são usados em conteúdos menores.
-->
```
### Cabeçalhos e parágrafos
```html
<!-- Cabeçalhos vão do h1 até o h6, ajudam a estabelecer
    hieraquia e separar o conteúdo
-->
  <h1>Cabeçalho mais importante</h1>
  <h6>Cabeçalho menos importante</h6>
<!-- Parágrafos, são elementos de blocos, que servem
    para trazer informações para uma página
-->
  <p>Parágrafo</p>
<!-- Elementos in-line que simulam negrito e itálico
-->
<strong>Negrito</strong>
<em>Itálico</em>
```
### Listas
```html
<!--
  listas ordenadas: Mostra elementos ordenados, e que contéum
  uma contagem que vem antes do elemento.
  listas desordenadas: listas que não importam a ordem
-->
<ol>Lista Ordenada</ol>
<li>Lista</li>
<ul>Lista Desordenada</ul>
```
### Estrutura da Página
![tbls](https://raw.githubusercontent.com/diegoeis/tableless-static-images/master/2013/08/html5-estrutura-420x310.png)
```html
<header> <!-- Cabeçalho, serve para identificar o topo da página,
seção, artigo ou qualquer outro segmento de página.
Fica dentro da tag <body> e seu conteúdo é mostrado na
página.
Dentro da tag <header> podemos colocar um menu de navegação,
para isso é usado a tag <nav> -->
    
<section> <!-- Seção, é utilizada para identificar agrupados de conteúdos relacionados.
Dentro da seção temos conteúdos mais específicos, como artigos, comentários e etc -->
<article> <!-- Artigo, conteúdo idependente da página -->
    
<aside> <!-- Conteúdo que vem ao lado do conteúdo principal,
geralmente servindo como um complemento.Como por exemplo: avisos,
biografia do autor, link de blogs etc  -->
    
<footer> <!-- Rodapé -->
```
### Links
```html
<!-- Link Absoluto-->
<a href="https://www.google.com">Google</a>
<!-- Link Relativo-->
<a href="palestras.html">Palestras</a>
<!-- E-mail -->
<a href="mailto:email@email.com">email</a>
<!-- Para abrir o link em outra aba usa o target _blank-->
<a href="mailto:email@email.com" target="_blank">email</a>
```
### Imagens
```html
<!-- Tag img para colocar imagens na página
    Tag alt: Descrição da imagem-->
<img src="projeto.png" alt="Imagem de uma lâmpada
para representar todos os projetos">
```
