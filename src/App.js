import "./App.css";
import Btn from "./components/Btn/Btn";
import List from "./components/List/List";
import Todo from "./components/Todo/Todo";
import Counter from "./components/Counter/Counter";
import CounterEffect from "./components/CounterEffect/CounterEffect";
import FormReactHook from "./components/FormReactHook/FormReactHook";
import ListFood from "./components/ListFood/ListFood";
import Profile from "./components/Profile/Profile";
import GalleryAxios from "./components/GalleryAxios/GalleryAxios";
import CounterContext from "./components/CounterContext/CounterContext";
import React, { useReducer, useState } from "react";
import FormNewFood from "./components/FormNewFood/FormNewFood";
import SliderRef from "./components/SliderRef/SliderRef";
import CounterReducer from "./components/CounterReducer/CounterReducer";
import { reducer } from "./reducers/globalReducer";

export const CountContext = React.createContext(10);
export const AnimeContext = React.createContext(10);
const userDefault = {
  name: "Lelouch Lamperouge",
  age: 18,
  anime: "Code Geass",
  img: "https://somoskudasai.com/wp-content/uploads/2021/12/portada_code-geass-17.jpg",
  favoriteFoods: ["Pizza", "Pasta", "Lasañza", "Ramen"],
};

function App() {
  
  const [state, dispatch] = useReducer(reducer, {count: 10})

  const [user, setUser] = useState(userDefault);
  const [showCounter, setShowCounter] = useState(false);
  const [count, setCount] = useState(10);
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
      <CountContext.Provider value={{ state, dispatch }}>
      
      Hola {name}
      <Btn text="Enviar" className="c-btn c-btn--sec"></Btn>
      <Btn text="Cancelar"></Btn>
      <Btn text="Editar"></Btn>
      <Btn></Btn>
      <List students={students}></List>
      <List students={["Fatima", "Dorian", "Christopher"]}></List>
      <Todo onRemove={remove} list={todoList}></Todo>
      <Counter></Counter>
      {!showCounter && <CounterEffect></CounterEffect>}
      {/* {showCounter === true ? <CounterEffect></CounterEffect> : "Ni boton ni ostias"} */}
      <button onClick={() => setShowCounter(!showCounter)}>Show counter</button>
      <h1>Form</h1>
      <FormReactHook></FormReactHook>
      <h1>Gallery</h1>
      <GalleryAxios />
      <h1>Counter context</h1>
      {count}
      <CountContext.Provider value={{ count, setCount }}>
        <CounterContext></CounterContext>
      </CountContext.Provider>

      <h1>Anime context</h1>
      <AnimeContext.Provider value={{ user, setUser }}>
        <Profile></Profile>
        <ListFood></ListFood>
        <FormNewFood></FormNewFood>
      </AnimeContext.Provider>

      <h1>Slider USEREF</h1>
      <SliderRef></SliderRef>



      <h1>Counter Reducer</h1>
      <CounterReducer></CounterReducer>

     </CountContext.Provider>
    </div>
  );
}

export default App;
