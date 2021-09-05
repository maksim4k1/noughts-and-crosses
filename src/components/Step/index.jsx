import React from "react";

function Step ({id, type, square, onClickHandler}) {
  return(
    <button className="step" onClick={() => onClickHandler(id - 1)}>
      <span>{id})</span> ход <span>"{type}"</span> на клетку <span>"{square + 1}"</span>
    </button>
  );
}

export default Step;