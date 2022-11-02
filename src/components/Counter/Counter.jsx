import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);
  //   const [pepe, setPepe] = useState(2);
  //   const [julian, juan] = useState(5);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>+</button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
