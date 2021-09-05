import React from "react";
import style from "./Square.module.scss";

function Square ({id, type, onClickHandler}) {
  return(
    <button className={style.square} onClick={() => onClickHandler(id)}>
      {type}
    </button>
  );
}

export default Square;