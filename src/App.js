const handleDelete = (id) => {
  const confirmDelete = window.confirm("Tem certeza que deseja excluir este carro?");
  if (confirmDelete) {
    const updatedCars = cars.filter((car) => car.id !== id);
    setCars(updatedCars);
    localStorage.setItem('cars', JSON.stringify(updatedCars));
    alert("Carro removido com sucesso!");
  }
};
