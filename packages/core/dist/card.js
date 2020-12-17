"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var Card = /** @class */ (function () {
    function Card(data, color) {
        this.data = data;
        this.color = color;
    }
    return Card;
}());
exports.Card = Card;
(function (Card) {
    var Color;
    (function (Color) {
        Color[Color["Pink"] = 0] = "Pink";
        Color[Color["Default"] = 0] = "Default";
    })(Color = Card.Color || (Card.Color = {}));
    var Data = /** @class */ (function () {
        function Data(type, value) {
            this.type = type;
            this.value = value;
        }
        return Data;
    }());
    Card.Data = Data;
    var Type;
    (function (Type) {
        Type[Type["Number"] = 0] = "Number";
        Type[Type["String"] = 1] = "String";
    })(Type = Card.Type || (Card.Type = {}));
})(Card = exports.Card || (exports.Card = {}));
exports.Card = Card;
//# sourceMappingURL=card.js.map