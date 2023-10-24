import { useEffect, useState } from "react";
import { Subject } from "rxjs";

let miVariableObservable;

export const CounterApp = () => {
  const [{ counter1, counter2, counter3 }, setCounter] = useState({
    counter1: 33,
    counter2: 333,
    counter3: 3333,
  });

  useEffect(() => {
    miVariableObservable = new Subject();
    miVariableObservable.subscribe((Value) => console.log(Value));
  }, []);

  return (
    <div style={{ backgroundColor: "#d79090" }}>
      <h1>counter: {counter1}</h1>
      <h1>counter: {counter2}</h1>
      <h1>counter: {counter3}</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() =>
          setCounter((counter) => {
            const auxCounter = { ...counter };
            auxCounter.counter1 += 1;
            auxCounter.counter2 += 1;
            auxCounter.counter3 += 1;

            if (!miVariableObservable.closed)
              miVariableObservable.next("hi" + auxCounter.counter1);
            return { ...auxCounter };
          })
        }
      >
        +1
      </button>
      <button
        className="btn btn-primary"
        onClick={() =>
          setCounter((counter) => {
            miVariableObservable.unsubscribe();
            // console.log(miVariableObservable);
            return { ...counter, counter1: counter1 - 1 };
          })
        }
      >
        -1
      </button>
    </div>
  );
};
