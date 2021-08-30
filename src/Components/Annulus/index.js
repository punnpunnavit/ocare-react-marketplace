import React from 'react'
import {OuterCircle, InnerCircle,MiddleCircle} from './Annulus.styles'

export default function Annulus() {
    return (
        <div >
           <OuterCircle>
               <MiddleCircle>
                   <InnerCircle/>
               </MiddleCircle>
           </OuterCircle>
        </div>
    )
}
