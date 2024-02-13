import { useState } from 'react';
import Catalog from '../../ui/Catalog.jsx';
import Header from '../../ui/Header.jsx';
import { cars as carsData } from './cars.data.js';
import CreateCarForm from './create-car-form/CreateCarForm.jsx';

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
