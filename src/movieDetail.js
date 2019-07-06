import React, { useState, useEffect } from "react";
import "./app.css";
import Nav from "./nav";

const MovieDetail = ({ match }) => {
  const error =
    "http://www.macedonrangeshalls.com.au/wp-content/uploads/2017/10/image-not-found.png";
  const APP_KEY = "19e233398390f3df83538dff1bb54357";

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [poster, setPoster] = useState("");
  const [info, setInfo] = useState("");
  const [id, setId] = useState("");
  const [imdb, setImdb] = useState("");

  const imdbLink = `https://www.imdb.com/title/${imdb}/?ref_=nv_sr_1?ref_=nv_sr_1`;

  useEffect(() => {
    getMovie();
  }, []);
  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${APP_KEY}&language=en-US&query=${
          match.params.id
        }&page=1&include_adult=false`
      );
      const data = await response.json();
      setTitle(data.results[0].title);
      setPoster(data.results[0].poster_path);
      setDate(data.results[0].release_date);
      setInfo(data.results[0].overview);
      setId(data.results[0].id);

      console.log(data);
    } catch (error) {
      console.log("error:", error);
      setInfo("INFORAMTION NOT FOUND");
    }

    // setTitle(data.results[0].title);
    // setPoster(data.results[0].poster_path);
    // setDate(data.results[0].release_date);
    // setInfo(data.results[0].overview);
    // setId(data.results[0].id);

    // console.log(data);
  };

  useEffect(() => {
    getID();
  }, [getMovie]);
  const getID = async () => {
    const response2 = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/external_ids?api_key=${APP_KEY}`
    );
    const data2 = await response2.json();

    setImdb(data2.imdb_id);
  };

  return (
    <>
      <Nav />
      <div className="details-background">
        <div className="details-card">
          <div className="details-left">
            <img
              className="details-img"
              src={`https://image.tmdb.org/t/p/w500${poster}`}
            />
          </div>
          <div className="details-right">
            <h1>
              {title}
              <a href={imdbLink}>
                <h3>IMDB</h3>
              </a>
            </h1>

            <h4>Release Date: {date}</h4>
            <div className="details-info">
              <h5>{info}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
