import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

export default function App() {
  const [response, setResponse] = useState(false);
  const [endpoint, setEndpoint] = useState('http://127.0.0.1:4001');

  useEffect(() => {
    const socket = socketIOClient(endpoint);
    socket.on('FromAPI', data => setResponse(data));
  }, []);

  function handleSubmit(event) {
    // socket.emit('sendMessage');
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <form>
        <input name="name" />
        <div />
        <input name="message" />
        <button type="submit" onSubmit={handleSubmit}>
          Send
        </button>
      </form>

      {response}
    </div>
  );
}
