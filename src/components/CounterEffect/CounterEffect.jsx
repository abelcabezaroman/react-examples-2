import { useCallback } from "react";
import { useEffect, useState } from "react";

export default function CounterEffect(){
    const [count, setCount] = useState(2);
    // const [counter, setCounter] = useState(props.initialValue);

    // function getUsers (){
    //     // fetch()
    // }
    // useEffect(getUsers, []);

    const alertMe = useCallback(() => {
        console.log('Hola!');

        return () => console.log("Adios!")
    }, [])

    useEffect(alertMe, []);
    // useEffect(() => console.log("mount"), []);
    useEffect(() => console.log("will update count"), [count]);
    // useEffect(() => console.log("will update any"));
    // useEffect(() => () => console.log("will update count or unmount"), [count]);
    // useEffect(() => () => console.log("unmount"), []);

    // useEffect(() => console.log("mount"))

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