import React, { useState, useEffect } from 'react';
import Socket from './utils/Socket';

import UserList from './component/UserList';
import DisplayConversation from './component/DisplayConversation';
import ChatInput from './component/ChatInput';

import 'fontsource-roboto';
import './App.css';

const MainContainer = {
  display: 'flex'
}

const ChatConvo = {
  display: 'flex',
  flexDirection: 'column', 
  position: 'fixed',
  right: '81%'
}

const ChatContainer = {
  position: 'fixed',
  bottom: '10px'
}

const ChatText = {
  position: 'fixed',
  bottom: '60px'
}


function App() {

  const [currentUser, setCurrentUser] = useState({})
  const [userList, setUserList] = useState([])
  const [conversation, setConversation] = useState([])
  const [input, setInput] = useState('');

  useEffect(() => {
    Socket.emit('NEW_USER')

    Socket.on('GET_CURRENT_USER', user => {
      // think about what to do here
      setCurrentUser(user)
      // console.log(user)
    })

    Socket.on('UPDATE_USER_LIST', users => {
      // think about what to do here
      setUserList(users)
      // console.log(users)
    })

    Socket.on('RECEIVE_BROADCAST', data => {
      // think about what to do here
      console.log(data)
      setConversation((convo) => {
        console.log(convo)
        return [
          ...convo,
          data
        ]
      })
    })
  }, [])

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let data = {
      username: currentUser.username,
      message: input,
      timestamp: Date.now()
    }
    Socket.emit('BROADCAST_MESSAGE', data)
    setInput('')
  }


  return (
    <div style={MainContainer}>

      <div style={{margin: '20px'}}>
        <h1 style={{color: 'white', fontSize: '2rem'}}>User List</h1>
      <UserList currentUser={currentUser} userList={userList} />
      </div>
      <div style={ChatConvo}>
        <div style={ChatText}>
          <DisplayConversation conversation={conversation} />
        </div>
        <div style={ChatContainer}>
          <ChatInput input={input} handleSubmit={handleSubmit} handleInput={handleInput} setInput={setInput} />
        </div>
      </div>


      {/* <Chatroom /> */}

    </div>
  );
}

export default App;
