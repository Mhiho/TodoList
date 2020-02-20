import React from 'react'
import TodoList from '../components/TodoList'
import TodoDetail from '../components/TodoDetail'

const HomePage: React.SFC<{}> = () => {
        return (
            <>
            <TodoDetail />
            <TodoList />
            </>
        )
}
export default HomePage