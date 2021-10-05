import React from 'react'
import {ModalBackground,ModalButton,ModalContainer,Title,Body,Footer} from './Modal.styles'

function Modal() {
    return (
       <ModalBackground>
           <ModalContainer>
               <ModalButton>X</ModalButton>
               <Title>
                   <h1>Title</h1>
               </Title>
               <Body>
                   <p>This is very awsome</p>
               </Body>
               <Footer>
                   <ModalButton>Calcel</ModalButton>
                   <ModalButton>Continue</ModalButton>
               </Footer>
           </ModalContainer>
       </ModalBackground>
    )
}

export default Modal
