import React from 'react';
import './CarList.css';

function CarList({ cars, onEdit, onDelete }) {
  if (cars.length === 0) return <p className="no-cars">Nenhum carro cadastrado.</p>;

  return (
    <ul className="car-list list-group">
      {cars.map((car) => (
        <li key={car.id} className="car-item list-group-item d-flex justify-content-between align-items-center">
          <span>{car.marca} - {car.modelo} - {car.ano}</span>
          <div className="buttons">
            <button 
              onClick={() => onEdit(car)} 
              className="edit-button btn btn-sm btn-outline-success"
            >
              Editar
            </button>
            <button 
              onClick={() => onDelete(car.id)} 
              className="delete-button btn btn-sm btn-outline-danger"
            >
              Remover
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CarList;
