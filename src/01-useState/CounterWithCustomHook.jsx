import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, decrease, increase, reset } = useCounter(0);

  return (
    <div style={{ backgroundColor: "#bce0e2" }}>
      <h1>Counter with hook: {counter}</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => increase(2)}
      >
        +1
      </button>
      <button
        className="btn btn-primary"
        onClick={reset}
      >
        reset
      </button>
      <button
        className="btn btn-primary"
        onClick={decrease}
      >
        -1
      </button>
    </div>
  );
};
