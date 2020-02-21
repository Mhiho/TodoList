import { Reducer } from 'redux'
import {TodosAction, TodoActionTypes} from '../actions/TodoAction'
import {ITodo} from './todosReducer'


export interface IActiveTodoState {
    todo: ITodo | any
  }
  
const initialTodoState: IActiveTodoState = {
    todo: null
  };

// export const selectTodoReducer:Reducer<IActiveTodoState,TodosAction> = (state = initialTodoState, action)=>{
//     console.log(action)
//     switch(action.type){
//         case TodoActionTypes.SELECT: 
//            return {...state, todo: action.todo }
//     }
//         return state
        
// }





