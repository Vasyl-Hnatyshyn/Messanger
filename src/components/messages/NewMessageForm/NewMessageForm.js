import React from 'react';



function NewMessageForm (props) {
    const {NewMessageText,sendNewMessage,newMessageToState}=props
    return(
        <div className="new-message-block">
            <form id="new-message-wrapper" onSubmit={(e)=>{sendNewMessage(e)}}>
                <input
                    type="text"
                    id="new-message"
                    value={NewMessageText}
                    onChange={(e)=>{newMessageToState(e)}}
                    placeholder="Type your message"
                />
                <button id="send-message" type="submit">
                    <i className="material-icons" id="send-button">
                        send
                    </i>
                </button>
            </form>
        </div>
         )

}

export default NewMessageForm;