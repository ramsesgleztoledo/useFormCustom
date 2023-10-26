import { Child } from "./Child";
import { useCallback, useState } from "react";
const numbers = [2, 4, 6, 8, 10];
export const Father = () => {
  const [valor, setValor] = useState(0);

  const increment = useCallback((num) => {
    setValor((value) => value + num);
  }, []);

  return (
    <div>
      <h1>Padre</h1>
      <p> Total: {valor} </p>

      <hr />

      {numbers.map((n) => (
        <Child
          key={n}
          number={n}
          increment={increment}
        />
      ))}
      {/* <Child /> */}
    </div>
  );
};
