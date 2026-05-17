
import useCounter from "./hooks/useCounter";

function App() {
  const {
    count,
    increment,
    decrement,
    reset
  } = useCounter();

  return (
    <div className="container">
      <div className="card">
        <h1>Custom Hook Counter</h1>

        <h2>{count}</h2>

        <div className="buttons">
          <button onClick={increment}>
            Increase
          </button>

          <button onClick={decrement}>
            Decrease
          </button>

          <button onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;