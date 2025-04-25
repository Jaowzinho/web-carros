import React from 'react';
import './CarList.css';

function CarList({ cars, onEdit, onDelete }) {
  if (cars.length === 0) return <p className="text-center">Nenhum carro cadastrado.</p>;

  return (
    <ul className="list-group">
      {cars.map((car) => (
        <li key={car.id} className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-md-center">
          <div>
            <strong>{car.marca}</strong> - {car.modelo} - {car.ano} - {car.motor}
          </div>
          <div className="button-group mt-2 mt-md-0 d-flex flex-column flex-md-row gap-2">
            <button onClick={() => onEdit(car)} className="btn btn-sm btn-outline-success">
              Editar
            </button>
            <button onClick={() => onDelete(car.id)} className="btn btn-sm btn-outline-danger">
              Remover
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CarList;
