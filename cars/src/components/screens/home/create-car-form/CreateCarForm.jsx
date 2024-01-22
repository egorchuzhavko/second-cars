import { useEffect } from "react";
import styles from "./CreateCarForm.module.css";
import { CarService } from "../../../../services/car.service.js";
import { useForm } from "react-hook-form";

const CreateCarForm = ({ setCars }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await CarService.getAll();
      console.log(data[0].id);
    };

    fetchData();
  }, []);

  const createCar = (data) => {
    console.log(data);
    setCars((prev) => [...prev, { id: prev.length + 1, ...data }]);
    reset(clearData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(createCar)}>
      <input
        {...register("name", { required: "Name is required" })}
        placeholder="Name"
      />
      {errors?.name?.message && (
        <p style={{ color: "red" }}>Name is required</p>
      )}
      <input
        {...register("price", { required: "Price is required" })}
        placeholder="Price"
      />
      {errors?.price?.message && (
        <p style={{ color: "red" }}>Price is required</p>
      )}
      <input
        {...register("image", { required: "Image link is required" })}
        placeholder="Image"
      />
      {errors?.image?.message && (
        <p style={{ color: "red" }}>Image link is required</p>
      )}
      <br></br>
      <button className="btn">Create</button>
    </form>
  );
};

export default CreateCarForm;
