import { useForm } from "../hooks/useForm";

export const SimpleFormWithCustomHook = () => {
  const {
    formState: { username, email, password, other },
    onFieldChange,
    onFormReset,
    resetField,
    addField,
  } = useForm({
    username: "ramses",
    email: "ramses@",
    password: 2,
    other: [],
  });

  return (
    <div style={{ backgroundColor: "#e2bcdd" }}>
      <h1>Simple Form with custom hook</h1>
      <hr />
      <input
        type="text"
        className="form-control mt-2 mt-2"
        placeholder="Username"
        name="username"
        value={username}
        onChange={(event) => onFieldChange(event)}
      />
      <input
        type="email"
        className="form-control mt-2 mt-2"
        placeholder="email"
        name="email"
        value={email}
        onChange={(event) => onFieldChange(event)}
      />
      <input
        type="password"
        className="form-control mt-2 mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={(event) => onFieldChange(event)}
      />
      <hr />
      <hr />
      {other.map(({ id, value }, index) => (
        <input
          key={id}
          type={index % 2 === 0 ? "text" : "number"}
          className="form-control mt-2 mt-2"
          placeholder={`added ${index % 2 !== 0 ? "number" : "text"}: ${
            index + 1
          }`}
          name={index}
          value={value}
          onChange={(event) =>
            onFieldChange(event, ["other"], index % 2 !== 0, true)
          }
        />
      ))}
      <div className="row">
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
      </button>
      <hr />
    </div>
  );
};
