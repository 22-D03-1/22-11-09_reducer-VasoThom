/* eslint-disable jsx-a11y/alt-text */

export default function Food({ food, dispatch, checkedSteps }) {
  function onChange() {
    dispatch({ type: "reset" });
  }

  return (
    <div>
      <h1>{food.id}</h1>
      <h1>{food.name}</h1>
      <img src={food.picture} />
      <br />
      <label>
        {food.steps.map((step, i) => (
          <div key={i}>
            <div
              className={checkedSteps.includes(i) ? "checked" : null}
              onClick={() => {
                dispatch({ type: "checkStep", payload: i });
              }}
            >
              <p> {step}</p>
            </div>
          </div>
        ))}
      </label>
      <button onClick={onChange}>Reset</button>
    </div>
  );
}
