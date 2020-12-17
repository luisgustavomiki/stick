import { Card } from "./card";

export class Board { 
  items: BoardItem[]

  constructor(items: BoardItem[]) {
    this.items = items
  }

  static getExample(): Board {
    return {
      items: [
        { item: { content: "Test", color: Card.Color.Pink}, position: {x: 150, y: 150} },
        { item: { content: "Manga", color: Card.Color.Pink}, position: {x: 350, y: 150} },
        { item: { content: "Lerisha", color: Card.Color.Blue}, position: {x: 0, y: 20} }
      ]
    }
  }
}

export class BoardItem {
  item: Card
  position: Position

  constructor(item: Card, position: Position) {
    this.item = item
    this.position = position
  }
}

export interface Position {
  x: number
  y: number
}
