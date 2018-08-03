(function () {
  'use strict';

  var ajax = new XMLHttpRequest();

  ajax.open('GET', '/data/data.json' );
  ajax.send();

  console.log('Carregando .....');
  var response = '';
  ajax.addEventListener('readystatechange', function(){
    if( isRequestOk() ) {

      //console.log('Requisição ok\n', JSON.parse(ajax.responseText).message);
      try {
        response = JSON.parse(ajax.responseText);
      }
      catch(e) {
        response = ajax.responseText;
      }
      console.log(response);
    }
  }, false);

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }
})();