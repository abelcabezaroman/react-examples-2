import "./App.css";
import Btn from "./components/Btn/Btn";
import List from "./components/List/List";
import Todo from "./components/Todo/Todo";
import Counter from "./components/Counter/Counter";

function App() {
  const name = "Abel";
  const students = ["Javi", "Chen", "Maria", "Tony"];
  const todoList = [
    { name: "Aprender react", isDone: false },
    { name: "Jugar warhammer", isDone: false },
    { name: "Sacar al suegro", isDone: true },
  ];

  const remove = () => {
    console.log("Helooow");
  };

  return (
    <div className="App-header">
      Hola {name}
      <Btn text="Enviar" className="c-btn c-btn--sec"></Btn>
      <Btn text="Cancelar"></Btn>
      <Btn text="Editar"></Btn>
      <Btn></Btn>
      <List students={students}></List>
      <List students={["Fatima", "Dorian", "Christopher"]}></List>
      <Todo onRemove={remove} list={todoList}></Todo>
      <Counter></Counter>
    </div>
  );
}

export default App;
