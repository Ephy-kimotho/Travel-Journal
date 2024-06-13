import Header from "./components/Header.jsx";
import Place from "./components/Place.jsx";
import places from "./assets/data.js";
import "./App.css";

function App() {
  const placeElements = places.map((place) => {
    return <Place key={place.id} {...place} />;
  });

  return (
    <>
      <Header />
      <main>
        <div className="container">{placeElements}</div>
      </main>
    </>
  );
}

export default App;
