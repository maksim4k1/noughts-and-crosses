import React from "react";
import Square from "../Square";
import style from "./Board.module.scss";

function Board ({squares, onClickHandler}) {
  return(
    <div className={style.board}>
      {
        squares.map((item, index) => {
          return <Square key={index} id={index} type={item.type} onClickHandler={() => onClickHandler(index)}/>
        })
      }
    </div>
  );
}

export default Board;