import { useEffect, useState } from "react";
// import { Subject } from "rxjs";

export const MessageComponent = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // console.log("message mounted");

    // const miVariableObservable = new Subject();

    // const interval = setInterval(() => {
    //   console.log("interval printing");
    //   if (!miVariableObservable.closed)
    //     miVariableObservable.next(new Date().getTime());
    // }, 1000);

    // miVariableObservable.subscribe((data) => {
    //   console.log(data);
    // });
    const onMouseMove = ({ x, y }) => {
      console.log(x, y);
      setCoords({ x, y });
    };
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      // console.log("message unMounted");
      // clearInterval(interval);
      // miVariableObservable.unsubscribe();
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>The user already exist</h3>
      <h1>{JSON.stringify(coords)}</h1>
    </>
  );
};
