import { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { mainUrl } from '../../../API/Api';
// import Layout from '../Layout';
import axios from 'axios';
import Navbar from '../Navbar';

const socket = io(mainUrl);

// eslint-disable-next-line react/prop-types
function AdminDmChat({ id, backtoList }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [staffData, setStaffData] = useState({});
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.emit('join', id);

    socket.on('chatMessage', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off('chatMessage');
    };
  }, [id]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${mainUrl}each-chat/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessages(response.data.data);
        scrollToBottom();
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
    fetchMessages();
  }, [id]);

  useEffect(() => {
    const fetchStaffs = async () => {
      try {
        const response = await axios.get(`${mainUrl}get-staff-by-id/${id}`);
        setStaffData(response.data.data);
      } catch (error) {
        console.error('Error fetching staffs:', error);
      }
    };
    fetchStaffs();
  }, [id]);

  const sendMessage = async () => {
    const token = localStorage.getItem('token');
    const newMessage = {
      message: input,
      userType: 'admin',
      recieverId: id,
    };

    try {
      await axios.post(`${mainUrl}chat`, newMessage, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
    <div className="h-screen flex flex-col">
        <Navbar/>
        {/* Chat Bar with Back Button and Centered Username */}
        <div className="relative bg-gray-800 text-white p-4 flex items-center">
          {/* Back Button */}
          <button
            onClick={() => backtoList()}
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
            <span className="text-lg font-bold">{staffData.name}</span>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4">
          {sortedMessages.map((msg, index) => (
            <div key={index} className={`mb-4 ${msg.userType === 'admin' ? 'text-right' : 'text-left'}`}>
              <div className={`inline-block p-2 px-3 rounded-lg ${msg.userType === 'admin' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
                {msg.message}
              </div>
              <div className="text-xs text-gray-500">{new Date(msg.timestamp).toLocaleDateString()} {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
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

  );
}

export default AdminDmChat;
