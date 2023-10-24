import { useState } from "react";
import { onInputChange } from "../helpers/oninputChange";

export const useForm = (form) => {
  const [formState, setFormState] = useState(form);

  const onFieldChange = (
    { target: { value, name } },
    index = [],
    isNumber = false,
    dynamicField = false
  ) => {
    let auxIndex = [...index, name];
    if (dynamicField) auxIndex = [...auxIndex, "value"];

    onInputChange(value, setFormState, [...auxIndex], isNumber);
  };

  const onFormReset = (newForm, original = false) => {
    if (original) setFormState({ ...form });
    else setFormState({ ...resetForm({ ...newForm }) });
  };

  const resetForm = (auxForm) => {
    const emptyForm = { ...formState };

    for (const prop in emptyForm) {
      if (Array.isArray(emptyForm[prop])) emptyForm[prop] = [];
      else if (typeof emptyForm[prop] === "object") emptyForm[prop] = {};
      else emptyForm[prop] = "";
    }

    for (const prop in auxForm) {
      if (prop in emptyForm) {
        emptyForm[prop] = auxForm[prop];
      } else {
        throw new Error(`there is not a field called ${prop}`);
      }
    }

    return emptyForm;
  };

  const resetField = (field) => {
    if (field in formState) {
      if (Array.isArray(formState[field])) formState[field] = [];
      else if (typeof formState[field] === "object") formState[field] = {};
      else formState[field] = "";

      setFormState({ ...formState });
    } else {
      throw new Error(`there is not a field called ${field}`);
    }
  };


 

  const addField = (field, value) => {
    if (field in form) {
      if (Array.isArray(form[field])) {
        const newForm = { ...formState };
        console.log(newForm);
        newForm[field] = [value, ...newForm[field]];
        setFormState({ ...newForm });
      } else
        throw new Error(
          `It is impossible to add the ${JSON.stringify(
            value
          )} to the field "${field}" since this is not an array`
        );
    } else throw new Error(`The field "${field}" does not exist in the Form`);
  };

  return {
    formState,
    onFieldChange,
    onFormReset,
    resetField,
    addField,

  };
};
