import React from 'react';
import moment from 'moment'


const TextProperty = {
    color: 'white',
    listStyle: 'none',
    fontSize: '1.5rem'
}

export default ({ conversation }) => {
    
    return (
        <ul>
            {
                conversation.map(message => {
                    let timedate = message.timestamp
                    return (
                        <>
                            <li style={TextProperty}>
                                {message.message}
                                <p style={{fontSize: '0.8rem'}} >
                                    {moment(timedate).format('MMMM Do YYYY, h:mm:ss a')}
                                </p>
                            </li>
                        </>
                    )
                })
            }
        </ul>
    )
}