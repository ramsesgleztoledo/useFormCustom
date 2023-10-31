import "./TodoItem.scss";
import PropTypes from "prop-types";

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <div className="todo-item-jsx">
      <li
        style={{ cursor: "pointer" }}
        className="list-group-item d-flex justify-content-between"
        onDoubleClick={() => onToggleTodo(todo.id)}
      >
        <span
          style={{ cursor: "pointer" }}
          className={`align-self-center ${
            todo.done && "text-decoration-line-through"
          }`}
        >
          {todo.description}
        </span>
      </li>
      <div style={{ position: "relative", marginBottom: "10px" }}>
        <button
          className="btn btn-danger"
          onClick={() => {
            onDeleteTodo(todo.id);
          }}
        >
          delete
        </button>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};
