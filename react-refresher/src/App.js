import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

export function App() {
  return (
    <div>
      <h1>My Todo's</h1>
      <Todo text="Learn react" />
      <Backdrop />
      <Modal />
    </div>
  );
}

export default App;
