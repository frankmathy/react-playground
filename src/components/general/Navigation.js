import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = (props) => {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/clock">Clock</Link>
            <Link to="/form">Form</Link>
            <Link to="/list">List</Link>
            <Link to="/events">Events</Link>
            <Link to="/hooks">Hooks</Link>
        </>
    )
}

export default Navigation
