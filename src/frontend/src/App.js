import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/`)
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>FitMap React Frontend</h1>
      <p>Response from Flask backend:</p>
      <h2>{message}</h2>
    </div>
  );
}

export default App;
