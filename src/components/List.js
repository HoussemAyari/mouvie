import React from "react";
import FilmCrd from "./FilmCrd";
import "./List.css";

function List({ films, search, Rate }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "900px",
        flexWrap: "wrap",
        justifyContent: "space-around",
        margin: "auto",
      }}
    >
      {films.film
        .filter((elt) => elt.title.toUpperCase().includes(search.toUpperCase()) && elt.rate>=Rate)
        .map((elt) => (
          <FilmCrd key={elt.id} film={elt}  />
        ))}
        
    </div>
  );
}

export default List;
