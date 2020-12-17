export class Card {
  content: string
  color?: Card.Color
  
  constructor(content: string, color: Card.Color = Card.Color.Default) {
    this.content = content
    this.color = color    
  }
}

export namespace Card {
  export enum Color {
    Blue = 'blue',
    Pink = 'pink',
    Default = Pink,
  }
}
