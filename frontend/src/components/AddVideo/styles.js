import styled from "styled-components"

import { IoAdd } from "react-icons/io5"

export const AddVideoButton = styled.button`
    background-color:rgba(0,0,0,0.04);

    border:5px dashed #fff;
    border-radius:20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.08);

    padding: 10px;
    height:200px;
    width:250px;

    cursor:pointer;

    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
`


export const AddIcon = styled(IoAdd)`
    stroke: #ffffff;
    width:64px;
    height:64px;
`