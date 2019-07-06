import React, { useState } from "react";

import { information_all } from "./information-all";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Recomendation from "./recomendation";
import Nav from "./nav";
import "./app.css";

const RandomGallery = () => {
  const [On, setOn] = useState(false);
  const [MovieName, setMovieName] = useState("");
  const [ID, setID] = useState("");
  const [slike, setSlike] = useState(information_all);
  const handleClick = (movie, id) => {
    setOn(!On);
    setMovieName(movie);
    setID(id);
  };

  return (
    <>
      <Nav />

      <Card.Body className="all-position">
        <Card.Header className="gallery-header">
          <div>
            <h1>All:</h1>
          </div>
        </Card.Header>
        <div className="gallery">
          {slike.map(info => (
            <Card border="light text-white" className="card-marg">
              <div className="hover-card">
                <Image className="shadow" src={info.src} rounded />
                <Card.ImgOverlay onClick={() => handleClick(info.movie)}>
                  <div className="card-flex">
                    {info.movie.slice(0, 3).map(mov => (
                      <h3 className="card-item">{mov}</h3>
                    ))}
                  </div>
                </Card.ImgOverlay>
              </div>
            </Card>
          ))}
        </div>
      </Card.Body>

      <Recomendation
        handleClick={handleClick}
        on={On}
        movieName={MovieName}
        ID={ID}
      />
    </>
  );
};

export default RandomGallery;
