import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import thunk from 'redux-thunk'
import {todosReducer, ITodosState} from '../reducers/todosReducer'
import {selectTodoReducer, IActiveTodoState} from '../reducers/selectTodoReducer'
import { reducer as formReducer } from 'redux-form'


  export interface IAppState {
      todosState: ITodosState
      activeTodoState: IActiveTodoState
      form: any
  }
 
  const rootReducer = combineReducers<IAppState>({
      todosState: todosReducer,
      activeTodoState: selectTodoReducer,
      form: formReducer
  })


  export default function configureStore(): Store<IAppState, any> {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk))
    return store
  }