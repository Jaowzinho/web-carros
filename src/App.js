import React, { useState } from 'react';
import CarForm from './components/CarFrom';
import CarList from './components/CarList';
import './App.css';

function App() {
  const [cars, setCars] = useState([]);
  const [editingCar, setEditingCar] = useState(null);

  const addCar = (car) => {
    setCars([...cars, { ...car, id: Date.now() }]);
  };

  const deleteCar = (id) => {
    setCars(cars.filter((car) => car.id !== id));
  };

  const updateCar = (updatedCar) => {
    setCars(cars.map((car) => (car.id === updatedCar.id ? updatedCar : car)));
    setEditingCar(null);
  };

  return (
    <div className="app-container">
      <h1>CRUD de Carros</h1>
      <CarForm
        onSubmit={editingCar ? updateCar : addCar}
        editingCar={editingCar}
        clearEdit={() => setEditingCar(null)}
      />
      <CarList cars={cars} onEdit={setEditingCar} onDelete={deleteCar} />
    </div>
  );
}

export default App;
