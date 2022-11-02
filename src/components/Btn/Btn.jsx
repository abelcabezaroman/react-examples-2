import "./Btn.scss";
export default function Btn({className = "c-btn", text = "Padawam"}){
    return (
        <button className={className}>{text}</button>
    )
}

// const Btn = ()=>{
//     return (
//         <button>Enviar</button>
//     )
// }

// export default Btn;