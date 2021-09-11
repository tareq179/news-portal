import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import SinglePost from '../SinglePost/SinglePost'

const Single = () => {
    return (
        <div style={{display:"flex"}}>
            <SinglePost/>
            <Sidebar/>
        </div>
    )
}

export default Single
