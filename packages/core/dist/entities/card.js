"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var Card = /** @class */ (function () {
    function Card(content, color) {
        if (color === void 0) { color = Card.Color.Default; }
        this.content = content;
        this.color = color;
    }
    return Card;
}());
exports.Card = Card;
(function (Card) {
    var Color;
    (function (Color) {
        Color["Blue"] = "blue";
        Color["Pink"] = "pink";
        Color["Default"] = "pink";
    })(Color = Card.Color || (Card.Color = {}));
})(Card = exports.Card || (exports.Card = {}));
exports.Card = Card;
//# sourceMappingURL=card.js.map