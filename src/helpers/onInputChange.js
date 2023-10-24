export const onInputChange = (
  targetValue,
  setFunction,
  index = [],
  isNumber = false
) => {
  let value = targetValue;
  if (isNumber) {
    if (value) value = Number(value);
  }
  if (index.length === 0) {
    setFunction(value);
  } else {
    setFunction((object) => {
      const auxObject = { ...object };

      if (index.length > 1) {
        let newValue = auxObject[index[0]];

        for (let i = 1; i < index.length - 1; i++) {
          if (typeof newValue === "object") newValue = newValue[index[i]];
          else
            throw new Error(
              `impossible to find the prop "${index[i]}" in a not object field ("${newValue}")`
            );
        }
        if (typeof newValue === "object")
          newValue[index[index.length - 1]] = value;
        else
          throw new Error(
            `impossible to find the prop "${
              index[index.length - 1]
            }" in a not object field ("${newValue}")`
          );
      } else {
        if (index[0] in object) auxObject[index[0]] = value;
        else throw new Error(`there is not a field called ${index[0]}`);
      }

      return auxObject;
    });
  }
};
