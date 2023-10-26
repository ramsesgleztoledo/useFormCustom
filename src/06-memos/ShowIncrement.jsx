import { memo } from "react";

export const ShowIncrement = memo(({ increment }) => {
  console.log("printing again :)");

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      increment
    </button>
  );
});

ShowIncrement.displayName = "ShowIncrement";
