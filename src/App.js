import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";
// import Filtro from "./components/filter";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setinfo] = useState({});
  const [texto, setTexto] = useState("");

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacter = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setinfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    fetchCharacter(info.prev);
  };
  const onNext = () => {
    fetchCharacter(info.next);
  };

  useEffect(() => {
    fetchCharacter(initialUrl);
  }, []);

  const handleInputChange = ({ target }) => {
    setTexto(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(texto);
  };

  const leakedCharacter = characters.filter((character) =>
    character.name.toLowerCase().includes(texto.toLocaleLowerCase())
  );

  return (
    <>
      <Navbar brand="RICK AND MORTY" />
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
      <div className="container mt-5">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Characters texto={texto} characters={leakedCharacter} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </>
  );
}

export default App;
