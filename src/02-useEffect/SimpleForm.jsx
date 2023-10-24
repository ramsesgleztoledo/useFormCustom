import { useState, useEffect } from "react";
import { onInputChange } from "../helpers/oninputChange";
import { MessageComponent } from "./MessageComponent.jsx";

export const SimpleForm = () => {
  const [first, setFirst] = useState([{ other: 1 }, "hi"]);

  const [ageState, setAgeState] = useState("");
  const [formState, setFormState] = useState({
    username: "link",
    email: {
      email1: "link@nintendo.com",
      email2: {
        auxEmail: "zelda@direct.com",
        extraEmail: [
          3,
          {
            other: 33,
          },
          3,
        ],
      },
    },
  });

  const {
    username,
    email: {
      email1,
      email2: {
        auxEmail,
        extraEmail: [, { other }],
      },
    },
  } = formState;

  useEffect(() => {
    console.log("useEffect started");
  }, [auxEmail, other]);

  useEffect(() => {
    console.log("useEffect started in form");
  }, [formState]);

  useEffect(() => {
    console.log("only in the beginning");
  }, []);
  useEffect(() => {
    console.log("any time");
  });

  return (
    <div style={{ backgroundColor: "#bce2cd" }}>
      <h1>Simple Form</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="age"
        name="age"
        value={first[1]}
        onChange={(event) => onInputChange(event.target.value, setFirst, [1])}
      />
      <input
        type="number"
        className="form-control mt-2 mt-2"
        placeholder="age"
        name="age"
        value={ageState}
        onChange={(event) =>
          onInputChange(event.target.value, setAgeState, [], true)
        }
      />
      <input
        type="text"
        className="form-control mt-2 mt-2"
        placeholder="Username"
        name="username"
        value={username}
        onChange={(event) =>
          onInputChange(event.target.value, setFormState, ["username"])
        }
      />
      <input
        type="email"
        className="form-control mt-2 mt-2"
        placeholder="link@nintendo.com"
        name="email"
        value={email1}
        onChange={(event) =>
          onInputChange(event.target.value, setFormState, ["email", "email1"])
        }
      />
      <input
        type="email"
        className="form-control mt-2 mt-2"
        placeholder="link@nintendo.com"
        name="email"
        value={auxEmail}
        onChange={(event) =>
          onInputChange(event.target.value, setFormState, [
            "email",
            "email2",
            "auxEmail",
          ])
        }
      />
      <input
        type="number"
        className="form-control mt-2 mt-2"
        placeholder="link@nintendo.com"
        name="email"
        value={other}
        onChange={(event) =>
          onInputChange(
            event.target.value,
            setFormState,
            ["email", "email2", "extraEmail", 1, "other"],
            true
          )
        }
      />
      
      {username === "lin" && <MessageComponent></MessageComponent>}
      <hr />
    </div>
  );
};
