import React, { useEffect, useState } from 'react';
import './CarFrom.css';

function CarForm({ onSubmit, editingCar, clearEdit }) {
  const [car, setCar] = useState({ marca: '', modelo: '', ano: '', motor: '' });

  useEffect(() => {
    if (editingCar) {
      setCar(editingCar);
    } else {
      setCar({ marca: '', modelo: '', ano: '', motor: '' });
    }
  }, [editingCar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!car.marca || !car.modelo || !car.ano || !car.motor) {
      alert('Preencha todos os campos!');
      return;
    }
    onSubmit(car);
    setCar({ marca: '', modelo: '', ano: '', motor: '' });
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
      <input
        name="motor"
        placeholder="Motor"
        value={car.motor}
        onChange={handleChange}
        className="input-field"
      />
      <div className="buttons-form">
        <button type="submit" className="submit-button btn btn-success">
          {editingCar ? 'Atualizar' : 'Adicionar'}
        </button>
        {editingCar && (
          <button type="button" onClick={clearEdit} className="cancel-button btn btn-secondary ms-2">
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}

export default CarForm;
