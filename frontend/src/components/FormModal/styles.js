import styled from "styled-components"

import { IoClose, IoCheckmark } from "react-icons/io5"

export const Overlay = styled.div`
    background-color:rgba(242,243,245,.6);

    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;

    display:flex;
    justify-content:center;
    align-items:center;
    
`
export const Container = styled.div`
    background-color:#fff;

    width:100%;
    height:100%;
    max-width:400px;
    height:400px;
    padding:32px 48px;

    box-shadow: 0 0 60px rgba(0,0,0,.08)
    border-radius:20px;

    display:flex;
    flex-direction:column;
    justify-content:space-between;
`
export const Header = styled.header`
    background-color:transparent;

    width:100%;
    height:40px;
    padding:0;

    color:#1e1e1e;
    font-size:18px;

    display:flex;
    justify-content:space-between;
    align-items:center;

    button{
        background:none;

        border:none;

        cursor:pointer;

        max-height:25px;
    }
`
export const FormContainer = styled.form`
    height:100%;
    width:100%;

    display:flex;
    flex-direction:column;
    justify-content:space-between;
    gap:15px;
`
export const FormMain = styled.main`
    margin: auto 0;

    display:flex;
    flex-direction:column;
    gap:20px;
`
export const InputGroup = styled.div`

    display:flex;
    flex-direction:column;
    gap:5px;

    label{
        font-size:18px;
        
    }

    input{
        background-color:#f5f5f5;

        height:38px;
        width:100%;
        padding-left:10px;

        border:none;
        border-radius:5px;
        color:#1e1e1e;
    }
`
export const Footer = styled.footer`

    display:flex;
    justify-content:center;

    button{
        background-color:#b4ecb4;

        width:150px;
        height:35px;
        
        border:none;
        border-radius:6px;
        
        align-self:center;

        font-weight:700px;
        cursor:pointer;

        transition: opacity 0.2s;

        &:hover{
            opacity:0.5;
        }
    }
`
export const CloseIcon = styled(IoClose)`
    height:25px;
    width:25px;
`
export const CheckIcon = styled(IoCheckmark)`
    width:2.4em;
    height:2.4em;

    color:white;
`