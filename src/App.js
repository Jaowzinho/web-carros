import React, { useState, useEffect } from 'react';
import CarForm from './components/CarFrom';
import CarList from './components/CarList';
import './App.css';

function App() {
  const [cars, setCars] = useState([]);
  const [editingCar, setEditingCar] = useState(null);

  useEffect(() => {
    const storedCars = JSON.parse(localStorage.getItem('cars')) || [];
    setCars(storedCars);
  }, []);

  const addOrUpdateCar = (car) => {
    let updatedCars;
    if (car.id) {
      updatedCars = cars.map((c) => (c.id === car.id ? car : c));
      alert("Carro atualizado com sucesso!");
    } else {
      updatedCars = [...cars, { ...car, id: Date.now() }];
      alert("Carro adicionado com sucesso!");
    }
    setCars(updatedCars);
    localStorage.setItem('cars', JSON.stringify(updatedCars));
    setEditingCar(null);
  };

  const deleteCar = (id) => {
    const confirmDelete = window.confirm("Deseja realmente excluir este carro?");
    if (confirmDelete) {
      const updatedCars = cars.filter((car) => car.id !== id);
      setCars(updatedCars);
      localStorage.setItem('cars', JSON.stringify(updatedCars));
      alert("Carro removido com sucesso!");
    }
  };

  const editCar = (car) => {
    setEditingCar(car);
  };

  const clearEdit = () => {
    setEditingCar(null);
  };

  return (
    <div className="app container">
      <h1 className="text-center my-4 text-light">🚗 Sistema de Automóveis</h1>
      <CarForm onSubmit={addOrUpdateCar} editingCar={editingCar} clearEdit={clearEdit} />
      <CarList cars={cars} onEdit={editCar} onDelete={deleteCar} />
    </div>
  );
}

export default App;
