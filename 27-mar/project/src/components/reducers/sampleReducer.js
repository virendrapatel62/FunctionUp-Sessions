export const ACTION_TYPES = {
  INC: "inc",
  PUSH_ID: "push id",
  SET_USERS: "set users",
};
export function reducer(state, action) {
  console.log("Reducer callled..", state, action);
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.INC: {
      return {
        ...state,
        count: state.count + payload,
      };
    }

    case ACTION_TYPES.PUSH_ID: {
      return {
        ...state,
        ids: [...state.ids, crypto.randomUUID()],
      };
    }

    case ACTION_TYPES.SET_USERS: {
      return {
        ...state,
        users: payload,
        count: payload.length,
      };
    }

    default: {
      return state;
    }
  }
}
