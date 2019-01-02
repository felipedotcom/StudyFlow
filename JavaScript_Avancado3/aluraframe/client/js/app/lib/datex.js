"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, DateHelper;

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

            DateHelper = function () {
                function DateHelper() {
                    _classCallCheck(this, DateHelper);
                }

                _createClass(DateHelper, [{
                    key: "dateToString",
                    value: function dateToString(date) {
                        /* faz algo */
                    }
                }, {
                    key: "stringToDate",
                    value: function stringToDate(string) {}
                    /* faz algo */


                    /* outros métodos */

                }]);

                return DateHelper;
            }();
        }
    };
});
//# sourceMappingURL=datex.js.map