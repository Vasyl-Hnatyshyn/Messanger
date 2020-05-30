import React from 'react';
import './App.css';
import ContactList from './components/contact-list/ContactList';
import Messages from './components/messages/Messages';

function App() {
  return (
    <div className="App">
      <ContactList />
      <Messages />
    </div>
  );
}

export default App;
