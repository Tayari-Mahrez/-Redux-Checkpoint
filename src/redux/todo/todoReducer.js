function todosReducer(state = [], action) {
  switch (action.type) {
    case "GETTODOS":
      return action.payload;
    case "ADDTODO":
      return [...state, action.payload];
    case "DELETETODO": {
      const newState = state.filter((todo) => todo.id !== action.payload.id);
      return newState;
    }
    default:
      return state;
  }
}
export default todosReducer;
