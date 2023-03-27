export const actionTypes = {
  sum: "result/SUM",
  sub: "result/sub",
  mul: "result/mul",
  div: "result/div",
  NUMBER_ONE_CHANGED: "input/numer1",
  NUMBER_TWO_CHANGED: "input/numer2",
};
export function calculatorReducer(state, action) {
  console.log(`${calculatorReducer.name} :Called`);
  const { inputs, result } = state;
  const { number1, number2 } = inputs;
  const { type, payload } = action; // 'a'
  switch (type) {
    case actionTypes.sum: {
      return {
        ...state,
        result: {
          ...result,
          sum: number1 + number2,
        },
      };
    }
    case actionTypes.sub: {
      return {
        ...state,
        result: {
          ...result,
          substract: number1 - number2,
        },
      };
    }
    case actionTypes.NUMBER_ONE_CHANGED: {
      return {
        ...state,
        inputs: {
          ...inputs,
          number1: payload,
        },
      };
    }
    case actionTypes.NUMBER_TWO_CHANGED: {
      return {
        ...state,
        inputs: {
          ...inputs,
          number2: payload,
        },
      };
    }

    case actionTypes.div: {
      return {
        ...state,
        result: {
          ...result,
          division: number1 / number2,
        },
      };
    }

    case actionTypes.mul: {
      return {
        ...state,
        result: {
          ...result,
          multiplication: number1 * number2,
        },
      };
    }

    default: {
      return state;
    }
  }
}

export function getIntialState() {
  return {
    result: {
      sum: "",
      substract: "",
      multiplication: "",
      division: "",
    },
    inputs: {
      number1: 10,
      number2: 2,
    },
    users: {},
  };
}
