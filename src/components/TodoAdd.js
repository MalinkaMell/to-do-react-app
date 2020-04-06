import React from "react";
import TodoButton from "./TodoButton";

const TodoAdd = props => {
  return (
    <React.Fragment>
      <form className="w-100 mx-2 mt-3">
        <div className="input-group mb-3">
          <input className="form-control"
            type="text"
            name="newtodo"
            value={props.newtodo}
            onChange={props.inputHandler}
            ref={props.todoInput}
            placeholder="Add new to-do"
          />
          <div className="input-group-append" >
            <TodoButton
              newtodo={props.newtodo}
              clickHandler={props.submitHandler}
              type="submit"
              value="✓"
              class="btn btn-add"
            />
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default TodoAdd;