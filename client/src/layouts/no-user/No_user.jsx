import React from 'react'
import Nav from '../../components/Nav/Nav'

const Nouser = (props) => {
    return (
        <>
            <Nav />
            <div className="body">
                {props.children}
            </div>
        </>
    )
}

export default Nouser