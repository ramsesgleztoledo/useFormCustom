import { useForm } from "../hooks/useForm";
import validations from "../helpers/validations";
export const SimpleFormWithCustomHook = () => {
  const {
    formState,
    onFieldChange,
    onFormReset,
    // resetField,
    // getValue,
    // addField,
    isValidField,
    isValidForm,
  } = useForm({
    email: {
      value: "ramsesgleztoledo@gmail",
      validations: [
        validations.isEmail,
        validations.pattern(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        ),
      ],
    },
    other: [{ value: [1, 2, 3, 33] }],
    // email: "ramsesgleztoledo@gmail.com",
    // username: [
    //   { value: 2, type: "number" },
    //   { value: "link", type: "string" },
    //   { value: 2, type: "number" },
    //   [{ value: 2, type: "number" }, {}],
    // ],
    // password: { value: "123" },
    // email: {
    //   value: "ramses@nintendo.com",
    //   type: "string",
    //   id: 34,
    //   validations: [],
    // },
    password: {
      value: "1@A",
      validations: [validations.isGoodPassword, validations.minCharacters(12)],
    },
    // other: [
    //   {
    //     value: "other value",
    //     type: "string",
    //     id: 36,
    //     validations: [validations.isEmail],
    //   },
    //   {},
    //   [
    //     { value: 333, type: "number", id: 38, validations: [] },
    //     [{ type: "array" }],
    //     {},
    //   ],
    //   {},
    //   3,
    //   33,
    // ],
  });

  return (
    <div style={{ backgroundColor: "#d3d3d3" }}>
      <h1>Simple Form with custom hook</h1>
      <hr />
      <input
        type="email"
        className="form-control mt-2 mt-2"
        placeholder="Email"
        name="email"
        value={formState.email.value}
        onChange={(event) => {
          onFieldChange(event);
        }}
      />
      <input
        type="password"
        className="form-control mt-2 mt-2"
        placeholder="Password"
        name="password"
        value={formState.password.value}
        onChange={(event) => {
          onFieldChange(event);
        }}
      />
      {/* <div className="input-group mb-3">
        <div className="input-group-text">
          <input
            className="form-check-input mt-0"
            type="checkbox"
            checked={username.value}
            value={username.value}
            name="username"
            aria-label="Checkbox for following text input"
            onChange={(event) => {
              // console.log(event);
              onFieldChange(event);
            }}
          />
        </div>
      </div> */}
      {/* <input
        type="email"
        className="form-control mt-2 mt-2"
        placeholder="email"
        name="email"
        value={email}
        onChange={(event) => onFieldChange(event)}
      /> */}
      {/* <input
        type="password"
        className="form-control mt-2 mt-2"
        placeholder="password"
        name="password"
        value={formState.password.value}
        onChange={(event) => onFieldChange(event)}
      />
      <hr />
      <hr />
      {formState.other.map(({ id, value }, index) => (
        <input
          key={id}
          type="text"
          className="form-control mt-2 mt-2"
          placeholder={`added ${index}`}
          name={index}
          value={value}
          onChange={(event) => onFieldChange(event, ["other", index])}
        />
      ))} */}
      {/* <div className="row">
        <button
          className="btn btn-primary mt-2"
          onClick={() => {
            addField("other", { id: new Date().getTime(), value: "" });
          }}
        >
          add field
        </button>
      </div>
      <button
        className="btn btn-primary mt-2"
        onClick={() => {
          onFormReset(
            {
              other: [
                { id: 0, value: "" },
                { id: 1, value: "" },
                { id: 2, value: "" },
                { id: 3, value: "" },
              ],
            },
            false
          );
        }}
      >
        Reset
      </button>
      <button
        className="btn btn-primary mt-2 float-end"
        onClick={() => resetField("username")}
      >
        Reset field
      </button>
      <button
        className="btn btn-primary mt-2 float-end"
        onClick={() => {
          console.log(other);
        }}
      >
        print other
      </button> */}

      <button
        className="btn btn-primary mt-2 float-end"
        onClick={() => console.log(formState)}
        disabled={isValidField(["email"]) ? false : true}
      >
        print form
      </button>
      <button
        className="btn btn-primary mt-2"
        onClick={() => onFormReset({}, false)}
      >
        reset form
      </button>
      <button
        className="btn btn-primary mt-2"
        onClick={() => onFormReset({}, true)}
      >
        reset form by default
      </button>
      {/* <button
        className="btn btn-primary mt-2"
        onClick={() => resetField(["username"])}
      >
        reset username
      </button> */}
      {/* <button
        className="btn btn-primary mt-2"
        onClick={() => console.log(getValue(["other", 0]))}
      >
        get value
      </button> */}
      {/* <button
        className="btn btn-primary mt-2"
        onClick={() => addField(["other"], { value: 13, type: "number" })}
      >
        add a value
      </button> */}
      <button
        className="btn btn-primary mt-2"
        onClick={() => console.log(isValidField(["email"]))}
      >
        is a valid field
      </button>
      <h2>Fields</h2>
      <h3>email</h3>
      <code>
        {" "}
        <pre>{JSON.stringify(isValidField(["email"]), null, 3)}</pre>
      </code>
      <h3>password</h3>
      <code>
        <pre>{JSON.stringify(isValidField(["password"], true), null, 3)}</pre>
      </code>
      <hr />
      <h2>Form</h2>
      <code>
        {" "}
        <pre>{JSON.stringify(isValidForm(true), null, 3)}</pre>
      </code>
      <hr />
    </div>
  );
};
