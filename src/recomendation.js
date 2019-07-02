import React, { useState, useEffect } from "react";

import "./app.css";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Recomendation = ({ on, movieName, handleClick, painter }) => {
  const wikiLink = `https://en.wikipedia.org/wiki/${painter}`;

  return (
    <div>
      {on && (
        <div className="yo">
          <ListGroup variant="flush" className="list">
            <ListGroup.Item className="overlay">
              <div className="flex-btn">
                <Button
                  onClick={handleClick}
                  className="close-btn"
                  variant="dark"
                >
                  X
                </Button>
              </div>

              {movieName.map(movie => (
                <div className="item" className="border">
                  <div>
                    <Link
                      to={`/movie/${movie}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <h2 className="rec-mov">{movie}</h2>

                      <Button className="rec" variant="primary">
                        Movie Details
                      </Button>
                    </Link>
                    <a href={wikiLink}>
                      <h5 className="link">{painter}</h5>
                    </a>
                  </div>
                </div>
              ))}
            </ListGroup.Item>
          </ListGroup>
          ;
        </div>
      )}
    </div>
  );
};

export default Recomendation;
