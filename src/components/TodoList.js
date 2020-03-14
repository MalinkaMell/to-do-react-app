import React from "react";
import TodoItem from "./TodoItem";

const TodoList = props => {
  return (
    <React.Fragment>
      {props.todos.map(todo =>
        <TodoItem
          key={todo.id}
          todo={todo}
          switchCheckbox={props.switchCheckbox}
          deleteHandler={props.deleteHandler}
        />
      )}
    </React.Fragment>
  );
}

export default TodoList;