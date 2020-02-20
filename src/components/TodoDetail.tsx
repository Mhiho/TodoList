import React,{Fragment} from 'react'
import { connect } from 'react-redux'
import { IAppState } from '../store/Store';
import { ITodo } from '../reducers/todosReducer';
import {Title,TodoContainer} from '../styles/mainStyle'
import {bindActionCreators} from 'redux'
import {toggleTodo, toggleTodoAction, deleteTodo, deleteTodoAction} from '../actions/TodoAction'

interface IProps {
  todo: ITodo 
  toggleTodo: toggleTodoAction
  deleteTodo: deleteTodoAction
}

class TodoDetail extends React.Component<IProps> {
    componentDidUpdate(prevProps:any){
        if(prevProps.todo !==  this.props.todo){
        }
      }
    public render(){
        if(!this.props.todo){
            return(<TodoContainer><Title>Wybierz zadanie, żeby je podejrzeć.</Title></TodoContainer>)
        }
        return (

            <Fragment>        
            <TodoContainer>
                 <Title>{!this.props.todo ? '' : `Treść zadania ${this.props.todo.id}: ` + this.props.todo.title}</Title>
               
                 <button onClick={ ()=>this.props.toggleTodo(this.props.todo.id)}>Zrobione/Niezrobione</button>
                 <button onClick={ ()=>this.props.deleteTodo(this.props.todo.id)}>Usuń zadanie</button>
                 
            </TodoContainer>
        </Fragment>
    )
    }
}

const mapStateToProps = (state: IAppState) => {
    return {
        todo: state.activeTodoState.todo
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({ toggleTodo: toggleTodo,
                                deleteTodo: deleteTodo
                              }, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoDetail)