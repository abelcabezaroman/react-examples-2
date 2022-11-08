import { useContext } from "react"
import { CountContext } from "../../App"

export default function CounterReducer(){
    const {state, dispatch} = useContext(CountContext)
    return <div>
        {state.count}
        <button onClick={() => dispatch({type: "increment", value: 10})}>+ 10</button>
        <button onClick={() => dispatch({type: "increment", value: 1})}>+ 1</button>
    </div>
}