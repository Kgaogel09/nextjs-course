import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo({ text }) {
  const [modal, setModal] = useState(false);
  const [backdrop, setBackdrop] = useState(false);

  function deleteTodoHandler() {
    setModal(!modal);
    setBackdrop(!backdrop);
    console.log(text);
  }

  function closeModalHandler(params) {
    setModal(!modal);
    setBackdrop(!backdrop);
  }

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteTodoHandler}>
          Delete
        </button>
      </div>
      {backdrop && <Backdrop closeModal={closeModalHandler} />}
      {modal && <Modal closeModal={closeModalHandler} />}
    </div>
  );
}

export default Todo;
