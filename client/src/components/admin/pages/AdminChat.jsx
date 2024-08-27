import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { mainUrl } from '../../../API/Api';
import Navbar from '../Navbar';
import Layout from '../Layout';
import axios from 'axios';

const socket = io(mainUrl);

// eslint-disable-next-line react/prop-types
function AdminChat({ id }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.on('chatMessage', async (msg) => {
      setMessages((prev) => [...prev, msg]);
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

  useEffect(() => {
    const getChat = async () => {
      try {
        const response = await axios.get(`${mainUrl}each-chat/${id}`);
        setMessages(response.data.data);
      } catch (error) {
        console.log('Error Get message:', error);
      }
    };
    getChat();
  }, [id]);

  const sendMessage = () => {
    const token = localStorage.getItem('token');
    
    socket.emit('chatMessage', input); // Emit the new message to the server

    axios.post(`${mainUrl}chat`, { message: input, userType: 'admin' }, {
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
              <div key={index} className={msg.userType === 'admin' ? 'text-right' : 'text-left'}>
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

export default AdminChat;
