import { useContext, useState } from "react";
import CarItem from "./car-item/CarItem.jsx";
import { cars as carsData } from "./cars.data.js";
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";
import { AuthContext } from "../../../providers/AuthProvider.jsx";
import { useQuery } from "@tanstack/react-query";
import { CarService } from "../../../services/car.service.js";
import Header from "../../ui/Header.jsx";
import Catalog from "../../ui/Catalog.jsx";

const Home = () => {
  // const { data, isLoading, error } = useQuery(["cars"], () =>
  //   CarService.getAll()
  // );

  const [cars, setCars] = useState(carsData);

  // if (isLoading) return <p>Loading..</p>;

  return (
    <div>
      <h1>Cars catalog</h1>
      <Header />
      <CreateCarForm setCars={setCars} />
      <Catalog cars={cars} />
    </div>
  );
};

export default Home;
