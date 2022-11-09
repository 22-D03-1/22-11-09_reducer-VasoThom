import "./App.css";
import food from "./food.json";
import Food from "./components/Food";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Kitchen Stories</h1>
        <div>
          {food.map((el) => {
            return <Food key={el.id} el={el} />;
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
