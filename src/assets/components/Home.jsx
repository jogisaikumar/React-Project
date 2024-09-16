import "./Home.css";
import { useState } from "react";

function Home() {
  const genreOfMovies = [
    "Action",
    "Sci-Fi",
    "Fantasy",
    "Love/Romantic",
    "Comedy",
    "Sports",
    "Family-Drama",
    "Adventure",
    "Horror",
    "Thriller",
    "English",
    "Tamil",
    "Telugu",
    "Kannada",
    "Korean",
    "Hindi",
  ];

  const [modeIsDark, setModeIsDark] = useState(false);

  function HandleDarkMode() {
    setModeIsDark(!modeIsDark);
  }
  return (
    <div className={modeIsDark ? "dark-mode" : "light-mode"}>
      <header>
        <nav>
          <img src="/vite.svg" alt="vite-logo" />
          <h4>Movies</h4>
          <button className="btn-mode" onClick={HandleDarkMode}>
            Mode
          </button>
        </nav>
      </header>
      <aside id="Side-nav">
        <ul id="list-items">
          <h3>Geners</h3>
          {genreOfMovies.map((movie, index) => {
            return <li key={index}>{movie}</li>;
          })}
        </ul>
      </aside>
      <footer>
        {" "}
        <p>© 2024 My Website. All rights reserved.</p>{" "}
      </footer>
    </div>
  );
}

export default Home;
