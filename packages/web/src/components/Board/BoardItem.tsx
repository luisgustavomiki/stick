import { BoardItem as BoardItemEntity, Card as CardEntity, Position } from "core";
import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./Board";
import "./BoardItem.css";
import Card from "../Card"

// unfortunately necessary since BoardItem component
// needs to hold index to further reference it back
// to `useDrop`
class BoardItemProps extends BoardItemEntity {
  id: number

  constructor(id: number, item: CardEntity, position: Position) {
    super(item, position)
    this.id = id
  }
}

const BoardItem: React.FC<BoardItemProps> = ({id, item, position}) => {
  const {x, y} = position

  const [{isDragging}, drag] = useDrag({
    item: {id, x, y, type: ItemTypes.Item},
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  })

  if (isDragging) {
    return (
      <div ref={drag} className="BoardItem" style={{ left: x, top: y }}>
      </div>
    )
  }

  return (
    <div ref={drag} className="BoardItem" style={{ left: x, top: y }}>
      <Card content={item.content} color={item.color}></Card>
    </div>
  )
}

export default BoardItem
