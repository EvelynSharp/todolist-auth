import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserTodos, createTodoList } from '../actions/todo';
import {
  List,
  Icon,
  Header,
  Form,
  Button,
} from 'semantic-ui-react';

class TodoList extends Component {
  state = { newTodo: '' }

  componentDidMount = () => {
    let { _id } = this.props;
    this.props.dispatch(getUserTodos(_id));
  }

  displayTodo = () => {
    let { todolist } = this.props;
    return todolist.map( (todo, index) => {
      return (
        <List.Content key={index}>
          { todo }
          <Icon
            corner
            color="red"
            name="remove"
          />
        </List.Content>
      )
    })
  }

  handleTodoChange = (e) => {
    let { id, value } = e.target;
    this.setState({ [id]: value });
  }

  handleTodoSubmit = (e) => {
    e.preventDefault();
    let firstTodo = this.state.newTodo;
    let userId = this.props._id;
    if (!this.props.todolist[0]){
      this.props.dispatch(createTodoList(userId, firstTodo));
    } else {

    }
    this.setState({ newTodo: ''})
  }

  render() {
    let { username } = this.props;
    let { newTodo } = this.state;
    return (
      <div>
        <Header as="h2">{username}</Header>
        <Form onSubmit={this.handleTodoSubmit}>
          <Form.Input
            id = 'newTodo'
            value = { newTodo }
            onChange = { this.handleTodoChange }
            required
          />
        <Button className="ui primary button">Add A Todo</Button>
        </Form>
        <List>
          { this.displayTodo() }
        </List>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    ...state.user,
    todolist: state.todo || [],
  }
}

export default connect(mapStateToProps)(TodoList);
