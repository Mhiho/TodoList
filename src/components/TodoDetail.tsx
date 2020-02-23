import React, { Fragment } from "react";
import { connect } from "react-redux";
import { IAppState } from "../store/Store";
import { Title, TodoContainer } from "../styles/mainStyle";
import { bindActionCreators } from "redux";
import {ITodo} from '../reducers/todosReducer'

import {
  toggleTodo,
  toggleTodoAction,
  deleteTodo,
  deleteTodoAction,
  changeTodo,
  changeTodoAction
} from "../actions/TodoAction";
import { BtnDef, BtnDefDel } from "../styles/mainStyle";

interface IProps {
  todo: any;
  toggleTodo: toggleTodoAction;
  deleteTodo: deleteTodoAction;
  changeTodo: changeTodoAction;
  todos: ITodo[]
}

interface IState {
  addInput: boolean;
  value: string;
}

class TodoDetail extends React.Component<IProps, IState> {
  state = {
    addInput: false,
    value: ""
  };

  addInputHandler() {
    this.setState({ addInput: !this.state.addInput });
  }
  submitChangeHandler(e: any) {
    e.preventDefault();
    this.props.changeTodo(this.props.todo.id, this.state.value);
    this.setState({ value: "" });
  }
  public render() {
    if (!this.props.todo) {
      return (
        <TodoContainer>
          <Title>Wybierz zadanie, żeby je podejrzeć.</Title>
        </TodoContainer>
      );
    }
    let todo = this.props.todos.filter(todo=> todo.id === this.props.todo.id)
    return (
      <Fragment>
        <TodoContainer>
          <Title>
            {todo[0] === undefined
              ? ""
              : `Treść zadania` + todo[0] !== undefined ? todo[0].id + `: ` + todo[0].title : null}
          </Title>
        </TodoContainer>
        <TodoContainer>
          <BtnDef onClick={() => this.props.toggleTodo(this.props.todo.id)}>
            Zrobione/Niezrobione
          </BtnDef>
          <BtnDef onClick={() => this.addInputHandler()}>
            Zmień treść zadania
          </BtnDef>
          <BtnDefDel onClick={() => this.props.deleteTodo(this.props.todo.id)}>
            Usuń zadanie
          </BtnDefDel>
          <TodoContainer>
            {!this.state.addInput ? null : (
              <form onSubmit={e => this.submitChangeHandler(e)}>
                <input
                  type="text"
                  name="changeTitle"
                  value={this.state.value}
                  onChange={e => this.setState({ value: e.target.value })}
                />
                <BtnDef type="submit">Zmień</BtnDef>
              </form>
            )}
          </TodoContainer>
        </TodoContainer>
      </Fragment>
    );
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    todo: state.todosState.todo,
    todos: state.todosState.todos
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    { toggleTodo: toggleTodo, deleteTodo: deleteTodo, changeTodo: changeTodo },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoDetail);
