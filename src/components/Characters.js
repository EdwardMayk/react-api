import React from "react";

const Characters = ({ characters = [], texto }) => {
  if (characters.length === 0)
    return <p>No se encontro ese personaje con"{texto}"</p>;
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col mb-4">
          <div className="card" style={{ minWidth: "200px" }}>
            <img classname="rounded-circle" src={item.image} alt="" />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <hr />
              <p>Species: {item.species}</p>
              <p>Location: {item.location.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
