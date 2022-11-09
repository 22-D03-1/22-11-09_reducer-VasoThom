import "./App.css";
import food from "./food.json";
import Food from "./components/Food";
import { useReducer } from "react";

const initState = {
  checkedSteps: [],
};
const reducer = (state, action) => {
  // return state;
  switch (action.type) {
    case "checkStep":
      const stepIndex = state.checkedSteps.indexOf(action.payload);
      stepIndex >= 0
        ? (state = {
            ...state,
            checkedSteps: [
              ...state.checkedSteps.filter((el) => el !== action.payload),
            ],
          })
        : (state = {
            ...state,
            checkedSteps: [...state.checkedSteps, action.payload],
          });
      break;
    case "reset":
      state = {
        ...state,
        checkedSteps: [],
      };
      break;
    default:
      console.log("Failed to check step");
  }
  return state;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Kitchen Stories</h1>
        <div>
          {food.map((el) => {
            return (
              <Food
                key={el.id}
                food={el}
                dispatch={dispatch}
                checkedSteps={state.checkedSteps}
              />
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
