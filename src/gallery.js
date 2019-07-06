import React, { useContext, useState } from "react";

import { informationContext } from "./InformationContext";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Recomendation from "./recomendation";
import Nav from "./nav";
import "./app.css";

const Gallery = () => {
  const [Information, setInformation] = useContext(informationContext);
  const [On, setOn] = useState(false);
  const [MovieName, setMovieName] = useState("");
  const [ID, setID] = useState("");
  const [painter, setPainter] = useState("");
  const handleClick = (movie, paint) => {
    setOn(!On);
    setMovieName(movie);

    setPainter(paint);
  };

  return (
    <>
      <Nav />

      <Card.Body className="all-position">
        <Card.Header className="gallery-header">
          <div>
            <h1>Paintings:</h1>
          </div>
        </Card.Header>
        <div className="gallery">
          {Information.map(info => (
            <Card border="light text-white" className="card-marg">
              <div className="paint-hover-card">
                <Image className="shadow" src={info.src} rounded />
                <Card.ImgOverlay
                  onClick={() => handleClick(info.movie, info.painter)}
                >
                  <div className="paint-card-flex">
                    {info.movie.map(mov => (
                      <h3 className="paint-card-item">{mov}</h3>
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
        painter={painter}
      />
    </>
  );
};

export default Gallery;
