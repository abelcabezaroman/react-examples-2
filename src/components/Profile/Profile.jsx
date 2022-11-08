import { useContext } from "react";
import { AnimeContext } from "../../App";

export default function Profile() {
  const { user, setUser } = useContext(AnimeContext);

  return (
    <div>
      <img src={user.img} width="300" alt={user.name} />
      <p>Name: {user.name}</p>
      <p>Age: {user.age} <button onClick={() => setUser({...user,age: user.age + 1})}>Feliz cumpleaños</button></p>
      <p>Anime: {user.anime}</p>
    </div>
  );
}
