import React from "react";
import style from "./Modal.module.scss";

function Modal ({children, isOpenModal}) {
  return(
    <div className={style.bg} style={isOpenModal ? {visibility: "visible", opacity: 1} : {visibility: "hidden", opacity: 0}}>
      <div className={style.content}>
        {children}
      </div>
    </div>
  );
}

export default Modal;