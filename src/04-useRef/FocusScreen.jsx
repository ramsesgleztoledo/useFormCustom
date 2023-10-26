import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="Insert your name"
      />

      <button
        className="btn btn-primary mt-2"
        onClick={() => {
          console.log(inputRef);
          inputRef.current.select();
        }}
      >
        set focus
      </button>
    </>
  );
};
