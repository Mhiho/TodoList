import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { ITodo, ITodosState } from '../reducers/todosReducer';


export enum TodoActionTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  SELECT = 'SELECT',
  TOGGLE = 'TOGGLE',
  DELETE = 'DELETE',
  ADD = 'ADD'
}


export interface ITodoGetAllAction {
  type: TodoActionTypes.FETCH_TODOS
  todos: ITodo[]
}

export interface ITodoGetOneAction {
    type: TodoActionTypes.SELECT
    todo: ITodo | any
  }
export interface IToggleTodoAction {
  type: TodoActionTypes.TOGGLE
  id: number
}

export interface IDeleteTodoAction {
  type: TodoActionTypes.DELETE
  id: number
}
export interface IAddTodoAction {
  type: TodoActionTypes.ADD
  title: string
}

export type TodosAction = ITodoGetAllAction | ITodoGetOneAction | IToggleTodoAction | IDeleteTodoAction | IAddTodoAction

export const getAllTodos: ActionCreator<
  ThunkAction<Promise<any>, ITodosState, null, ITodoGetAllAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      dispatch({
        type: TodoActionTypes.FETCH_TODOS,
        todos: response.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
};


export const selectTodo = (todo: ITodo) => {
       return {
           type: TodoActionTypes.SELECT,
           todo: todo
       }
        
}
export type selectTodoAction = typeof selectTodo

export const toggleTodo = (id: number) => {
  return {
    type: TodoActionTypes.TOGGLE,
    id: id
  }
}

export type toggleTodoAction = typeof toggleTodo

export const deleteTodo = (id: number) => {
  return {
    type: TodoActionTypes.DELETE,
    id: id
  }
}

export type deleteTodoAction = typeof deleteTodo

export const addTodo = (title: string) => {
  return {
    type: TodoActionTypes.ADD,
    title: title
  }
}

export type addTodoAction = typeof addTodo