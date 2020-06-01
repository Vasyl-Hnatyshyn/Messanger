import React from 'react';
import './Messages.css';
import Icon from '../Icon';
import NewMessageForm from './newMessageForm/NewMessageForm';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Chat from './chat/Chat';
import { changeNewMessage, changeNewMessageText, addNewMessage } from '../../store/actions';

class Messages extends React.Component {
  scrollRef = React.createRef();

  newMessageToState = (e) => {
    const message = e.target.value;
    this.props.changeNewMessageText(message);
  };

  getDate = () => {
    const date = new Date();
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()},   ${date.getHours()}:${
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    }`;
  };

  saveNewMessage = (message, author) => {
    const id = +`${Math.floor(Math.random() * 1000)}`;
    const date = this.getDate();
    const messageObject = { date, text: message, id, author };
    this.props.addNewMessage(this.props.activeContact.name, messageObject);
    this.scrollRef.current.scrollToBottom();
  };

  getAnswerFromChak = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => res.json())
      .then((data) => {
        const author = this.props.activeContact.name;
        const message = data.value;
        this.saveNewMessage(message, author);
      });
  };

  sendNewMessage = (e) => {
    e.preventDefault();
    if (this.props.newMessageText === '') {
      return null;
    }
    const message = this.props.newMessageText;
    const author = 'you';
    this.saveNewMessage(message, author);
    this.getAnswerFromChak();
    this.props.changeNewMessageText('');
  };

  render() {
    const { activeContact, newMessageText, addNewMessage } = this.props;
    return (
      <div className="chat-block">
        {activeContact ? (
          <div>
            <div className="current-contact">
              <div className="logo">
                <div className="logo-img">
                  <img src={activeContact.img} alt={activeContact.name} />
                </div>
                <div className="checked-icon">
                  <Icon />
                </div>
              </div>
              <div className="name"> {activeContact.name} </div>
            </div>

            <Chat activeContact={activeContact} scrollRef={this.scrollRef} />
            <NewMessageForm
              newMessageText={newMessageText}
              sendNewMessage={this.sendNewMessage}
              newMessageToState={this.newMessageToState}
              addNewMessage={addNewMessage}
            />
          </div>
        ) : (
          <div className="select-message">
            <p>Please select a chat to start messaging... </p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activeContact: state.messageFolder.find(({ name }) => name === state.activeContact),
  newMessage: state.newMessage,
  newMessageText: state.newMessageText,
});

const mapDispatchToProps = (dispatch) => ({
  changeNewMessage: bindActionCreators(changeNewMessage, dispatch),
  changeNewMessageText: bindActionCreators(changeNewMessageText, dispatch),
  addNewMessage: bindActionCreators(addNewMessage, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
