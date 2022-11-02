export default function Todo({ list, onRemove}) {


  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          {item.name}

          <button onClick={onRemove}>X</button>
        </li>
      ))}
    </ul>
  );
}
