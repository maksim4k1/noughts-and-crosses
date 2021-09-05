import React from "react";
import Step from "../Step";

function Steps ({steps, onClickHandler}) {
  const sortedSteps = [...steps].sort((a, b) => a.step - b.step);
  return(
    <ul className="steps">
      <h2 className="steps__title">История ходов:</h2>
      {
        sortedSteps.filter(item => item.step !== undefined).length
        ? sortedSteps.map((item, index) => {
          return item.step
          ? <Step key={index} id={item.step} type={item.type} square={item.id} onClickHandler={onClickHandler}/>
          : null
        })
        : <div style={{textAlign: "center"}}>Ходов не было</div>
      }
    </ul>
  );
}

export default Steps;