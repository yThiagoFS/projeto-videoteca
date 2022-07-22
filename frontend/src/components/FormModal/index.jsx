import React, { useContext } from "react"

import { VideoContext } from "../../contexts/VideoContext"

import { Overlay, Container, Header, CloseIcon, FormContainer, FormMain, InputGroup, Footer, CheckIcon } from "./styles"

export default function FormModal(){

    const {
         handleClose,
         title,
         titleHandler,
         link,
         linkHandler,
         handleSubmit,
        } = useContext(VideoContext)

    return(
        <Overlay>
            <Container>
                <Header>
                    <strong>Add a video.</strong>
                    <button type="button" onClick={handleClose}>
                        <CloseIcon />
                    </button>
                </Header>
                <FormContainer onSubmit={handleSubmit}>
                    <FormMain>
                        <InputGroup>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" value={title} onChange={titleHandler}/>
                        </InputGroup>
                        <InputGroup>
                        <label htmlFor="link" value={link} onChange={linkHandler}>Link</label>
                        <input type="text" id="link"/>
                        </InputGroup>
                    </FormMain>

                    <Footer>
                        <button type="submit">
                            <CheckIcon />
                        </button>
                    </Footer>
                </FormContainer>
            </Container>
        </Overlay>
    )
}