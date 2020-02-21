import styled from 'styled-components'

export const Button = styled.button`
font-size: 1em;
margin: 1em;
border: 2px solid red;
border-radius: 5px;
display: flex;
justify-content: center;
cursor: pointer;
width: 50px;
height: 50px;
&:hover{
    background: #A3C4BC;
    border: 2 px solid darkred;
}
`
export const ButtonDone = styled(Button)`
border: 2px solid red;
background: #A1D68B;
&:hover{
    background: lightgreen;
}
`
export const Container = styled.div`
width: 100vw;
height: 40vh;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`
export const PaginationContainer = styled(Container)`
height: 20vh;
`
export const AddTodoContainer = styled(Container)`
height: 20vh;
`

export const Ul = styled.ul`
display: flex;
justify-content: center;
flex-direction: row;
width: 100%;
margin: 0;
padding: 0;

`
export const Li = styled.li`
display: flex;
justify-content: center;
align-items: center;
width: 24px;
height: 24px;
border: solid 1px navy;
cursor: pointer;
&:hover{
    background: blue;
    color: white;
}
@media (max-width: 600px) {
width: 16px;
height: 16px;
font-size: 12px;
}
`
export const TodoContainer = styled(Container)`
height: 20vh;
`
export const Title = styled.h4`
`
export const Light = styled.div`
background: #F2E7C9;
color: #413C58;
`
export const Dark = styled.div`
background: #413C58;
color: #F2E7C9;
`
export const Switch = styled.div`
background: #413C58;
`
export const BtnDef = styled.button`
background: #62C4AB;
color: #413C58;
border-radius: 2px;
height: 1.7em;
border: 1px solid #62C4AB;
margin: 5px 5px 5px 5px;
&:hover{
    background: #2FC49F;
    border-color: #62C4AB;
}
`
export const BtnDefDel = styled(BtnDef)`
background: #fc3503;
border-color: #fc3503;
&:hover {
    background: #db2e02;
    border-color: #db2e02;
}
`
export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
`
export const Error = styled.h3`
color: red;
height: 20px;
`