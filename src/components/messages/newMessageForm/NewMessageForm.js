import React from 'react';

function NewMessageForm({ newMessageText, sendNewMessage, newMessageToState }) {
  return (
    <div className="new-message-block">
      <form id="new-message-wrapper" onSubmit={sendNewMessage}>
        <input
          type="text"
          id="new-message"
          value={newMessageText}
          onChange={newMessageToState}
          placeholder="Type your message"
        />
        <button id="send-message" type="submit">
          <i className="material-icons" id="send-button">
            send
          </i>
        </button>
      </form>
    </div>
  );
}

export default NewMessageForm;
