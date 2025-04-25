import React, { useEffect, useState } from 'react';
import CarForm from './components/CarFrom';
import CarList from './components/CarList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cars, setCars] = useState([]);
  const [editingCar, setEditingCar] = useState(null);

  useEffect(() => {
    const storedCars = JSON.parse(localStorage.getItem('cars')) || [];
    setCars(storedCars);
  }, []);

  useEffect(() => {
    localStorage.setItem('cars', JSON.stringify(cars));
  }, [cars]);

  const addOrUpdateCar = (car) => {
    if (car.id) {
      setCars(cars.map((c) => (c.id === car.id ? car : c)));
      setEditingCar(null);
    } else {
      setCars([...cars, { ...car, id: Date.now() }]);
    }
  };

  const deleteCar = (id) => {
    setCars(cars.filter((car) => car.id !== id));
  };

  const editCar = (car) => {
    setEditingCar(car);
  };

  const clearEdit = () => {
    setEditingCar(null);
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Gerenciador de Carros</h2>
      <CarForm onSubmit={addOrUpdateCar} editingCar={editingCar} clearEdit={clearEdit} />
      <hr />
      <CarList cars={cars} onEdit={editCar} onDelete={deleteCar} />
    </div>
  );
}

export default App;
