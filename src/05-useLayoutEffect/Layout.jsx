import { useCounter, useFetch } from "../hooks/";
import { LoadingQuote, Quote } from "../03-examples";

// import { useState } from "react";

let isIncrease = true;

export const Layout = () => {
  const { counter, increase, decrease } = useCounter(1);
  const {
    data,
    isLoading,
    // hasError
  } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
  //   console.log(data, isLoading, hasError);
  //   const { author, quote } = !!data && data[0];
  // const [isIncrease, setIsIncrease] = useState(true);

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />
      <div
        className="row"
        style={{ justifyContent: "end" }}
      >
        <button
          disabled={isLoading}
          className="btn btn-primary float-end"
          style={{ width: "200px" }}
          onClick={() => {
            console.log(isIncrease);
            if (isIncrease) {
              console.log("increasing");
              increase();
            } else {
              console.log("decreasing");
              decrease();
            }
            isIncrease = !isIncrease;
            // setIsIncrease(!isIncrease);
          }}
        >
          next quotes
        </button>
      </div>

      <>
        {/* //* If  */}
        {isLoading && <LoadingQuote></LoadingQuote>}
        {/* //! Else  */}
        {!isLoading && (
          <div className="returned">
            <hr />
            <div className="row">
              {data.map(({ quote, author }, index) => (
                <div key={quote}>
                  <Quote
                    quote={quote}
                    author={author}
                    index={index}
                  ></Quote>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        )}
      </>

      {/* 
      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <div className="returned">
          <div
            className="row"
            style={{ justifyContent: "end" }}
          >
            <button
              disabled={isLoading}
              className="btn btn-primary float-end"
              style={{ width: "200px" }}
              onClick={() => {
                console.log(isIncrease);
                if (isIncrease) {
                  console.log("increasing");
                  increase();
                } else {
                  console.log("decreasing");
                  decrease();
                }
                isIncrease = !isIncrease;
                // setIsIncrease(!isIncrease);
              }}
            >
              next quotes
            </button>
          </div>
          <hr />
          <div className="row">
            {data.map(({ quote, author }, index) => (
              <div key={quote}>
                <blockquote
                  className={
                    index % 2 === 0 ? "blockquote text-end" : "blockquote"
                  }
                >
                  <p className="mb-1">{quote}</p>
                  <footer className="blockquote-footer">{author}</footer>
                </blockquote>
                <hr />
              </div>
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
};
