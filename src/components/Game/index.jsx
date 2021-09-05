import { useState } from "react"
import Board from "../Board";
import Modal from "../Modal";
import Steps from "../Steps";

const Game = () => {
  const [history, setHistory] = useState(Array(9).fill({}));
  const [type, setType] = useState("X");
  const [winner, setWinner] = useState("");
  const [step, setStep] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  const wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]

  function clickHandler(id){
    const newHistory = [...history];
    if(!newHistory[id].type && !winner){
      newHistory[id] = {id, type, step, history: newHistory};
      setHistory(newHistory);
      setStep(step + 1);
      if(type === "X"){
        setType("O")
      } else{
        setType("X")
      }

      const xSquares = newHistory.filter(item => item.type === "X").map(item => item.id);
      const oSquares = newHistory.filter(item => item.type === "O").map(item => item.id);
      
      let isWinX = false;
      let isWinO = false;
      for(let i = 0; i < wins.length; i++){
        for(let j = 0; j < wins[i].length; j++){
          if(xSquares.find(item => item === wins[i][j]) === undefined){
            isWinX = false;
            break;
          } else{
            isWinX = true;
          }
        }
        for(let j = 0; j < wins[i].length; j++){
          if(oSquares.find(item => item === wins[i][j]) === undefined){
            isWinO = false;
            break;
          } else{
            isWinO = true;
          }
        }
        if(isWinX || isWinO){
          break;
        }
      }
      if(isWinX || isWinO){
        if(isWinX){
          setWinner("X");
        } else if(isWinO){
          setWinner("O");
        } else if(newHistory.filter(item => item.id !== undefined).length === 9){
          setWinner("Ничья!");
        }
        setOpenModal(true);
        setStep(1);
      }
    }
  }
  function historyHandler(id){
    setHistory(history[id].history);
    setStep(history[id].step + 1);
    setWinner("");
  }
  function clearHistoryHandler(){
    setHistory(Array(9).fill({}));
    setStep(1);
    setWinner("");
  }

  return(
    <div className="content" style={{display: "flex", gap: "50px"}}>
      <Modal isOpenModal={openModal}>
        {
          winner ?
          <div className="winner">{winner === "X" ? "Крестики победили!" : winner === "O" ? "Нолики победили!" : winner}</div>
          : null
        }
        <div className="buttons">
          <button className="button dark" onClick={() => {clearHistoryHandler(); setOpenModal(false);}}>Новая игра</button>
          <button className="button dark" onClick={() => setOpenModal(false)}>Продолжить</button>
        </div>
      </Modal>
      <div>
        <h1 className="title">Крестики-нолики</h1>
        <Board
          squares={history}
          onClickHandler={clickHandler}
        />
      </div>
      <div>
        <Steps
          steps={history}
          onClickHandler={historyHandler}
        />
        <button className="button" onClick={clearHistoryHandler}>Сбросить</button>
      </div>
    </div>
  )
}

export default Game;