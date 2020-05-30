import React from 'react';
import {Scrollbars} from "react-custom-scrollbars";


function Chat (props) {
    const {ActiveContact}=props
    return(

        <Scrollbars style={{ width: '100%', height: '76vh' }}>
            <div className="chat">
                {ActiveContact.message.map((item) => {
                    return (
                        <div>
                            {item.author === 'you' ? (
                                <div className="my-message-wrapper">
                                    <p className="my-message">{item.text}</p>
                                </div>
                            ) : (
                                <div className="contact-message-wrapper">
                                    <div className="logo">
                                        <div className="logo-img">
                                            <img src={ActiveContact.img} alt={ActiveContact.name} />
                                        </div>
                                    </div>

                                    <p className="contact-message"> {item.text} </p>
                                </div>
                            )}
                        </div>
                    );
                })}{' '}
            </div>
        </Scrollbars>


    )

}

export default Chat;