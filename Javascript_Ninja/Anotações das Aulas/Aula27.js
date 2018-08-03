(function(doc) {
  'use strict';

  function afterDomContentLoaded() {
    alert('DOMContentLoaded');
    var fragment = doc.createDocumentFragment();
    var childP = doc.createElement('p');
    var textChildP = doc.createTextNode('Texto da tag P!');

    childP.appendChild(textChildP);
    fragment.appendChild(childP);

    doc.body.appendChild(fragment);
  }

  function afterWindowLoad(){
    alert('AfterWindowLoad');
  }

  doc.addEventListener('DOMContentLoaded', afterDomContentLoaded, false);
  window.addEventListener('load', afterWindowLoad, false);

})(document);