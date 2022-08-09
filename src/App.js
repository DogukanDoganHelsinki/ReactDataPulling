import React from "react";
import Card from "./components/Card";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const cards = data.map((films) => {
    return (
      <Card
        title={films.title}
        popularity={films.popularity}
        vote_average={films.vote_average}
        overview={films.overview}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Main />
      {cards}
    </div>
  );
}

export default App;
