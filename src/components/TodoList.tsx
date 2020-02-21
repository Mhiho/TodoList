import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../store/Store';
import { ITodo} from '../reducers/todosReducer';
import {selectTodo, selectTodoAction} from '../actions/TodoAction'
import { bindActionCreators } from 'redux';
import {Button, Container, ButtonDone} from '../styles/mainStyle'
import Pagination from '../components/Pagination'
import {Link} from 'react-router-dom'
import axios from '../axiosInstance'
import ErrorHandler from '../hoc/errorHandler'
import {getAllTodos} from '../actions/TodoAction'

interface IProps {
  todos: ITodo[]
  todo: any
  selectTodo: selectTodoAction
}
interface IState {
  currentPage: number
  tasksPerPage: number

}

class TodoList extends React.Component<IProps,IState> {

  state: IState ={
    currentPage: 1,
    tasksPerPage: 10
  }
  paginate = (number: number) => {
    this.setState({currentPage: number})
  }

  componentDidMount(){
    getAllTodos()
  }

  render() {
    const lastTaskIndex = this.state.currentPage * this.state.tasksPerPage
    const firstTaskIndex = lastTaskIndex - this.state.tasksPerPage
    const { todos } = this.props;
    const currentTasks = todos.slice(firstTaskIndex, lastTaskIndex)


    return (
      <div>
        <button><Link to="/addTodo" >Dodaj zadanie</Link></button>
      <Container>
        {
          currentTasks.map(todo => {
            return (
              <div key={todo.id} onClick={()=>this.props.selectTodo(todo.id)}>
                {todo.completed ? 
                <ButtonDone>{todo.id}</ButtonDone>
                :
                <Button>{todo.id}</Button>
              }
              
              </div>
            );
          })}
      </Container>
        <Pagination tasksPerPage={this.state.tasksPerPage} totalTasks={todos.length+10} paginate={this.paginate} />
          </div>
     
    )
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    todos: state.todosState.todos
  }
}

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({ selectTodo: selectTodo}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ErrorHandler(TodoList,axios))
