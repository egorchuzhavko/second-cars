import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CarService } from "../../../services/car.service.js";
import CarItem from "../home/car-item/CarItem.jsx";
import { AuthContext } from "../../../providers/AuthProvider.jsx";
import { withAuth } from "../../../HOC/withAuth.jsx";

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      const data = await CarService.getById(id);
      setCar(data);
    };

    fetchData();
  }, [id]);

  if (!car?.name) return <p>Loading or there is no car..</p>;

  return (
    <div>
      <Link className="btn" style={{ marginBottom: "1rem" }} to="/">
        Back
      </Link>
      <CarItem
        car={{
          id: car.id,
          name: car.username,
          price: "332",
          image:
            "https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/16/11/80/91/83/9827a8740cd7.jpg",
        }}
      />
    </div>
  );
};

export default withAuth(CarDetail);
