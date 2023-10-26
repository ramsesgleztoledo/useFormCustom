import { useReducer } from "react";
import { todoReducer, types } from "./todoReducer";
import { TodoList } from "./TodoList";
import { AddForm } from "./AddForm";

const initialState = [
  {
    id: new Date().getTime(),
    description: "get the soul stone",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "get the time stone",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState);

  const handleNewTodo = (todo) => {
    const action = {
      type: types.add,
      payload: todo,
    };

    dispatchTodo(action);
  };

  return (
    <>
      <h1>
        TodoApp: 10 <small>pending: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos}></TodoList>
        </div>
        <div className="col-5">
          <AddForm onNewTodo={handleNewTodo}></AddForm>
        </div>
      </div>
    </>
  );
};
