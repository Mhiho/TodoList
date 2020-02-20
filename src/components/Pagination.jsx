import React from 'react'
import {Ul,Li} from '../styles/mainStyle'

const Pagination = ({ tasksPerPage, totalTasks, paginate}) => {
    const pageNumbers = []

    for(let i = 1; i<Math.ceil(totalTasks / tasksPerPage); i++){
        pageNumbers.push(i)
    }

return (
    <nav>
        <Ul>
            { pageNumbers.map(number => (
                <Li onClick={()=> paginate(number)} key={number}>{number}</Li>
            ))

            }
        </Ul>
    </nav>
)

}
export default Pagination