const handleSubmit = (e) => {
  e.preventDefault();
  if (!car.marca || !car.modelo || !car.ano || !car.motor) {
    alert("Preencha todos os campos!");
    return;
  }
  
  if (car.id) {
    // Editando
    onSubmit(car);
    alert("Carro atualizado com sucesso!");
  } else {
    // Criando novo
    onSubmit({ ...car, id: Date.now() });
    alert("Carro adicionado com sucesso!");
  }
  
  setCar({ marca: '', modelo: '', ano: '', motor: '' });
};
