import React, { useContext } from "react"
import { Button, ButtonArea, Container } from "./styles"

import { IoTrashBin, IoThumbsUp, IoPencil } from "react-icons/io5"
import { VideoContext } from "../../contexts/VideoContext"

export default function Video({ id, title, link, liked }){

    const { handleEdit, handleLike, handleDelete } = useContext(VideoContext)

    return(
        <li>
            <Container>
                <h2>{title}</h2>
                <a href={link} target="_blank" rel="noreferrer"><span>{link}</span></a>
                <ButtonArea>
                    <Button liked={liked} onClick={() => handleLike(id)} >
                        <IoThumbsUp />
                    </Button>
                    <Button onClick={() => handleEdit(id, title, link)}>
                        <IoPencil />
                    </Button>
                    <Button>
                        <IoTrashBin  onClick={() => handleDelete(id)}/>
                    </Button>
                </ButtonArea>
            </Container>
        </li>
    )
}