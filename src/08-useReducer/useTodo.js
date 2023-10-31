import { useEffect, useReducer } from "react";
import { todoReducer, add, remove, toggle } from "./todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos") || []);
};
export const useTodo = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, [], init);

  const handleNewTodo = (todo) => {
    dispatchTodo(add(todo));
  };

  const pendingArray = () => {
    return todos.filter((todo) => !todo.done).length;
  };

  const onDeleteTodo = (id) => {
    dispatchTodo(remove(id));
  };
  const onToggleTodo = (id) => {
    dispatchTodo(toggle(id));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
    pendingArray,
    handleNewTodo,
    onDeleteTodo,
    onToggleTodo,
  };
};
