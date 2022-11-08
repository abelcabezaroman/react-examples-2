import { useContext } from "react";
import { AnimeContext } from "../../App";

export default function ListFood() {
  const { user } = useContext(AnimeContext);

  console.log(user);
  return (
    <>
      <h4>Favorites Foods</h4>
      <ul>
        {user.favoriteFoods.map((favoriteFood, index) => (
          <li key={index}>{favoriteFood}</li>
        ))}
      </ul>
    </>
  );
}
