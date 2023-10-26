export default {
  //* required
  required: ({ value }) => {
    if (value) {
      return null;
    } else {
      return { required: `${value}` };
    }
  },
  //* minCharacters
  minCharacters:
    (min) =>
    ({ value }) => {
      const stringValue = `${value}`;

      if (stringValue.length >= min) {
        return null;
      } else {
        return { minCharacters: min };
      }
    },
  //* maxCharacters
  maxCharacters:
    (max) =>
    ({ value }) => {
      const stringValue = `${value}`;

      if (stringValue.length <= max) {
        return null;
      } else {
        return { maxCharacters: location };
      }
    },

  //* minValue
  minValue:
    (min) =>
    ({ value }) => {
      if (typeof value !== "number" && value !== "")
        throw new Error(
          `Validation minValue can be applied only to a number value, value: "${JSON.stringify(
            value
          )}"`
        );
      if (value >= min) {
        return null;
      } else {
        return { minValue: min };
      }
    },
  //* maxValue
  maxValue:
    (max) =>
    ({ value }) => {
      if (typeof value !== "number" && value !== "")
        throw new Error(
          `Validation maxValue can be applied only to a number value, value: "${JSON.stringify(
            value
          )}"`
        );
      if (value <= max) {
        return null;
      } else {
        return { maxValue: max };
      }
    },
  //* isEmail
  isEmail: ({ value }) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailPattern.test(value)) return null;
    else return { isNotEmail: `${value}` };
  },
  //* isGoodPassword
  isGoodPassword: ({ value }) => {
    const goodPassword =
      /^(?=.*[0-9])(?=.*[-[\]_=+!@#$%^'"/,.?:;)(}{&*<>])(?=.*[A-Z]).*$/;

    if (goodPassword.test(value)) return null;
    else return { isNotGoodPassword: `${value}` };
  },
  //* match with the pattern
  pattern:
    (patter) =>
    ({ value }) => {
      if (!(patter instanceof RegExp))
        throw new Error(
          `Validation pattern can be applied only with a RegExp, patter: "${JSON.stringify(
            patter
          )}"`
        );

      if (patter.test(value)) return null;
      else return { notMatchPattern: `${patter}` };
    },
  //* match with the includes
  includes:
    (include) =>
    ({ value }) => {
      const stringValue = `${value}`;

      if (stringValue.includes(`${include}`)) return null;
      else return { notIncludes: include };
    },
  //* not match with the includes
  notIncludes:
    (include) =>
    ({ value }) => {
      const stringValue = `${value}`;

      if (!stringValue.includes(`${include}`)) return null;
      else return { includes: include };
    },
  //* match with the includes ignore Cap
  includesIgnoreCap:
    (include) =>
    ({ value }) => {
      const stringValue = `${value}`.toLowerCase();

      if (stringValue.includes(`${include.toLowerCase()}`)) return null;
      else return { notIncludesIgnoreCase: include };
    },
  //* not match with the includes ignore Cap
  notIncludesIgnoreCap:
    (include) =>
    ({ value }) => {
      const stringValue = `${value}`.toLowerCase();

      if (!stringValue.includes(`${include.toLowerCase()}`)) return null;
      else return { includesIgnoreCase: include };
    },
  //* equal
  equal:
    (equal) =>
    ({ value }) => {
      const stringValue = `${value}`;

      if (stringValue === `${equal}`) return null;
      else return { notEqual: equal };
    },
  //* equal ignore Cap
  equalIgnoreCap:
    (equal) =>
    ({ value }) => {
      const stringValue = `${value}`.toLowerCase();

      if (stringValue === `${equal}`.toLowerCase()) return null;
      else return { notEqualIgnoreCase: equal };
    },
  //* not equal ignore Cap
  notEqualIgnoreCap:
    (equal) =>
    ({ value }) => {
      const stringValue = `${value}`.toLowerCase();

      if (stringValue !== `${equal}`.toLowerCase()) return null;
      else return { isEqualIgnoreCase: equal };
    },
  //* startWith
  startWith:
    (start) =>
    ({ value }) => {
      const stringValue = `${value}`[0];

      if (stringValue === start[0]) return null;
      else return { notStarWith: start };
    },
  //* startWith ignore Cap
  startWithIgnoreCase:
    (start) =>
    ({ value }) => {
      const stringValue = `${value}`.toLowerCase()[0];

      if (stringValue === start.toLowerCase()[0]) return null;
      else return { notStarWithIgnoreCase: start };
    },
  //* endWith
  endWith:
    (end) =>
    ({ value }) => {
      let stringValue = `${value}`;
      stringValue = stringValue[stringValue.length - 1];

      if (stringValue === end[0]) return null;
      else return { notEndWith: end };
    },
  //* endWith ignore Cap
  endWithIgnoreCase:
    (end) =>
    ({ value }) => {
      let stringValue = `${value}`.toLowerCase();
      stringValue = stringValue[stringValue.length - 1];

      if (stringValue === end.toLowerCase([0])) return null;
      else return { notEndWithIgnoreCase: end };
    },
  //* startWithUpperCase
  startWithUpperCase: ({ value }) => {
    const stringValue = `${value}`.toUpperCase()[0];

    if (stringValue === value[0]) return null;
    else return { notStartWithUpperCase: value };
  },
  //* startWithLowerCase
  startWithLowerCase: ({ value }) => {
    const stringValue = `${value}`.toLowerCase()[0];

    if (stringValue === value[0]) return null;
    else return { notStartWithLowerCase: value };
  },
  //* isLowerCase
  isLowerCase: ({ value }) => {
    const stringValue = `${value}`.toLowerCase();

    if (stringValue === value) return null;
    else return { notLowerCase: value };
  },
  //* isUpperCase
  isUpperCase: ({ value }) => {
    const stringValue = `${value}`.toUpperCase();

    if (stringValue === value) return null;
    else return { notUpperCase: value };
  },
  //* notSpaces
  notSpaces: ({ value }) => {
    const stringValue = `${value}`;

    for (let i = 0; i < stringValue.length; i++) {
      if (stringValue[i] === " ")
        return {
          isSpaced: value,
        };
    }

    return null;
  },
  //* upperCaseWords
  upperCaseWords: ({ value }) => {
    const stringValue = `${value}`;

    let newWord = true;

    for (let i = 0; i < stringValue.length; i++) {
      if (stringValue[i] !== " ") {
        if (newWord) {
          if (stringValue.toUpperCase()[i] !== stringValue[i])
            return { notUpperCaseWords: value };
          else newWord = false;
        }
      } else newWord = true;
    }

    return null;
  },
};
