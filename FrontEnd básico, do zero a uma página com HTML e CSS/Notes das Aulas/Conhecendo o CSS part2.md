### Display
```css
/* Display é usada para controlar o layout
block - quebra de linha
      - não permite elemento ao lado

inline - sem quebra

inline-block - tamanho definido
             - sem quebra

none - não existe na tela
*/
width /* largura, o tamanho padrão dela vai depender
do display do elemento
Se for um elemento block, o tamanho padrão é 100%
da largura
Se for elemento inline-block, o tamanho se ajusta por
padrão
Elementos inline não possuem largura, width não podem
ser aplicados a ele
*/
height /* altura, é determinada por padrão pelo tamanho do seu conteúdo,
não é aplicável a elementos inline */
```
### Border
```css
/*
Valores da propriedade border
Width: Define a espessura
Style: Mias usados são solid, dotted, dashed
Color: Cores
*/
border: 1px solid #fff;
/* Definir diferentes bordas em um retângulo */
border-top
border-right
border-left
border-bottom
```
### Margin x Padding
```css
/*
Margin: acrescenta um espaço para fora da caixa conteúdo.
Padding: acrescenta um espaço interno ao elemento.
Border: Separa o Margin do Padding, e determina o espaço do conteúdo.

Seguir sempre no sentido horário para definir margin ou padding, e
os opostos são agrupados
*/
margin: 1em 2em 3em;  /* Só defini o right, o left agrupa e tem o mesmo valor */
margin: 1em; /* Assume o valor para todos os lados*/
/* margin para elementos top e botton in-line não funciona*/
```
### box-sizing
```css
/*
Navegador calcula de forma diferente o tamanho de um elemento.
*/
content-box /* Valor default, todos os elementos nascem com box-sizing content-box.
Para calcular o width e o height, consideramos apenas o conteúdo*/
border-box /* Vai contar até a borda
Quando construimos as páginas queremos que todos os elementos sejam
border-box, para ter um controle melhor sobre o que está sendo contado.
Então coloca-se border-box em todos os elementos
*/
* { /* seletor que vai pegar tudo da página */
  box-sizing: border-box;
}
```
### Float: pensandomais em posicionamento
```css
float /* Qualquer elemento com float, vai sair do display */
clear: both /* Serve para apagar a bagunça do float com o fluxo da página
É aplicado ao elemento após o uso do flot*/
.clear-fix { /* Classe para apagar o float*/
  clear: both;
}
```
### Position
```css
/* Com o uso do float, tiramos o elemento do fluxo da página e jogamos 
os elementos para direita ou para esquerda, e o resto dos elementos ficam em volta 
do elemento com float.

Display line-inblock, facilita fazer um layout composto por colunas, 
mas é mais dificil colocar ele em um lugar específico da página.
Para conseguir fazer isso usamos a propriedade position.
*/
position /* Como o elemento está posicionado na página, se ele faz parte ou não do fluxo da página */
```
### Propriedades do Texto
```css
text-align: /*Para mexer no alinhamento do texto*/
text-transform: uppercase; /* Deixa tudo maiúsculo */
a {
  text-decoration: none; /* Vai deixar todos os links sem sublinhado*/
}

line-height /* Aumenta o espaçamento entre as linhas dos textos*/
```
### Background-image
```css
text-indent /* Regula o recuo da primeira linha de um parágrafo*/
```
