import React, { useContext, useState } from "react";

import { informationContext } from "./InformationContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Recomendation from "./recomendation";
import { Link } from "react-router-dom";
import { information_all } from "./information-all";
import "./app.css";

const Divider = () => {
  const [Information, setInformation] = useContext(informationContext);
  const [On, setOn] = useState(false);
  const [MovieName, setMovieName] = useState("");

  const [painter, setPainter] = useState("");
  const [slike, setSlike] = useState(information_all);

  const handleClick = (movie, paint) => {
    setOn(!On);
    setMovieName(movie);
    setPainter(paint);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col className="left">
            <Card className="text-center">
              <Card.Header>
                <Button className="border" variant="light" size="lg" block>
                  <Link to="/gallery" style={{ textDecoration: "none" }}>
                    <h3>Paintings</h3>
                  </Link>
                </Button>
              </Card.Header>
              <Card.Body>
                <div className="flex1">
                  {Information.slice(0, 9).map(info => (
                    <Card border="light text-white">
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
            </Card>
          </Col>

          <Col className="right">
            <Card className="text-center">
              <Card.Header>
                <Button className="border" variant="light" size="lg" block>
                  <Link to="/all" style={{ textDecoration: "none" }}>
                    <h3>All</h3>
                  </Link>
                </Button>
              </Card.Header>
              <Card.Body>
                <div className="flex2">
                  {slike.slice(0, 9).map(info => (
                    <Card border="light text-white">
                      <div className="hover-card">
                        <Image className="shadow" src={info.src} rounded />
                        <Card.ImgOverlay
                          onClick={() => handleClick(info.movie)}
                        >
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
            </Card>
          </Col>
        </Row>
      </Container>
      <Recomendation
        handleClick={handleClick}
        on={On}
        movieName={MovieName}
        painter={painter}
      />
    </>
  );
};

export default Divider;
