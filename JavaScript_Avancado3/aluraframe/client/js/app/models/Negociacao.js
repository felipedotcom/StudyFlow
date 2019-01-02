"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, Negociacao;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export("Negociacao", Negociacao = function () {
                function Negociacao(data, quantidade, valor) {
                    _classCallCheck(this, Negociacao);

                    this._data = new Date(data.getTime());
                    this._quantidade = quantidade;
                    this._valor = valor;
                    Object.freeze(this);
                }

                _createClass(Negociacao, [{
                    key: "volume",
                    get: function get() {

                        return this._quantidade * this._valor;
                    }
                }, {
                    key: "data",
                    get: function get() {

                        return new Date(this._data.getTime());
                    }
                }, {
                    key: "quantidade",
                    get: function get() {

                        return this._quantidade;
                    }
                }, {
                    key: "valor",
                    get: function get() {

                        return this._valor;
                    }
                }]);

                return Negociacao;
            }());

            _export("Negociacao", Negociacao);
        }
    };
});
//# sourceMappingURL=Negociacao.js.map