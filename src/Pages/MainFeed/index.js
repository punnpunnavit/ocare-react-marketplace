import React from 'react'
import InsideNavbar from '../../Components/SIdebar/ShownNavbar'

function MainFeed() {
    return (
        <div style={{display:"flex", flexDirection:"row",width:"100vw",height:"100vh"}}>
       
        <InsideNavbar />
        hi
        {window.localStorage.getItem('accessToken')}
      </div>
    )
}

export default MainFeed
