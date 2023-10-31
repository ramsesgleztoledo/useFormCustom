export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] add":
      return [...initialState, action.payload];
    case "[TODO] remove":
      return initialState.filter((todo) => todo.id !== action.payload);
    case "[TODO] toggle":
      return initialState.map((todo) => {
        if (todo.id === action.payload) todo.done = !todo.done;
        return todo;
      });

    default:
      return initialState;
  }
};
export const types = {
  add: "[TODO] add",
  remove: "[TODO] remove",
  toggle: "[TODO] toggle",
};

export const add = (todo) => ({
  type: types.add,
  payload: todo,
});

export const remove = (id) => ({
  type: types.remove,
  payload: id,
});

export const toggle = (id) => ({
  type: types.toggle,
  payload: id,
});
