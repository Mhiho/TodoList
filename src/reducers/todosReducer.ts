import { Reducer } from 'redux';
import {
  TodosAction,
  TodoActionTypes,
} from '../actions/TodoAction';

export interface ITodo {
  userId: number
  id: number
  title: string
  completed: boolean
}


export interface ITodosState {
  todos: ITodo[];
  id: number;
  todo: any
}


const initialTodoState: ITodosState = {
  todos: [],
  id: 0,
  todo: null
};

export const todosReducer: Reducer<ITodosState, TodosAction> = (
  state = initialTodoState,
  action
) => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS: {
      console.log(action.type)
      return {
        ...state,
        todos: action.todos,
      };
    }
    case TodoActionTypes.DELETE: {
      const todoId = action.id;
      return {...state, todos: state.todos.filter(todo => todo.id !== todoId) }
    }
    case TodoActionTypes.TOGGLE: {
      return {...state, todos: state.todos.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )  }
    }
    case TodoActionTypes.ADD: {
      console.log(action.title)
      return {
        ...state,
        todos: [...state.todos, {
          userId: 1,
          id: state.todos.length+1,
          title: action.title,
          completed: false
        }
        ]
    }
  }
  case TodoActionTypes.SELECT: {
    return {
      ...state,
      todo: state.todos.find((todo,index)=> index+1 === action.id ? todo : null)
    }
  }
  case TodoActionTypes.CHANGE: {
    return {
      ...state, todo: state.todos.find((todo,index) =>
      index + 1 === action.id ? todo.title = action.title : null
      ) 
    }
  }
    default:
      return state;
  }
};