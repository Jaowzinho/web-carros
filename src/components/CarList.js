import React from 'react';
import './CarList.css';

function CarList({ cars, onEdit, onDelete }) {
  if (cars.length === 0) return <p className="no-cars text-light">Nenhum carro cadastrado.</p>;

  return (
    <ul className="car-list list-group">
      {cars.map((car) => (
        <li key={car.id} className="car-item list-group-item d-flex justify-content-between align-items-center bg-dark text-light">
          <span>{car.marca} - {car.modelo} - {car.ano} - {car.motor}</span>
          <div className="buttons">
            <button 
              onClick={() => onEdit(car)} 
              className="edit-button btn btn-sm btn-outline-success me-2"
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
