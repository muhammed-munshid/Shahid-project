import { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { mainUrl } from '../../../API/Api';
import Navbar from '../Navbar';
import Layout from '../Layout';
import axios from 'axios';

const socket = io(mainUrl);

// eslint-disable-next-line react/prop-types
function StaffDmChat({ id, backtoList }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem('staff-token'); // Staff token

    if (token) {
      // Decode the token to get user ID
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => `%${c.charCodeAt(0).toString(16).padStart(2, '0')}`)
          .join('')
      );
      const decodedToken = JSON.parse(jsonPayload);
      const userId = decodedToken.id;

      // Join room
      socket.emit('joinRoom', userId);

      // Fetch existing chat messages
      const fetchMessages = async () => {
        try {
          const response = await axios.get(`${mainUrl}each-chat/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setMessages(response.data.data);
        } catch (error) {
          console.error('Error fetching messages:', error);
        }
      };

      fetchMessages();

      // Listen for incoming messages (consolidated to a single event listener)
      socket.on('chatMessage', (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      });

      // Cleanup
      return () => {
        socket.emit('leaveRoom', userId);
        socket.off('chatMessage');
      };
    }
  }, [id]);

  const sendMessage = async () => {
    const token = localStorage.getItem('staff-token');
    const newMessage = {
      message: input,
      userType: 'staff',
      recieverId: id,
    };

    try {
      await axios.post(`${mainUrl}chat`, newMessage, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setInput(''); // Clear the input after sending
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sortedMessages = messages.slice().sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  return (
    <>
      <Navbar />
      <Layout>
        <div className="flex flex-col h-screen">
          {/* Chat Bar with Back Button and Centered Username */}
          <div className="relative bg-gray-800 text-white p-4 flex items-center">
            {/* Back Button */}
            <button
              onClick={() => backtoList()}  // Ensure this function is correctly referenced
              className="absolute left-4 text-2xl bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Centered Username */}
            <div className="flex-1 text-center">
              <span className="text-lg font-bold">Muhammed Munshid</span>
            </div>
          </div>
          <div className="flex-grow overflow-y-auto p-4">

            {sortedMessages.map((msg, index) => (
              <div key={index} className={`mb-4 ${msg.userType === 'staff' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-2 px-3 rounded-lg ${msg.userType === 'staff' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
                  {msg.message}
                </div>
                <div className="text-xs text-gray-500"> {new Date(msg.timestamp).toLocaleDateString()} {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white sticky bottom-0 w-full flex justify-center items-center">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message"
              className="border border-gray-300 rounded-lg p-2 w-3/4"
            />
            <button onClick={sendMessage} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Send
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default StaffDmChat;
