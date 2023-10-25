import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooka = () => {
  const {
    data,
    isLoading,
    // hasError
  } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/5`);
  //   console.log(data, isLoading, hasError);
  //   const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <div className="returned">
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
          <div
            className="row"
            style={{ justifyContent: "end" }}
          >
            <button
              className="btn btn-primary float-end"
              style={{ width: "200px" }}
            >
              next quotes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
