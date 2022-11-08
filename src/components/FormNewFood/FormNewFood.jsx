import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AnimeContext } from "../../App";

export default function FormNewFood() {
  const { user, setUser } = useContext(AnimeContext);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    setUser({...user, favoriteFoods: [...user.favoriteFoods, data.name]});
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("name")} />
      <button>Añadir comida</button>
    </form>
  );
}
