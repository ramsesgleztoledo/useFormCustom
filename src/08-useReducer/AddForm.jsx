import validations from "../helpers/validations";
import { useForm } from "../hooks/useForm";

// import "./useReducer.scss";
// import styled from "styled-components";
// const RedDiv = styled.div`
//   background-color: red;

// `;

export const AddForm = ({ onNewTodo }) => {
  const {
    formState: { description, conditions },
    onFieldChange,
    isValidForm,
    onFormReset,
  } = useForm({
    description: { value: "", validations: [validations.required] },
    conditions: {
      value: true,
      // type: "boolean",
      validations: [validations.required],
    },
  });

  return (
    <div className="add-form-jsx">
      <h4>add todo</h4>
      <hr />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const newTodo = {
            id: new Date().getTime(),
            description: description.value,
            done: false,
          };
          onFormReset({}, true);
          onNewTodo(newTodo);
        }}
      >
        <div className="row red-div">
          <input
            value={description.value}
            type="text"
            placeholder="what do we need to do?"
            className="form-control"
            name="description"
            onChange={onFieldChange}
          />
        </div>
        <div className="row mt-2 blue-div">
          <input
            checked={conditions.value}
            value={conditions.value}
            type="checkbox"
            className="form-check-input"
            name="conditions"
            onChange={onFieldChange}
            style={{ width: "26px", height: "26px", cursor: "pointer" }}
          />
        </div>

        <button
          type="submit"
          className="btn btn-outline-primary mt-1 float-end"
          disabled={!isValidForm()}
        >
          Add
        </button>
      </form>

      {/* <h1>{JSON.stringify(isValidForm(true))}</h1> */}
    </div>
  );
};
