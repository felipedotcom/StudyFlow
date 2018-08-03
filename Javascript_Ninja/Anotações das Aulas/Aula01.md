
### Variáveis
```js
// Variáveis são nomes simbólicos dado para um tipo de valor
 var numero = 1;
```

### Tipos de dados
```js
"string" // sequência de caracteres
undefined  // Ausencia de valor (nao existe)
NaN  Not a number //quando deveria ser um numero, mas nao é
boolean(true / false): //verdadeiro ou falso
```
### Objetos - tem propriedades e métodos

```js
//representação de objeto
var pessoa = {};

// objeto pessoa
pessoa = {
	altura: 1.87,
	peso: 80
	};

// acessando uma propriedade do objeto pessoa
pessoa.altura;

// propriedades podem ser alteradas
pessoa.altura = 1.99;
```

### Array -  é uma lista de valores
```js
// representação de array

var nomes = ['ronaldo','rodriguinho','danilo'];

// valores do array são acessados através de indices

nomes[0] = 'ronaldo' //idice de um array inicia do 0
nomes[1] = 'rodriguinho'
nomes[2] = 'danilo'
```

### Operadores
```js
* abreviados
1. +=, -=, *=, /=
2. (soma = soma + 1) => soma += 1
3. (multiplicacao = multiplicacao * 1) => multiplicacao *= 1

* igualdade
1. == igual
2. != diferente
3. === igual e do mesmo tipo, nesse caso 1 === '1' é false, porque número é diferente de string
4. !== diferente mas do mesmo tipo

//Javascript faz conversão de tipo, então 1 == '1' é true porque o js converte a string 1 para número

* relacionais
1. > menor
2. < maior
3. >= menor igual
4. <= maior igual
```

### Funcões
```js
//Funções são blocos de códigos nomeados
function soma(){
	x = x + 1;
};

// invocando a função soma
soma();

// Toda variável declarada dentro da função só vale dentro da função
// Função também pode retornar valores

function qualquer(){
	var ronaldo = "fenomeno";
	return ronaldo;
};

// invocando a função qualquer
qualquer(); // retorna fenomeno

// Funções também podem receber parametros, que nada mais são que valores passados para uma função.
function soma(x,y){
	return x + y;
};
//x = 1 e y = 2
soma(1,2); // o resultado dessa chamada é a soma x + y
```
