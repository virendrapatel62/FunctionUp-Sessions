const counterBaseKey = "@counter";
const todosBaseKey = "@todos";

export const counterActions = {
  inc: `${counterBaseKey}/inc`,
  dec: `${counterBaseKey}/dec`,
  reset: `${counterBaseKey}/reset`,
};

export const todosActions = {
  addTodo: `${todosBaseKey}/add-todo`,
};
