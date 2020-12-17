"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardItem = exports.Board = void 0;
var card_1 = require("./card");
var Board = /** @class */ (function () {
    function Board(items) {
        this.items = items;
    }
    Board.getExample = function () {
        return {
            items: [
                { item: { content: "Test", color: card_1.Card.Color.Pink }, position: { x: 150, y: 150 } },
                { item: { content: "Manga", color: card_1.Card.Color.Pink }, position: { x: 350, y: 150 } },
                { item: { content: "Lerisha", color: card_1.Card.Color.Blue }, position: { x: 0, y: 20 } }
            ]
        };
    };
    return Board;
}());
exports.Board = Board;
var BoardItem = /** @class */ (function () {
    function BoardItem(item, position) {
        this.item = item;
        this.position = position;
    }
    return BoardItem;
}());
exports.BoardItem = BoardItem;
//# sourceMappingURL=board.js.map