import { useState } from "react";

// import { onInputChange } from "../helpers/oninputChange";

export const useForm = (form) => {
  /**============================================
 //* Preparing the initial form 
 *=============================================**/

  const prepareForm = () => {
    if (!(typeof form === "object" && !Array.isArray(form)))
      throw new Error(
        `The form: "${JSON.stringify(form)} has an invalid format"`
      );

    const auxForm = {};

    for (let prop in form) {
      if (Array.isArray(form[prop])) {
        auxForm[prop] = [...fillArray(form[prop])];
      } else {
        auxForm[prop] = { ...fillObject(form[prop]) };
      }
    }

    return auxForm;
  };

  /**============================================
   //* fill the objects in the array with the id, and the rest of the fields 
   *=============================================**/

  const fillObject = (element) => {
    let mainElement = element;
    if (typeof mainElement !== "object") mainElement = { value: mainElement };
    fixValueAndType(mainElement);

    const id = Math.random() * Math.pow(10, 18).toString().padStart(18, "0");

    const nextElement = {
      type: mainElement.type || "string",
      validations: mainElement.validations || [],
      id: `${new Date().getTime()}${id}`,
    };
    const value = mainElement.value;

    switch (nextElement.type) {
      case "string":
        if (!value) nextElement.value = "";
        else {
          if (typeof value === "string") nextElement.value = value;
          else
            throw new Error(
              `The value "${JSON.stringify(value)}" is not a string`
            );
        }

        break;
      case "number":
        if (!value) nextElement.value = "";
        else {
          if (typeof value === "number") nextElement.value = value;
          else
            throw new Error(
              `The value "${JSON.stringify(value)}" is not a number`
            );
        }

        break;
      case "boolean":
        if (!value) nextElement.value = false;
        else {
          if (typeof value === "boolean") nextElement.value = value;
          else
            throw new Error(
              `The value "${JSON.stringify(value)}" is not a boolean`
            );
        }

        break;
      case "array":
        if (!value) nextElement.value = [];
        else {
          if (Array.isArray(value)) nextElement.value = [...value];
          else
            throw new Error(
              `The value "${JSON.stringify(value)}" is not an array`
            );
        }

        break;

      case "object":
        if (!value) nextElement.value = {};
        else {
          if (typeof value === "object") nextElement.value = { ...value };
          else
            throw new Error(
              `The value "${JSON.stringify(value)}" is not an object`
            );
        }

        break;

      default:
        throw new Error(`The type "${nextElement.type}" is an invalid type`);
    }

    return nextElement;
  };
  /*=============== END OF SECTION ==============*/

  /**========================================================================
  //* Fixing the values and types 
 *========================================================================**/

  const fixValueAndType = (element) => {
    if (element.value && element.type) {
      if (typeof element.value !== element.type) {
        throw new Error(
          `The value "${element.value}" is not of type "${element.type}"`
        );
      }
    }
    if (element.value && !element.type) {
      const type = typeof element.value;
      element.type = type;
    }
  };
  /*============================ END OF SECTION ============================*/

  /**============================================
//* fill the array with the rest of the objects or arrays
   *=============================================**/

  const fillArray = (arrayElement) => {
    let newArray = [];

    for (let i = 0; i < arrayElement.length; i++) {
      if (!Array.isArray(arrayElement[i])) {
        newArray.push({ ...fillObject(arrayElement[i]) });
      } else {
        newArray.push([...fillArray(arrayElement[i])]);
      }
    }

    return newArray;
  };

  /*=============== END OF SECTION ==============*/

  const defaultForm = prepareForm();
  const [formState, setFormState] = useState(defaultForm);
  /*============================ END OF SECTION ============================*/

  /**=======================================================================================================================

//?  Functions of the form
 *=======================================================================================================================**/

  /**========================================================================
   //* onFieldChange, set the new value to the form
   *========================================================================**/
  const onFieldChange = (
    { target: { value, name } },
    fieldLocation = [name]
  ) => {
    if (!fieldLocation[0])
      throw new Error(`It is impossible to locate the field`);

    const auxForm = { ...formState };

    if (fieldLocation.length === 1 && itIsAProp(fieldLocation[0], auxForm)) {
      if (!("value" in auxForm[fieldLocation[0]]))
        throw new Error(
          `The field "${JSON.stringify(auxForm)}" is not a valid field`
        );
      fillWithNewValue(auxForm[fieldLocation[0]], value);
    } else {
      findTheField(auxForm, fieldLocation, value);
    }

    setFormState({ ...auxForm });
  };

  /*============================ END OF SECTION ============================*/

  /**========================================================================
   //* itIsAProp, check if there is a prop with the same name as the param               
   *========================================================================**/

  const itIsAProp = (prop, defaultForm) => {
    if (prop in defaultForm) {
      return true;
    } else {
      throw new Error(
        `The prop "${JSON.stringify(
          prop
        )}" does not exist in the object: "${JSON.stringify(defaultForm)}"`
      );
    }
  };

  /*============================ END OF SECTION ============================*/
  /**========================================================================
   * fillWithNewValue, set the new value in the input
   *========================================================================**/

  const fillWithNewValue = (element, value) => {
    const { type } = element;

    switch (type) {
      case "string":
        if (!value) element.value = "";
        else {
          if (typeof value === "string") {
            element.value = value;
          } else {
            throw new Error("This field can only receive a string value");
          }
        }
        break;
      case "boolean":
        if (!value) element.value = true;
        else {
          if (
            value.toLowerCase() === "true" ||
            value.toLowerCase() === "false"
          ) {
            element.value = value.toLowerCase() !== "true";
          } else {
            throw new Error("This field can only receive a boolean value");
          }
        }
        break;
      case "number":
        if (!value) element.value = "";
        else {
          if (!isNaN(value)) {
            if (!value) element.value = "";
            else element.value = Number(value);
          } else {
            throw new Error("This field can only receive a number value");
          }
        }
        break;
      case "array":
        if (!value) element.value = [];
        else {
          if (Array.isArray(value)) {
            if (!value) element.value = [];
            else element.value = [...value];
          } else {
            throw new Error("This field can only receive an array value");
          }
        }
        break;

      default:
        if (!value) element.value = {};
        else {
          if (typeof value === "object") {
            if (!value) element.value = {};
            else element.value = { ...value };
          } else {
            throw new Error("This field can only receive an object value");
          }
        }
        break;
    }
  };

  /*============================ END OF SECTION ============================*/

  /**========================================================================
    //* findTheField, find the field in the form following the fieldLocation array
   *========================================================================**/

  const findTheField = (auxForm, fieldLocation, value) => {
    let element = { ...auxForm };

    for (let i = 0; i < fieldLocation.length; i++) {
      checkTheProp(element, fieldLocation[i]);
      element = element[fieldLocation[i]];
    }

    if (!("value" in element))
      throw new Error(
        `The field "${JSON.stringify(element)}" is not a valid field`
      );

    fillWithNewValue(element, value);
  };
  /*============================ END OF SECTION ============================*/

  /**========================================================================
   //* Check if the position/prop exist in the object/array 
   *========================================================================**/

  const checkTheProp = (element, prop) => {
    if (Array.isArray(element)) {
      if (typeof prop !== "number")
        throw new Error(
          `The position "${JSON.stringify(
            prop
          )}" is not a number, the fieldLocation for arrays can be only numbers`
        );

      const arrayLength = element.length;

      if (prop >= arrayLength || prop < 0)
        throw new Error(
          `The position "${JSON.stringify(prop)}" is not contained in the array`
        );
    } else {
      itIsAProp(prop, element);
    }
  };
  /*============================ END OF SECTION ============================*/

  /**========================================================================
  //* reset the form with the received values, and the rest
  //* of the values are setting by default if original,
  //* otherwise are setting by empty
   *========================================================================**/

  const onFormReset = (newForm = {}, original = false) => {
    const auxForm = original ? resetForm(true) : resetForm(false);

    for (let prop in newForm) {
      if (prop in auxForm) {
        if (Array.isArray(auxForm[prop]))
          resetArrayField(auxForm[prop], newForm[prop]);
        else auxResetField(auxForm[prop], newForm[prop]);
      } else
        throw new Error(
          `The prop "${prop}" is not in "${JSON.stringify(auxForm)}"`
        );
    }

    setFormState({ ...auxForm });
  };

  /*============================ END OF SECTION ============================*/

  /**========================================================================
 //* reset the form by default if original, otherwise
  //* by empty
 *========================================================================**/

  const resetForm = (original) => {
    const newForm = { ...defaultForm };

    if (!original) {
      for (let prop in newForm) {
        if (Array.isArray(newForm[prop])) {
          resetArrayField(newForm[prop]);
        } else {
          auxResetField(newForm[prop]);
        }
      }
    }

    return newForm;
  };
  /*============================ END OF SECTION ============================*/

  /**========================================================================
  //* reset a field by empty or with a new value 
 *========================================================================**/

  const resetField = (fieldLocation, value) => {
    const auxValue = {
      target: {
        value,
        name: "",
      },
    };

    onFieldChange(auxValue, fieldLocation);
  };
  /*============================ END OF SECTION ============================*/

  /**========================================================================
  //* reset the array fields by empty or with a new value 
 *========================================================================**/
  const resetArrayField = (arrayField, values = []) => {
    for (let i = 0; i < arrayField.length; i++) {
      if (Array.isArray(arrayField[i])) {
        if (values[i]) {
          resetArrayField(arrayField[i], values[i]);
        } else {
          resetArrayField(arrayField[i]);
        }
      } else {
        if (values[i]) {
          auxResetField(arrayField[i], values[i]);
        } else auxResetField(arrayField[i]);
      }
    }
  };
  /*============================ END OF SECTION ============================*/

  /**========================================================================
  //* reset a field/element by empty or with a new value 
 *========================================================================**/
  const auxResetField = (field, value) => {
    const { type } = field;

    switch (type) {
      case "string":
        if (!value) field.value = "";
        else {
          if (typeof value === "string") field.value = value;
          else
            throw new Error(
              `The value "${JSON.stringify(value)}" is not a string`
            );
        }

        break;
      case "number":
        if (!value) field.value = "";
        else {
          if (typeof value === "number") field.value = value;
          else
            throw new Error(
              `The value "${JSON.stringify(value)}" is not a number`
            );
        }

        break;
      case "boolean":
        if (!value) field.value = false;
        else {
          if (typeof value === "boolean") field.value = value;
          else
            throw new Error(
              `The value "${JSON.stringify(value)}" is not a boolean`
            );
        }

        break;
      case "array":
        if (!value) field.value = [];
        else {
          if (Array.isArray(value)) field.value = [...value];
          else
            throw new Error(
              `The value "${JSON.stringify(value)}" is not an array`
            );
        }

        break;

      default:
        if (!value) field.value = {};
        else {
          if (typeof value === "object") field.value = { ...value };
          else
            throw new Error(
              `The value "${JSON.stringify(value)}" is not an object`
            );
        }

        break;
    }
  };
  /*============================ END OF SECTION ============================*/

  /**========================================================================
 //* Locate a value in the form 
 *========================================================================**/
  const locateAfield = (fieldLocation, form = { ...formState }) => {
    let auxForm = form;

    for (let i = 0; i < fieldLocation.length; i++) {
      if (Array.isArray(auxForm)) {
        if (
          isNaN(fieldLocation[i]) ||
          fieldLocation[i] < 0 ||
          fieldLocation[i] >= auxForm.length
        ) {
          throw new Error(
            `It is impossible to get the position "${JSON.stringify(
              fieldLocation[i]
            )}" in the array: "${JSON.stringify(auxForm)}"`
          );
        } else {
          auxForm = auxForm[fieldLocation[i]];
        }
      } else {
        if (fieldLocation[i] in auxForm) auxForm = auxForm[fieldLocation[i]];
        else
          throw new Error(
            `The prop "${JSON.stringify(
              fieldLocation[i]
            )}" is not in "${JSON.stringify(auxForm)}"`
          );
      }
    }

    return auxForm;
  };
  /*============================ END OF SECTION ============================*/

  /**========================================================================
 //* Get a value from the form 
 *========================================================================**/
  const getValue = (fieldLocation) => {
    const element = locateAfield(fieldLocation);

    if (Array.isArray(element))
      throw new Error(
        `The field "${JSON.stringify(element)}" is not a correct field`
      );
    else if (!("value" in element))
      throw new Error(
        `The field "${JSON.stringify(element)}" is not a correct field`
      );

    return element.value;
  };
  /*============================ END OF SECTION ============================*/

  /**========================================================================
 //* Add a new field in a array field in the form 
 *========================================================================**/
  const addField = (fieldLocation, field) => {
    const element = locateAfield(fieldLocation);

    if (!Array.isArray(element))
      throw new Error(
        `The field "${JSON.stringify(element)}" is not a correct field`
      );

    const newField = fillObject({ ...field });

    element.push(newField);

    setFormState({ ...formState });
  };
  /*============================ END OF SECTION ============================*/

  /**========================================================================
//* Check if a field is valid 
 *========================================================================**/

  const isValidField = (fieldLocation, withErrors = false) => {
    const field = { ...locateAfield(fieldLocation) };
    const { validations } = field;

    let isValid = {
      valid: true,
    };
    for (let i = 0; i < validations.length; i++) {
      const validation = validations[i]({ ...field });

      if (validation) {
        isValid.valid = false;
        isValid = { ...isValid, ...validation };
      }
    }

    return withErrors ? { ...isValid } : isValid.valid;
  };
  /*============================ END OF SECTION ============================*/

  /**========================================================================
  //* Check if the form is valid 
 *========================================================================**/

  const isValidForm = (withErrors = false) => {
    const form = { ...formState };
    let validForm = {
      valid: true,
    };

    for (let prop in form) {
      const fieldLocation = [`${prop}`];
      if (!Array.isArray(form[prop])) {
        const fieldValid = isValidField(fieldLocation, true);
        validForm[getFullFieldName(fieldLocation)] = {
          ...fieldValid,
        };
        if (!fieldValid.valid) validForm.valid = false;
      } else {
        validForm = {
          ...validForm,
          ...auxValidFormArray(form[prop], fieldLocation, validForm.valid),
        };
      }
    }
    return withErrors ? { ...validForm } : validForm.valid;
  };
  /*============================ END OF SECTION ============================*/

  /**========================================================================
  //* Check if the arrayFields are valid 
 *========================================================================**/

  const auxValidFormArray = (arrayField, fieldLocation, valid) => {
    let validForm = {
      valid,
    };
    for (let i = 0; i < arrayField.length; i++) {
      if (!Array.isArray(arrayField[i])) {
        const fieldValid = isValidField([...fieldLocation, i], true);
        validForm[getFullFieldName([...fieldLocation, i])] = {
          ...fieldValid,
        };
        if (!fieldValid.valid) validForm.valid = false;
      } else {
        validForm = {
          ...validForm,
          ...auxValidFormArray(
            arrayField[i],
            [...fieldLocation, i],
            validForm.valid
          ),
        };
      }
    }

    return validForm;
  };
  /*============================ END OF SECTION ============================*/

  /**========================================================================
 //* Get the prop name for the field 
 *========================================================================**/

  const getFullFieldName = (fieldLocation) => {
    if (Array.isArray(fieldLocation) && fieldLocation.length > 0) {
      let name = `${fieldLocation[0]}`;

      for (let i = 1; i < fieldLocation.length; i++) {
        name = `${name}-${fieldLocation[i]}`;
      }
      return name;
    } else {
      return new Error(
        `It is impossible to get a full field name from: "${JSON.stringify(
          fieldLocation
        )}"`
      );
    }
  };
  /*============================ END OF SECTION ============================*/

  /*==================================================== END OF SECTION====================================================*/

  return {
    formState,
    onFieldChange,
    onFormReset,
    resetField,
    getValue,
    addField,
    isValidField,
    isValidForm,
  };
};
