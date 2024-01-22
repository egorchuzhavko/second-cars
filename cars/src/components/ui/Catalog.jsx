import CarItem from "../screens/home/car-item/CarItem";

const Catalog = ({ cars }) => {
  return (
    <div>
      {cars.length ? (
        cars.map((car) => <CarItem key={car.id} car={car} />)
      ) : (
        <p>There are no cars</p>
      )}
    </div>
  );
};

export default Catalog;
