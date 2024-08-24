import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { mainUrl } from '../../../API/Api';
import Navbar from '../Navbar';
import Layout from '../Layout';
import axios from 'axios';

const socket = io(mainUrl);

function AdminChat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    console.log(messages);


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

    const sendMessage = () => {
        const token = localStorage.getItem('token');
        socket.emit('chatMessage', input); // Emit the new message to the server

        axios.post(`${mainUrl}chat`, { message: input, userType: 'admin' }, {  // Send only the new message to the backend
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


    return (
        <>
            <Navbar />
            <Layout>
                <div>
                    <div>
                        {messages.map((msg, index) => (
                            <div key={index}>
                                {msg.message}
                                <br />
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
