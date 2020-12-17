import { Board as BoardEntity } from "core"
import React, { useState } from "react"
import { useDrop } from "react-dnd"
import "./Board.css"
import BoardItem from "./BoardItem"

interface BoardProps {}
class BoardState extends BoardEntity {}

const Board: React.FC<BoardProps> = ({}) => {
  const [board, setBoard] = useState<BoardState>(BoardState.getExample())

  const [, drop] = useDrop({
    accept: ItemTypes.Item,
    drop: (item: DragItem, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset()
      const left = Math.round(item.x + delta!.x)
      const top = Math.round(item.y + delta!.y)
      moveItem(item.id, left, top)
      return undefined
    }
  })

  const moveItem = (id: number, x: number, y: number) => {
    const items = board.items
    items[id].position = { x, y }
    setBoard({ items })
  }

  const getItems = () => board.items.map((boardItem, index) => {
    const {item, position} = boardItem
    return (
      <BoardItem id={index} position={position} item={item} />
    )
  })

  return (
    <div className="Board" ref={drop}>
        {getItems()}
    </div>
  )
}

export const ItemTypes = {
  Item: 'item'
}

export interface DragItem {
  type: string
  id: number
  x: number
  y: number
}

export default Board;
