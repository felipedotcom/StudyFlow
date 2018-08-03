(function() {
  'use strict';

  var $main1 = document.querySelector('.main');
    console.log( $main1.parentNode );
    console.log( $main1.childNodes );
    console.log( $main1.firstChild );
    console.log( $main1.lastChild );
    console.log( $main1.nextSibling );
    console.log( $main1.previousSibling);
    console.log( $main1.nodeType);
    console.log( $main1.firstElementChild.nextElementSibling );
    console.log( $main1.childElementCount );
    console.log( $main1.hasAttribute('class') );

  var $main2 = document.querySelector('.main-content');
    console.log( $main2.firstChild.nodeValue );
    console.log( $main2.firstChild.nextSibling.nodeValue );
    console.log( $main2.firstChild.nextSibling.nodeName );
    console.log( $main2.children );
    console.log( $main2.firstElementChild );
    console.log( $main.firstElementChild.hasAttributes());

  var $main3 = document.querySelector('.main');
  var $mainContent = document.querySelector('.main-content');
  var $mainHeader = document.querySelector('.main-header');
  var $mainFooter = document.querySelector( '.main-footer' );
  var $h1 = $mainHeader.firstElementChild;
  var $firstText = $mainContent.firstChild;
    $mainContent.appendChild($mainHeader);
    $mainContent.insertBefore($mainHeader, $firstText);
  var cloneMainHeader = $mainHeader.cloneNode( true );
    $mainContent.appendChild($cloneMainHeader);
    console.log( document.querySelectorAll('.main-header').length);
    console.log( $h1.hasChildNodes());
    $mainHeader.removeChild( $h1 );
    $main.replaceChild($mainHeader, $mainFooter);
    $main.replaceChild($cloneMainHeader, $mainFooter); //dois headers na pag

  var newTextNode = document.createTextNode('Opa');
    $main.appendChild(newTextNode);// aparece depois do último elemento

  var newTextNode2 = document.createTextNode('Novo P');
  var $newP = document.createElement('p');

    $newP.appendChild( newTextNode2 );
    $main1.appendChild( $newP );

    console.log( $main1.className ); // className para pegar nomes de classe
    console.log( $main1.id );
    console.log( $main1.getAttribute('data-js') );

    console.log(
      parseInt($main.getAttribute('data-number1'),10) +
      parseInt($main.getAttribute('data-number2'),10)
    );

    console.log($main.setAttribute('data-js', 'main-js'));


})();