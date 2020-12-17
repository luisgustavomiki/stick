export declare class Card {
    data: Card.Data;
    color: Card.Color;
    constructor(data: Card.Data, color: Card.Color);
}
export declare namespace Card {
    enum Color {
        Pink = 0,
        Default = 0
    }
    class Data {
        type: Type;
        value: unknown;
        constructor(type: Type, value: unknown);
    }
    enum Type {
        Number = 0,
        String = 1
    }
}
//# sourceMappingURL=card.d.ts.map