import { useContext } from "react";
import { CountContext } from "../../App";

export default function CounterContext(){
    const {count, setCount} = useContext(CountContext);

    return (
        <div className="b-counter-with-hooks">
            <p>Contador {count}</p>
            <button className="b-counter-with-hooks__button" onClick={() => setCount(count + 1)}>+</button>
            <button className="b-counter-with-hooks__button" onClick={() => setCount(count - 1)}>-</button>

            {/*<p>Contador {counter}</p>*/}
            {/*<button className="b-counter-with-hooks__button" onClick={() => setCounter(counter + 1)}>+</button>*/}
            {/*<button className="b-counter-with-hooks__button" onClick={() => setCounter(counter - 1)}>-</button>*/}
        </div>
    )
}