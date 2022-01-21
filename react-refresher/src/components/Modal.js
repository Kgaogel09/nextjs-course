function Modal({ closeModal }) {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn" onClick={closeModal}>
        Confirm
      </button>
      <button className="btn btn-alt" onClick={closeModal}>
        Cancel
      </button>
    </div>
  );
}

export default Modal;
