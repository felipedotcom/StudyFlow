### Tipos de dados e objetos 
#### tipos primitivos  
> number  
> string  
> undefined: valor não foi passado ou não existe para aquela variável    
> null : ausência de valor, mas é preciso atribui-lo explicitamente para uma variável 
> todos os outros tipos são objetos   
 

### Objetos são conjuntos de propriedades que recebem nome e um valor
```js
   // representação de objeto
   {propriedade: 'valor'}; 
     
   // objeto pessoa
    pessoa
    { nome: 'ronaldo',
      idade: 30,
      peso: 70, 
      altura: 1.87 };
      
   // atribuindo um objeto a uma variável
    var pessoa = {nome: 'ronaldo',idade : 30, peso: 70, altura: 1.87 };
   
   // para acessar os atributos da pessoa 
    pessoa.nome 
    pessoa.idade 
    
    // para adicionar outra propriedade a pessoa
    pessoa.cor = 'azul';

```
### Funções sao objetos de primeira classe porque eles podem ser atribuidos a variáveis 
```js
    // exemplo de objeto atribuido a uma função 
    // quando atribuimos uma função a uma variável ela nao precisa de nome
    
    var myvar = function(){return 'variavel myvar';}
    myvar(); // chamando a função myvar
    'variavel myvar' // resultado da chamada
    
```
### Os método sao as açoes da pessoa
```js
    // método para fazer a pessoa andar
    
    pessoa.andar = function(){
        return 'pessoa andando';
    };
    
    // método para fazer aniversário
    
     pessoa.aniversario = function(){
        pessoa.idade++;
    };
    
    // adicionando a propriedade sobrenome 
        pessoa.sobrenome = 'fenomeno'
        
    // método para retornar nome completo
    
      pessoa.nomeCompleto = function(){
        return pessoa.nome + " " + pessoa.sobrenome;
      };
    // chamando o objeto pessoa
    
      pessoa
        { nome: 'ronaldo',
        idade: 31,
        peso: 70, 
        altura: 1.87
        andar: [Function] 
        sobrenome: 'fenomeno'
        nomeCompleto: [Function]};

    // chamando o método nomeCompleto
    
        pessoa.nomeCompleto();
        'ronaldo fenomeno'// retorno da chamada do método
``
