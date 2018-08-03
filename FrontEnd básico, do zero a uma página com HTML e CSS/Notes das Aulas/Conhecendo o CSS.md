### Tipos de seletores: tag, class, id
```css
/* Classe em CSS, reutilizar em outros lugares
   A melhor forma de nomear classes é relacionar ao
   conteúdo, não deve ser relacionado a aparência
   EX: carrinho, container, post*/

.nome-legal{
     color: red;
 }

/* ID em CSS, só vai ser usado em um único lugar  */
#outro-nome{
    color: blue;
}
```
### Brincando com seletores
```css
/* Sempre ler o css da direita para esquerda.
Os elementos modificados ficam a direita e tudo que
tiver a esquerda são qualificadores vão deixar o
css mais específico
No CSS o espaço ou a falta dele muda totalmente o seletor
final */

 /* batalha-naval é a classe
    p é o seletor de tipo que
    referencia uma tag.
    O espaço entre eles representa que
    p está dentro de batalha naval, ou seja p
    é filho de batalha naval */

.batalha-naval p {
    color: blue;
}
/* Selecionando todas as classes navios
   que também são parágrafos e que são
   filhos de batalha naval*/
.batalha-naval p.navio {
    color: gray;
}

```
### Cores
```css
/* RGB
 # RED GREEN BLUE
 Variações dessas combinações formam cores diferentes
 F(representa o vermelho)F(representa a presença do vermelho)
 0000( representa ausência das cores )
 #FF0000 RED
 #00FF00 GREEN
 #0000FF BLUE
 */

 /* Formato Reduzido, só pode usar quando todos os pares forem iguais
 #F00
 #0F0
 #00F
 */
```
site do [color adobe](https://color.adobe.com/pt/create/color-wheel/)
![adobe](https://blogsimages.adobe.com/richardcurtis/files/2013/05/Screen-Shot-2013-05-30-at-18.17.13-1024x675.png)

```css
h1 {
  color: #FFF; /* Muda a cor da fonte*/
}
```
### Unidades de medida: absoluta e relativas
```css
/* Unidades Absolutas: São unidades fixas, sendo a principal o pixel*/
p {
  font-size: 14px; /* deixa todos os p com tamanho de 14px*/
}
/* Unidades Relativas: Não são fixas, dando maior flexibilidade para o layout
São relativas ao elemento pai, que é o elemento alinhado com o qual
eu estou estilizando e tem que ter uma medida definida, % */
section {
  width: 500px;
}

p {
  width: 50%; /* Pegando 50% do elemento pai que é section*/
}
em /* Unidade de medida relacionada a fonte, que representa X vezes
o tamanho da fonte daquele contexto*/

font-weight /* Espessura da fonte*/
font-weight: bold; /* Negrito */
/* Se o navegador não encontrar o nome da família e pega o nome
da fonte genérica */
font-family /* Define uma lista de propriedades para o tipo de fonte*/
font-family: Arial, sans-serif; /* nome da família, família genérica*/
/*
Fonte Serifada: Tem prolongamentos, usadas em textos longos e impressos
Sem serifa é mais reta, sem prolongamentos e são mais indicadas para
meios digitais, são mais limpas.
*/
```