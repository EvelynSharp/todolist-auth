import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserTodos } from '../actions/todo';
import {
  List,
  Icon,
  Header,
  Grid,
  Form,
  Button,
} from 'semantic-ui-react';

class TodoList extends Component {
  state = { newTodo: {} }

  componentDidMount() {
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

  render() {
    let { username } = this.props;
    return (
      <div>
        <Header as="h2">{username}</Header>
        <Form>
          <Form.Input

          />
        <Button>Add A Todo</Button>
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
    todolist: state.todo,
  }
}

export default connect(mapStateToProps)(TodoList);
