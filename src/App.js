import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import todos from "./todos.json";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import Title from "./components/Title";
import SelectTodos from "./components/SelectTodos";

const App = () => {

  const [todo, setTodo] = useState("");
  const [list, setList] = useState(todos);
  const [filter, setFilter] = useState("all");
  const [deleted, setDeleted] = useState([]);
  const todoInput = useRef(null);

  const switchCheckbox = (id, e) => {
    setList(
      list.map(item => {
        if (id === item.id) {
          item.completed = !item.completed;
        }
        return item;
      })
    )
  }

  const deleteHandler = (id, e) => {
    e.preventDefault();
    setDeleted([...deleted, id]);
    setList(list.filter(item => item.id !== id))
  }

  const inputHandler = e => {
    setTodo(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault();
    const newItemId = list.length + 1;
    const newTodo = {
      id: newItemId,
      title: todo,
      completed: false
    };

    if (todo !== "") {
      setList(prevState => {
        return [...prevState, newTodo]
      })
      setTodo("")
    }
    todoInput.current.focus();
  }

  const selectHandler = e => {
    const { value } = e.target;
    switch (value) {
      case "completed":
        setFilter("completed");
        return setList(todos.filter(item => deleted.indexOf(item.id) === -1 && item.completed));
      case "uncompleted":
        setFilter("uncompleted")
        return setList(todos.filter(item => deleted.indexOf(item.id) === -1 && !item.completed));
      default:
        setFilter("all")
        return setList(todos.filter(item => deleted.indexOf(item.id) === -1 && item));
    }
  }

  return (
    <Container>
      <Row className="justify-content-center my-2">
        <Title />
      </Row>
      <Row className="justify-content-center">
        <Col md={6} className="jumbotron mx-2">
          <Row>
            <SelectTodos filter={filter} selectHandler={selectHandler} />
          </Row>
          <Row>
            <TodoAdd
              newtodo={todo}
              inputHandler={inputHandler}
              submitHandler={submitHandler}
              todoInput={todoInput} />

          </Row>
          <Row>
            <TodoList
              todos={list}
              switchCheckbox={switchCheckbox}
              deleteHandler={deleteHandler}
            />
          </Row>
        </Col>
      </Row>
    </Container >
  );
}

/* class App extends React.Component {
  state = {
    newtodo: "",
    todos
  }

  todoInput = React.createRef();

  switchCheckbox = (id, e) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (id === item.id) {
          item.completed = !item.completed;
        }
        return item;
      })
    });
  }

  deleteHandler = (id, e) => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(item => item.id !== id)
    });
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  }

  submitHandler = e => {
    e.preventDefault();
    const newItemId = this.state.todos.length;
    const newTodo = {
      id: newItemId + 1,
      title: this.state.newtodo,
      completed: false
    };

    if (this.state.newtodo !== "") {
      this.setState({
        todos: [...this.state.todos, newTodo], newtodo: ""
      });
    }
    this.todoInput.current.focus();
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center my-2">
          <h1>React To-do App</h1>

        </Row>
        <Row className="justify-content-center">
          <Col md={6} className="jumbotron">
            <Row>
              <TodoAdd
                newtodo={this.state.newtodo}
                inputHandler={this.inputHandler}
                submitHandler={this.submitHandler}
                todoInput={this.todoInput} />

            </Row>
            <Row>
              <TodoList
                todos={this.state.todos}
                switchCheckbox={this.switchCheckbox}
                deleteHandler={this.deleteHandler}
              />
            </Row>
          </Col>
        </Row>
      </Container >
    );
  }

} */

export default App;