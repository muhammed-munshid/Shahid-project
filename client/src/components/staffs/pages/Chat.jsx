import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { mainUrl } from '../../../API/Api';
import Navbar from '../Navbar';
import Layout from '../Layout';
import axios from 'axios';

const socket = io(mainUrl);

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.on('chatMessage', (msg) => {
      setMessages((prev) => {
        // Check if the message already exists to avoid duplication
        const isMessageExist = prev.some((message) => message.timestamp === msg.timestamp && message.message === msg.message);
        if (!isMessageExist) {
          return [...prev, msg];
        }
        return prev;
      });
    });

    return () => {
      socket.off('chatMessage');
    };
  }, []);

  useEffect(() => {
    socket.on('loadMessages', (msgs) => {
      setMessages(msgs);
    });

    return () => {
      socket.off('loadMessages');
    };
  }, []);

//   useEffect(() => {
//     const getChat = async () => {
//       try {
//         const response = await axios.get(`${mainUrl}each-chat/${id}`);
//         setMessages(response.data.data);
//       } catch (error) {
//         console.log('Error Get message:', error);
//       }
//     };
//     getChat();
//   }, [id]);

const sendMessage = () => {
    const token = localStorage.getItem('token');
    const newMessage = { message: input, userType: 'staff', timestamp: new Date().toISOString() };

    // Optimistically update the messages state
    setMessages((prev) => [...prev, newMessage]);

    // Emit the message to the server
    socket.emit('chatMessage', newMessage);

    // Send the message to the server via axios
    axios.post(`${mainUrl}chat`, { message: input, userType: 'staff' }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
        setInput(''); // Clear the input after the message is sent
      })
      .catch((error) => {
        console.log('Error sending message:', error);
      });
  };

  // Sort messages by timestamp
  const sortedMessages = messages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  return (
    <>
      <Navbar />
      <Layout>
        <div>
          <div>
            {sortedMessages.map((msg, index) => (
              <div key={index} className={msg.userType === 'staff' ? 'text-right' : 'text-left'}>
                <div>{msg.message}</div>
                <small>{new Date(msg.timestamp).toLocaleString()}</small>
              </div>
            ))}
          </div>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </Layout>
    </>
  );
}

export default Chat;
