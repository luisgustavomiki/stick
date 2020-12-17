import { Card as CardEntity } from "core";
import React from "react";
import "./Card.css";

class CardProps extends CardEntity {}

const Card: React.FC<CardProps> = ({content, color}) => {
  const getClassName = () => color ? `Card ${color.toString()}` : "Card"

  return (
    <div className={getClassName()}>
      {content}
    </div>
  );
}

export default Card; 
