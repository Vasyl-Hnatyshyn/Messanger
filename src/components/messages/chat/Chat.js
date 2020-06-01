import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

function Chat({ activeContact, scrollRef }) {
  return (
    <Scrollbars ref={scrollRef} style={{ width: '100%', height: '76vh' }}>
      <div className="chat">
        {activeContact.message.map((item) => {
          return (
            <div>
              {item.author === 'you' ? (
                <div className="my-message-wrapper">
                  <p className="my-message">{item.text}</p>
                  <span className="date-my">{item.date}</span>
                </div>
              ) : (
                <div className="contact-message-wrapper">
                  <div className="logo">
                    <div className="logo-img">
                      <img src={activeContact.img} alt={activeContact.name} />
                    </div>
                  </div>

                  <p className="contact-message"> {item.text} </p>

                  <span className="date-contact">{item.date}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Scrollbars>
  );
}

export default Chat;
