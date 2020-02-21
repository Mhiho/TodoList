import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodo, addTodoAction } from "../actions/TodoAction";
import { BtnDef, AddTodoContainer, Error } from "../styles/mainStyle";

interface IProps {
  addTodo: addTodoAction;
}
interface IState {
  title: string;
  error: string;
}

class AddTodo extends React.Component<IProps, IState> {
  state = {
    title: "",
    error: ""
  };

  submitHandler(e: any, t: string) {
    e.preventDefault();
    if (t === "") {
      this.setState({ error: "Wpisz coś do treści zadania" });
    } else {
      this.setState({ error: "" });
      this.props.addTodo(t);
    }
  }

  render() {
    return (
      <div>
        <form>
          <AddTodoContainer>
            <label>Wpisz treść zadania: </label>
            <input
              value={this.state.title}
              onChange={e => this.setState({ title: e.target.value })}
              name="title"
              type="text"
              placeholder="treść zadania"
            />

            <BtnDef onClick={e => this.submitHandler(e, this.state.title)}>
              Dodaj zadanie
            </BtnDef>
          </AddTodoContainer>
        </form>
        <Error>{this.state.error}</Error>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ addTodo: addTodo }, dispatch);
};

export default connect(null, mapDispatchToProps)(AddTodo);
