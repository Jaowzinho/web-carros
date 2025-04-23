import React, { useEffect, useState } from 'react';
import './CarFrom.css';

function CarForm({ onSubmit, editingCar, clearEdit }) {
  const [car, setCar] = useState({ marca: '', modelo: '', ano: '' });

  useEffect(() => {
    if (editingCar) {
      setCar(editingCar);
    } else {
      setCar({ marca: '', modelo: '', ano: '' });
    }
  }, [editingCar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!car.marca || !car.modelo || !car.ano) return;
    onSubmit(car);
    setCar({ marca: '', modelo: '', ano: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="car-form">
      <input
        name="marca"
        placeholder="Marca"
        value={car.marca}
        onChange={handleChange}
        className="input-field"
      />
      <input
        name="modelo"
        placeholder="Modelo"
        value={car.modelo}
        onChange={handleChange}
        className="input-field"
      />
      <input
        name="ano"
        placeholder="Ano"
        value={car.ano}
        onChange={handleChange}
        className="input-field"
      />
      <button type="submit" className="submit-button">
        {editingCar ? 'Atualizar' : 'Adicionar'}
      </button>
      {editingCar && (
        <button onClick={clearEdit} className="cancel-button">
          Cancelar
        </button>
      )}
    </form>
  );
}

export default CarForm;
