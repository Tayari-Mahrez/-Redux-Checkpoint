 const addTodoAction = function (param) {
  return { type: "ADDTODO", payload: param };
};

export const addTodoToDbAction = function (param) {
  return (dispatch) => {
    fetch("http://localhost:3000/todos/", {
      method: "post",
      body: JSON.stringify(param),
    })
      .then((res) => res.json())
      .then((json) => dispatch(addTodoAction(json)));
  };
};
 const deleteTodoAction = function (param) {
  return { type: "DELETETODO", payload: param };
};

export const deleteTodoFromDbAction = function (todo) {
  return (dispatch) => {
    fetch("http://localhost:3000/todos/" + todo.id, { method: "delete" })
      .then((res) => res.json())
      .then((json) => dispatch(deleteTodoAction(json)));
  };
};

 const getTodosAction = function (param) {
  return { type: "GETTODOS", payload: param };
};

export function fetchTodosAction() {
  return (dispatch) => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((json) => dispatch(getTodosAction(json)));
  };
}
