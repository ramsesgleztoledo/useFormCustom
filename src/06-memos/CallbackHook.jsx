import { useCallback, useEffect, useState } from "react";

import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(33);

  const incrementFather = useCallback(
    (value) => {
    console.log(value);
    setCounter((counter) => counter + value);
  }, []);

  useEffect(() => {}, [incrementFather]);

  console.log("painting father");

  //   const incrementFather = () => {
  //     setCounter(counter + 1);
  //   };

  useEffect(() => {
    // incrementFather();
  }, [incrementFather]);

  return (
    <>
      <h1>useCallback hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFather}></ShowIncrement>
    </>
  );
};
