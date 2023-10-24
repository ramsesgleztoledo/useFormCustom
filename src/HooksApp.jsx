import { useState } from "react";
import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { SimpleFormWithCustomHook } from "./02-useEffect/SimpleFormWithCustomHook";

export const HooksApp = () => {
  const [items, setItems] = useState([false, false, false, true]);

  return (
    <>
      <div
        className="accordion"
        id="accordionExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              onClick={() => {
                items[0] = !items[0];
                console.log(items[0]);

                setItems([...items]);
                console.log(items);
              }}
            >
              CounterApp
            </button>
          </h2>
          {items[0] === true && (
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <CounterApp></CounterApp>
              </div>
            </div>
          )}
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              onClick={() => {
                items[1] = !items[1];
                console.log(items[1]);

                setItems([...items]);
                console.log(items);
              }}
            >
              CounterWithCustomHook
            </button>
          </h2>
          {items[1] === true && (
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <CounterWithCustomHook></CounterWithCustomHook>
              </div>
            </div>
          )}
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              onClick={() => {
                items[2] = !items[2];
                console.log(items[2]);

                setItems([...items]);
                console.log(items);
              }}
            >
              SimpleForm
            </button>
          </h2>
          {items[2] === true && (
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <SimpleForm></SimpleForm>
              </div>
            </div>
          )}
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              onClick={() => {
                items[3] = !items[3];
                console.log(items[3]);

                setItems([...items]);
                console.log(items);
              }}
            >
              SimpleFormWithCustomHook
            </button>
          </h2>
          {items[3] === true && (
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
              // style={{ display: !items[3] && "none" }}
            >
              <div className="accordion-body">
                <SimpleFormWithCustomHook></SimpleFormWithCustomHook>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
