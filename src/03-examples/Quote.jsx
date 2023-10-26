import PropTypes from "prop-types";
import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ quote, index, author }) => {
  const pRef = useRef();

  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    console.log(pRef.current.getBoundingClientRect());

    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, [quote]);

  return (
    <>
      <blockquote
        className={index % 2 === 0 ? "blockquote text-end" : "blockquote"}
        style={{ display: "flex" }}
      >
        <p
          ref={pRef}
          className="mb-1"
        >
          {quote}
        </p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
};

// Quote.defaultProps = {
//   data: [],
// };
