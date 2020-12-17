import { Card } from "./card";
export declare class Board {
    items: BoardItem[];
    constructor(items: BoardItem[]);
    static getExample(): Board;
}
export declare class BoardItem {
    item: Card;
    position: Position;
    constructor(item: Card, position: Position);
}
export interface Position {
    x: number;
    y: number;
}
//# sourceMappingURL=board.d.ts.map