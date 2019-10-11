import React from 'react'

function NumberList(props) {
    const numbers = props.numbers
    const listItems = numbers.map((number) => 
        <li key={ number.toString}>
            Number {number}
        </li>
    )
    return (
        <ul>{listItems}</ul>
    )
}

export default NumberList
