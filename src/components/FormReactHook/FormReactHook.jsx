import { useForm } from "react-hook-form";

export default function FormReactHook() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

//   console.log(watch());
//   console.log(watch("name"));
//   console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("name", { required: true })} />

      <input
        type="text"
        {...register("surname", { required: true, maxLength: 10 })}
      />
      <input type="number" {...register("age")} />

      <button>Enviar</button>
    </form>
  );
}
