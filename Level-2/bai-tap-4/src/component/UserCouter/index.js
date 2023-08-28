import React from 'react';
import { useState } from 'react';

const UserCounter = () => {
    const [user, setUser] = useState({
        name: "tran kien",
        age: 5
    });

    const onPush = () => {
        setUser({...user, age: user.age + 1});
    }

    console.log(user.age)

    return (
        <div>
            <h3>Name: {user.name}</h3>
            <h4>
                <strong>Age:</strong> {user.age}
            </h4>

            <button onClick={onPush}>Click</button>
        </div>
    );
}

export default UserCounter;