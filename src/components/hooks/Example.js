import React, { useState, useEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0);

    const user = {
        firstName: "Frank",
        lastName: "Mathy"
    }

    function formatName(user) {
        return user.firstName + " " + user.lastName
    }

    useEffect(() => {
        document.title = `You clicked ${count} times`
    });

    const messages = []
    for(var i=0; i<count; i++) {
        messages.push(<p>Click {i+1}</p>)
    }

    return (
        <div>
            <p>User: {formatName(user)}</p>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <div>
                {messages}
            </div>
        </div>
    )
}


export default Example
