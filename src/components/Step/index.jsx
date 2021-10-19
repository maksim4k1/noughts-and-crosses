import React from "react";

function Step ({id, type, square,}) {
  return(
    <button className="step">
      <span>{id})</span> ход <span>"{type}"</span> на клетку <span>"{square + 1}"</span>
    </button>
  );
}

export default Step;