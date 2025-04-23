import React from 'react';
import './CarList.css';

function CarList({ cars, onEdit, onDelete }) {
  if (cars.length === 0) return <p className="no-cars">Nenhum carro cadastrado.</p>;

  return (
    <ul className="car-list">
      {cars.map((car) => (
        <li key={car.id} className="car-item">
          <span>{car.marca} - {car.modelo} - {car.ano}</span>
          <div className="buttons">
            <button onClick={() => onEdit(car)} className="edit-button">
              Editar
            </button>
            <button onClick={() => onDelete(car.id)} className="delete-button">
              Remover
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CarList;
