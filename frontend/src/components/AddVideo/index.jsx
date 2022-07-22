import React, {useContext} from "react"

import {VideoContext} from "../../contexts/VideoContext"

import { AddVideoButton, AddIcon } from "./styles"

export default function AddVIdeo(){
    const { handleAdd } = useContext(VideoContext)

    return(
        <li>
            <AddVideoButton onClick={handleAdd}>
                <AddIcon></AddIcon>
            </AddVideoButton>
        </li>
    )
}