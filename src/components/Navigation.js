import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = (props) => {
    return (
        <>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/clock">Clock</Link>&nbsp;
            <Link to="/form">Form</Link>&nbsp;
            <Link to="/list">List</Link>&nbsp;
            <Link to="/events">Events</Link>&nbsp;
            <Link to="/hooks">Hooks</Link>
        </>
    )
}

export default Navigation
