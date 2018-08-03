### Sync vs Async
```js
/* Síncrono = Quando eu tenho um evento, um comando ou algo que está acontecendo
   um comando após o outro:
   Ex:*/
    (function(win, doc) {
        'use strict';

        console.log( 0 );
        for( var i = 1; i <= 10; i++ ){ /* Método sincrono, enquanto ele nao para de fazer a
                                        iteração ele nao deixa o usuario intergir com  tela */
            console.log( i );
        }
        console.log( 11 );
    })(window, document);

/* Assincrono: Quando trabalhamos com eventos, quando precisamos aguardar uma ação do usuário.
   JS trabalha com uma única thread, então ele executa um programa atras do outro, se tiver um
   comando que bloqueie todo o conteúdo o qualquer ação em uma thread, essa thread fica
   completamente bloqueada.
  Ta na fila do event loop, só vai executar quando o evento for disparado,ele joga na thread principal
  ai executa
  Ex:                                                               */
    (function(win, doc) {
        'use strict';

        console.log( 'inicio' );
        document.addEventListener('click', function() { // funcão de callback ou retorno
            console.log( 'clicou no documento'); //
        }, false);
        console.log( 'fim' );
    })(window, document);
```
### Event loop
![evlop](https://image.slidesharecdn.com/nodejsexplained-130219213912-phpapp02/95/nodejs-explained-12-638.jpg?cb=1386103418)


### setTimeOut
```js
//Temporizador é uma built-in timer functions
// setTimeOut - joga a função uma vez para o eventloop e para
(function(win, doc) {
        'use strict';

        console.log( 'inicio' );
        // function de callback, tempo em milisegundos
        setTimeout(function(){// faz retorno assincrono
            console.log( 'executou setTimeout');
        }, 1000);// Um segundo depois de realizar a leitura ele  executa setTimeout
        console.log( 'fim' );
        /* ele mostra inicio. fim. executou setTime out, por que a funcao de callback foi
        jogada para o eventloop */
    })(window, document);

/* setInterval - continua infinitamente rodando e a
  cada x tempo fica jogando a função para o eventloop.
  Como coloca o setInterval funcao muitas vezes no
  eventloop isso pode deixar a aplicação lenta */

(function(win, doc) {
        'use strict';

        console.log( 'inicio' );
        // function de callback, tempo em milisegundos
        setInterval(function(){// faz retorno assincrono
            console.log( 'executou setInterval');
        }, 1000);/* Um segundo depois de realizar a leitura ele  executa
                    setInterval infinitamente */
        console.log( 'fim' );
        /* ele mostra inicio. fim. executou setInterval,
            por que a funcao de callback foi
            jogada para o eventloop infinita vezes */

    })(window, document);

/* setTimeout Recursivo, só coloca o setTimeout na fila
   de novo quando todos os outros processos do eventloop
   tiverem acabado */

(function(win, doc) {
        'use strict';

        var counter = 0;
        function timer(){
            console.log( 'timer', counter++ );
            if( counter > 10)
                return; // parando a função
            setTimeout( timer, 1000);
        }
        timer();
    })(window, document);
```
### setTimeout vs setInterval
```js
/*setTimeOut - executa apenas uma vez
  setInterval - executa várias vezes, não tem problema usar se for com tempo grande tipo 1 minuto */

   (function(win, doc) {
        'use strict';

        var counter = 0;
        var $button = doc.querySelector('[data-js="button"]');
        var temporizador;
        function timer(){
            console.log( 'timer', counter++ );
            if( counter > 20)
                return; // parando a função
            temporizador = setTimeout( timer, 1000);
            // temporizador, recebe o id do setTimeout
        }
        timer();

        $button.addEventListener( 'click', function() {
            clearTimeout(temporizador); // para o setTimeout
        }, false);
    })(window, document);

```