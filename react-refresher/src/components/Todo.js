function Todo({ title }) {
  function deleteTodoHandle(e) {
    console.log(e);
  }
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteTodoHandle}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
