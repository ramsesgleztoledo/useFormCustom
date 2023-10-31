import { TodoItem } from "./TodoItem";
import PropTypes from "prop-types";

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <ul className="list-group">
        {todos.map((item) => (
          <TodoItem
            onToggleTodo={onToggleTodo}
            todo={item}
            key={item.id}
            onDeleteTodo={onDeleteTodo}
          ></TodoItem>
        ))}
      </ul>
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};
