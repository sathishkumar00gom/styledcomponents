import { render } from "@testing-library/react"
import styled from "styled-components"


export const Buttons = styled.button`
    
     width:250px;
     height:50px;
     background-color:blue;
     border-radius:10px;
     box-shadow: 10px 20px 50px grey;
     color:white;
     font-size:25px;
     margin-top:40px;

     &:hover{
         background-color:white;
     }
`

export const Meltbutton = styled(Buttons)`
    background-color:red;`

export const Orangebutton = styled(Buttons)`
background-color:orange;
    `



