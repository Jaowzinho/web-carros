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
    if (!car.marca || !car.modelo || !car.ano || !car.motor) return;
    onSubmit(car);
    setCar({ marca: '', modelo: '', ano: '', motor: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="car-form row g-2 mb-3">
      <div className="col-md-3">
        <input
          name="marca"
          placeholder="Marca"
          value={car.marca}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="col-md-3">
        <input
          name="modelo"
          placeholder="Modelo"
          value={car.modelo}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="col-md-2">
        <input
          name="ano"
          placeholder="Ano"
          value={car.ano}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="col-md-2">
        <input
          name="motor"
          placeholder="Motor"
          value={car.motor}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="col-md-2 d-flex gap-2">
        <button type="submit" className="btn btn-primary w-100">
          {editingCar ? 'Atualizar' : 'Adicionar'}
        </button>
        {editingCar && (
          <button type="button" onClick={clearEdit} className="btn btn-secondary w-100">
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}

export default CarForm;
