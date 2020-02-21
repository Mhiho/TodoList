import React,{Fragment} from 'react'
import { connect } from 'react-redux'
import { IAppState } from '../store/Store';
import { ITodo } from '../reducers/todosReducer';
import {Title,TodoContainer} from '../styles/mainStyle'
import {bindActionCreators} from 'redux'
import {toggleTodo, toggleTodoAction, deleteTodo, deleteTodoAction, changeTodo, changeTodoAction} from '../actions/TodoAction'

interface IProps {
  todo: any
  toggleTodo: toggleTodoAction
  deleteTodo: deleteTodoAction
  changeTodo: changeTodoAction
}

interface IState {
    addInput: boolean
    value: string
}

class TodoDetail extends React.Component<IProps,IState> {

    state={
        addInput: false,
        value: ''
        }


    addInputHandler(){
        this.setState({addInput: !this.state.addInput})
    }
    submitChangeHandler(e: any){
        e.preventDefault()
        this.props.changeTodo(this.props.todo.id, this.state.value) 
        this.setState({value: ''})
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
                 <button onClick={ ()=>this.addInputHandler()}>Zmień treść zadania</button>
                 <button onClick={ ()=>this.props.deleteTodo(this.props.todo.id)}>Usuń zadanie</button>
                 <div>
                     {!this.state.addInput ? null : (
                     <form onSubmit={e=>this.submitChangeHandler(e)}>
                        <input 
                            type="text"
                            name="changeTitle"
                            value={this.state.value}
                            onChange={e=>this.setState({value: e.target.value})}
                        />
                        <input 
                            type="submit"
                            value="zmień"
                        />
                     </form>
                     ) 
                    }
                 </div>
            </TodoContainer>
        </Fragment>
    )
    }
}

const mapStateToProps = (state: IAppState) => {
    return {
        todo: state.todosState.todo
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({ toggleTodo: toggleTodo,
                                deleteTodo: deleteTodo,
                                changeTodo: changeTodo
                              }, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoDetail)