import styled from 'styled-components'

export const Button = styled.button`
font-size: 1em;
margin: 1em;
border: 2px solid red;
border-radius: 3px;
display: flex;
justify-content: center;
cursor: pointer;
width: 50px;
height: 50px;
&:hover{
    background: grey;
    border: 2 px solid darkred;
}
`
export const ButtonDone = styled(Button)`
border: 2px solid red;
background: green;
&:hover{
    background: darkgreen;
}
`
export const Container = styled.div`
width: 100vw;
height: 60vh;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`

export const Ul = styled.ul`
display: flex;
justify-content: center;
flex-direction: row
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
`
export const TodoContainer = styled(Container)`
height: 20vh;
`
export const Title = styled.h4`
`
export const Light = styled.div`
background: lightyellow;
color: black;
`
export const Dark = styled.div`
background: black;
color: lightyellow;
`
