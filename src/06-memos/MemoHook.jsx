import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heaveStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log(`let's go...`);
  }

  return `${iterationNumber} done`;
};

export const MemoHook = () => {
  const { counter, increase } = useCounter(5000);
  // const { counter: counter2, increase: increase2 } = useCounter(5000);
  const [show, setShow] = useState(true);
  const memorizedValue = useMemo(
    () => heaveStuff(counter),
    [
      // counter2,
      counter,
    ]
  );
  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
      <h4>{memorizedValue}</h4>
      <button
        className="btn btn-primary"
        onClick={() => increase()}
      >
        +1
      </button>
      {/* <button
        className="btn btn-primary"
        onClick={() => increase2()}
      >
        +1 2nd
      </button> */}

      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
