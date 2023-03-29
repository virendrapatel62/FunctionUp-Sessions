const baseCounterKey = "@counter-store";
export const counterActions = {
  inc: `${baseCounterKey}/inc`,
  dec: `${baseCounterKey}/dec`,
};
const baseTodosKey = "@todos-store";
export const todoActions = {
  setTodos: `${baseTodosKey}/set-todos`,
};
