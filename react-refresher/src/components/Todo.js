function Todo({ text }) {
  function deleteTodoHandle() {
    console.log("clicked!");
    console.log(text);
  }
  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteTodoHandle}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
