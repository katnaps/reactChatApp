import React from 'react';


const UserNames = {
    color: 'white',
    fontWeight: 'lighter'
}

export default ({ currentUser, userList }) => {

    return (
        <>
            {
                userList.map(user => {
                    if (user.username === currentUser.username) {
                        return <h2 style={UserNames} key={currentUser.id}>{currentUser.username}</h2>
                    }
                    else {
                        return <li style={UserNames} key={user.id}>{user.username}</li>        
                    }
                })
            }
        </>
    )
}