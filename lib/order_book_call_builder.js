"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var CallBuilder = require("./call_builder").CallBuilder;

var OrderBookCallBuilder = exports.OrderBookCallBuilder = (function (_CallBuilder) {
    function OrderBookCallBuilder(serverUrl) {
        _classCallCheck(this, OrderBookCallBuilder);

        _get(Object.getPrototypeOf(OrderBookCallBuilder.prototype), "constructor", this).call(this, serverUrl);
        this.url.segment("order_book");
    }

    _inherits(OrderBookCallBuilder, _CallBuilder);

    _createClass(OrderBookCallBuilder, {
        assetPair: {
            value: function assetPair(baseAsset, quoteAsset) {
                var isBuy = arguments[2] === undefined ? false : arguments[2];

                this.url.addQuery("base_asset", baseAsset);
                this.url.addQuery("quote_asset", quoteAsset);
                this.url.addQuery("is_buy", isBuy);
                return this;
            }
        },
        forOrderBookID: {
            value: function forOrderBookID(orderBookID) {
                this.url.addQuery("order_book_id", orderBookID);
                return this;
            }
        },
        forOwnerID: {
            value: function forOwnerID(ownerID) {
                this.url.addQuery("owner_id", ownerID);
                return this;
            }
        }
    });

    return OrderBookCallBuilder;
})(CallBuilder);