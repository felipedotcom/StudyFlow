### Retorno de funções 
```js 
// É possível também retornar arrays e objetos em uma função
// Exemplo de retorno de array:

  function myFunction() {
    return [1,2,3];
  }
 
  myFunction(); //[1,2,3]
// Retorna o indice 0 do array
  myFunction()[0]; //1
  
// Exemplo de retorno de objeto: 
  
  function myFunction(){
      return {
          prop1: 1,
          prop2: "ronaldo",
          prop3 : function(){
              return "prop3";
          }
      }
  }

// Chamando a função ela devolve um objeto com todas propriedades: 
    myFunction();
    { prop1: 1,
      prop2: "ronaldo",
      prop3: [Function]  }
      
// Acessando a propriedade do objeto:
    myFunction().prop1; // 1

// Também é possível passar a função myFunction para uma variável:
    var values = myFunction();
    
    values // Chamando a variável values 
    { prop1: 1,
        prop2: "ronaldo",
        prop3: [Function]  }
// Acessando a propriedade do objeto
    values.prop2; //'ronaldo'   
```
### Parâmetros de funções 
```js
// É possível passar arrays e objetos por parâmetros 
   var array = [1, 2, 3];

    function myFunction(argumento){
        return argumento;
    };

// Chamando a função e passando o array como argumento
    myFunction(array); //[1,2,3]

    function myFunction2(argumento) {
        return argumento[1]; // retorna o segundo elemento do array
    };
  
// Passando um array como parâmetro da função
    myFunction2([1,5,7,8]);// 5 (retorna o segundo elemento do array)
  
// Passando objeto por argumento na função 

    var objeto ={
        propriedade: 'ronaldo',
        curso: 'ADS',
        ninja: true
    }

    function myFunction(argumento){
        return argumento;
    };
  
    myFunction(objeto); // Chamando a função e passando objeto como parâmetro
    // resultado: 
      {   propriedade: 'ronaldo',
          curso: 'ADS',
          ninja: true
      }
    
    myFunction(objeto).curso; // Acessando a propriedade do objeto
    'ADS'
    myFunction(objeto).propriedade;
    'ronaldo'
    //Outro exemplo de retorno
    function myFunction2(argumento) = {
        return argumento.curso;
    };

    myFunction2(objeto);
    'ADS'
```
