import { TodoList } from "./TodoList";
import { AddForm } from "./AddForm";
import { useTodo } from "./useTodo";

export const TodoApp = () => {
  const { todos, handleNewTodo, onDeleteTodo, onToggleTodo, pendingArray } =
    useTodo();

  return (
    <>
      <h1>
        TodoApp: {todos.length} <small>pending: {pendingArray()}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7 todo-list">
          <TodoList
            onToggleTodo={onToggleTodo}
            todos={todos}
            onDeleteTodo={onDeleteTodo}
          ></TodoList>
        </div>
        <div className="col-1">
          <div className="line-vertical"></div>
        </div>
        <div className="col-4">
          <AddForm onNewTodo={handleNewTodo}></AddForm>
        </div>
      </div>
    </>
  );
};
