import React from "react";
import TodoButton from "./TodoButton";

const TodoItem = props => {
  return (
    <React.Fragment>
      <div className="input-group mb-3" key={props.todo.id}>
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input
              type="checkbox"
              onChange={e => props.switchCheckbox(props.todo.id, e)}
              value={props.todo.id}
              checked={props.todo.completed}
            />
          </div>
        </div>
        <input type="text"
          className={"form-control " + (props.todo.completed ? "completed " : "uncompleted")}
          disabled value={props.todo.title} />
        <div className="input-group-append" >
          <TodoButton
            todo={props.todo}
            clickHandler={props.deleteHandler}
            type="button"
            value="✗"
            class="btn btn-delete"
            args={[props.todo.id]}
             />
        </div>
      </div>
    </React.Fragment>
  );
}

export default TodoItem;