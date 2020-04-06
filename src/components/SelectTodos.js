import React from "react";
import { Form } from "react-bootstrap";

const SelectTodos = props => {
  return (
    <React.Fragment>
      <Form.Control as="select" custom="true" value={props.filter} onChange={props.selectHandler} className="my-3 mx-2">
        <option value="all">Show all</option>
        <option value="completed">Show completed</option>
        <option value="uncompleted">Show uncompleted</option>
      </Form.Control>
      <hr className="w-100 my-3 mx-2" />
    </React.Fragment>
  )
}

export default SelectTodos;