import React from "react";

const Filtro = ([texto, setTexto]) => {
  const handleInputChange = ({ target }) => {
    setTexto(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(texto);
  };
  return (
    <div className="col-auto  p-5 text-center">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          name="buscar"
          placeholder="Nombre del personaje"
          value={texto}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary">
          <i class="fas fa-search"></i>
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Filtro;
