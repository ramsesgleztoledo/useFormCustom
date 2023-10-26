import { useState } from "react";
import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { SimpleFormWithCustomHook } from "./02-useEffect/SimpleFormWithCustomHook";
import { MultipleCustomHooka } from "./03-examples/MultipleCustomHooka";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { Layout } from "./05-useLayoutEffect/Layout";
import { Memorize } from "./06-memos/Memorize";
import { MemoHook } from "./06-memos/MemoHook";
import { CallbackHook } from "./06-memos/CallbackHook";
import { Father } from "./07-task-memo/Father";

export const HooksApp = () => {
  const [items, setItems] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
  ]);

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
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              onClick={() => {
                items[4] = !items[4];

                setItems([...items]);
              }}
            >
              MultipleCustomHooka
            </button>
          </h2>
          {items[4] === true && (
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
              // style={{ display: !items[3] && "none" }}
            >
              <div className="accordion-body">
                <MultipleCustomHooka></MultipleCustomHooka>
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
                items[5] = !items[5];

                setItems([...items]);
              }}
            >
              FocusScreen
            </button>
          </h2>
          {items[5] === true && (
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
              // style={{ display: !items[3] && "none" }}
            >
              <div className="accordion-body">
                <FocusScreen></FocusScreen>
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
                items[6] = !items[6];

                setItems([...items]);
              }}
            >
              useLayoutEffect
            </button>
          </h2>
          {items[6] === true && (
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
              // style={{ display: !items[3] && "none" }}
            >
              <div className="accordion-body">
                <Layout></Layout>
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
                items[7] = !items[7];

                setItems([...items]);
              }}
            >
              Memorize
            </button>
          </h2>
          {items[7] === true && (
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
              // style={{ display: !items[3] && "none" }}
            >
              <div className="accordion-body">
                <Memorize></Memorize>
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
                items[8] = !items[8];

                setItems([...items]);
              }}
            >
              MemoHook
            </button>
          </h2>
          {items[8] === true && (
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
              // style={{ display: !items[3] && "none" }}
            >
              <div className="accordion-body">
                <MemoHook></MemoHook>
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
                items[9] = !items[9];

                setItems([...items]);
              }}
            >
              CallbackHook
            </button>
          </h2>
          {items[9] === true && (
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
              // style={{ display: !items[3] && "none" }}
            >
              <div className="accordion-body">
                <CallbackHook></CallbackHook>
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
                items[10] = !items[10];

                setItems([...items]);
              }}
            >
              Father
            </button>
          </h2>
          {items[10] === true && (
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
              // style={{ display: !items[3] && "none" }}
            >
              <div className="accordion-body">
                <Father></Father>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
