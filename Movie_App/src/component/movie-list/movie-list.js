import React, { useState } from "react";
import "./style.css";
import uuid from "react-uuid";
import MovieCard from "../movie-card/movie-card";
import Modal from "react-modal";

export default function MovieList() {
  const [movies, setMovies] = useState([
    {
      id: uuid(),
      name: "Joker",
      img:
        "https://img6.cdn.cinoche.com/images/2410039474f50c57115d6e6f97302965.jpg",
      time: "2h2min",
      rating: "4"
    },
    {
      id: uuid(),
      name: "The Dead Don’t Die",
      img: "https://fr.web.img6.acsta.net/pictures/19/04/10/16/21/2574607.jpg",
      time: "1h42min",
      rating: "4"
    },
    {
      id: uuid(),
      name: "Fast Color",
      img:
        "https://i1.wp.com/balleralert.com/wp-content/uploads/2019/05/IMG_5384-827x1024.jpg?resize=618%2C765",
      time: "1h31min",
      rating: "3"
    },
    {
      id: uuid(),
      name: "Gloria Bell",
      img:
        "https://images-na.ssl-images-amazon.com/images/I/71Fgza7gJML._AC_SY879_.jpg",
      time: "1h50min",
      rating: "3"
    },
    {
      id: uuid(),
      name: "Under the Silver Lake",
      img:
        "https://img3.cdn.cinoche.com/images/e86640319fc15dabcb5d754ca0e6ac66.jpg",
      time: "1h37min",
      rating: "2"
    },
    {
      id: uuid(),
      name: "The Irishman",
      img:
        "https://images-na.ssl-images-amazon.com/images/I/71Y5pMAw8rL._AC_SY741_.jpg",
      time: "2h10min",
      rating: "4"
    }
  ]);

  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [newimage, setNewimage] = useState("");
  const [newName, setNewName] = useState("");
  const [newTime, setNewTime] = useState("");
  const [newRating, setNewRating] = useState("");
  const [newSearch, setnewSearch] = useState("");
  const [newSearchR, setnewSearchR] = useState("");
  const [filtredMovies, setfiltredMovies] = useState([]);

  function handleNewimgChange(e) {
    e.preventDefault();
    setNewimage(e.target.value);
  }

  function handleNewnameChange(e) {
    e.preventDefault();
    setNewName(e.target.value);
  }

  function handleNewtimeChange(e) {
    e.preventDefault();
    setNewTime(e.target.value);
  }

  function handleNewrateChange(e) {
    e.preventDefault();
    setNewRating(e.target.value);
  }

  function handleNewMovie(e) {
    e.preventDefault();
    if (
      newimage != null &&
      newimage !== "" &&
      newName != null &&
      newName !== "" &&
      newTime != null &&
      newTime !== "" &&
      newRating != null &&
      newRating !== ""
    ) {
      setMovies([
        ...movies,
        {
          id: uuid(),
          img: newimage,
          name: newName,
          time: newTime,
          rating: newRating
        }
      ]);
      setNewName("");
      setNewimage("");
      setNewRating("");
      setNewTime("");
      e.target.reset();
      setfiltredMovies([
        ...filtredMovies,
        {
          id: uuid(),
          img: newimage,
          name: newName,
          time: newTime,
          rating: newRating
        }
      ]);
    } else alert("Please enter valid data");
  }

  function handleNewSearchChange(e) {
    e.preventDefault();
    setnewSearch(e.target.value);
  }

  function handleNewSearchChangeR(e) {
    e.preventDefault();
    setnewSearchR(e.target.value);
  }

  React.useEffect(() => {
    const results = movies.filter((el) =>
      el.name.toLowerCase().includes(newSearch)
    );
    setfiltredMovies(results);
  }, [newSearch]);

  React.useEffect(() => {
    const results = movies.filter((el) => el.rating.includes(newSearchR));
    setfiltredMovies(results);
  }, [newSearchR]);

  return (
    <div>
      <form>
        <label>
          <h3>Search by Name :</h3>
        </label>
        <input
          type="text"
          placeholder="Search.."
          onKeyUp={handleNewSearchChange}
        />
        <label>
          <h3>Search by Rating :</h3>
        </label>
        <select onInput={handleNewSearchChangeR}>
          <option></option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </form>
      <button onClick={() => setmodalIsOpen(true)} className="button">
        Add New Movie
      </button>
      {/* tModal */}
      <Modal className="App" isOpen={modalIsOpen}>
        <div className="modal">
          <form onSubmit={handleNewMovie}>
            <div className="row">
              <div className="col-25">
                <label>Movie Poster</label>
              </div>
              <div className="col-75">
                <input
                  onChange={handleNewimgChange}
                  type="text"
                  placeholder="Add the image url..."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Movie Name</label>
              </div>
              <div className="col-75">
                <input
                  onChange={handleNewnameChange}
                  type="text"
                  placeholder="Movie name..."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Running time</label>
              </div>
              <div className="col-75">
                <input
                  onChange={handleNewtimeChange}
                  type="text"
                  placeholder="Running time..."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Movie Rating</label>
              </div>
              <div className="col-75">
                <select onInput={handleNewrateChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div className="row">
              <input className="button" type="submit" value="Save" />
              <input
                onClick={() => setmodalIsOpen(false)}
                className="button"
                type="submit"
                value="Close"
              />
            </div>
          </form>
        </div>
      </Modal>
      {/* Modal end */}
      <div className="container">
        {filtredMovies.map((el) => (
          <MovieCard
            img={el.img}
            name={el.name}
            time={el.time}
            rate={el.rating}
          />
        ))}
      </div>
    </div>
  );
}
