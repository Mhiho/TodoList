
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, addTodoAction } from '../actions/TodoAction';
import {Link} from 'react-router-dom'


interface IProps {
    addTodo: addTodoAction
}
interface IState {
    title: string
}

class AddTodo extends React.Component<IProps,IState>{

    state={title: ''}

    submitHandler(e:any,t:string) {
        e.preventDefault()
        this.props.addTodo(t)
        
    }

    render() {
        return (
            <div>

          <form>
         
            <div>
              <label>Wpisz treść zadania: </label>
              <input
                value={this.state.title}
                onChange={e=>this.setState({title: e.target.value})}
                name="title"
                type="text"
                placeholder="treść zadania"
                />
            </div>
    
        <button
          onClick={(e)=>this.submitHandler(e,this.state.title) }
        >Dodaj zadanie
          </button>
        </form>
        <button><Link to="/">Wróć</Link></button>
  </div>
);
}
}

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({ addTodo: addTodo
                              }, dispatch)
}


export default connect(null,mapDispatchToProps)(AddTodo)