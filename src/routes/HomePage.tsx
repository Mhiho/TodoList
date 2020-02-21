import React from 'react'
import TodoList from '../components/TodoList'
import TodoDetail from '../components/TodoDetail'
import AddTodoForm from '../components/AddTodoForm'

const HomePage: React.SFC<{}> = () => {
        return (
            <>
            <AddTodoForm />
            <TodoDetail />
            <TodoList />
            </>
        )
}
export default HomePage