import React from 'react';
import './Messages.css';
import Icon from '../Icon'
import NewMessageForm from './NewMessageForm/NewMessageForm'


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Chat from "./chat/Chat";
import {  changeNewMessage, changeNewMessageText,addNewMessage } from '../../store/actions';



class Messages extends React.Component {


  newMessageToState = (e) => {
    let m = e.target.value;
    let ident = +`${Math.floor(Math.random() * 1000)}`;
    let a = { date: '', text: m, id: ident, author: 'you' };


    this.props.changeNewMessage(a);

    this.props.changeNewMessageText(m);
  };

  getAnswerFromChak = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => res.json())
      .then((data) => {
        let ident = +`${Math.floor(Math.random() * 1000)}`;
        let author = this.props.ActiveContact.name;
        let message = data.value;
        let a = { date: '', text: message, id: ident, author: author };

          this.props.addNewMessage( this.props.ActiveContact.name, a);
      });
  };

  sendNewMessage = (e) => {

          e.preventDefault();
          this.props.addNewMessage( this.props.ActiveContact.name, this.props.newMessage);
          this.getAnswerFromChak();
          this.props.changeNewMessageText('');

  };

  render() {
    const { ActiveContact, NewMessageText,addNewMessage} = this.props;
    return (
      <div className="chat-block">
        {ActiveContact ? (
          <div>
            <div className="current-contact">
              <div className="logo">
                <div className="logo-img">
                  <img src={ActiveContact.img} alt={ActiveContact.name} />
                </div>
                <div className="checked-icon">
                    <Icon/>
                </div>
              </div>
              <div className="name"> {ActiveContact.name} </div>
            </div>

            <Chat
                ActiveContact={ActiveContact}
            />
              <NewMessageForm
                  NewMessageText={NewMessageText}
                  sendNewMessage={this.sendNewMessage}
                  newMessageToState={this.newMessageToState}
                  addNewMessage={addNewMessage}
              />

          </div>
        ) : (
          <div className="select-message">
            {' '}
            <p>Please select a chat to start messaging... </p>{' '}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

    ActiveContact: state.MessageFolder.find(({ name }) => name === state.ActiveContact),
    newMessage: state.newMessage,
    NewMessageText: state.NewMessageText,



});

const mapDispatchToProps = (dispatch) => ({

    changeNewMessage: bindActionCreators(changeNewMessage, dispatch),
    changeNewMessageText: bindActionCreators(changeNewMessageText, dispatch),
    addNewMessage: bindActionCreators( addNewMessage, dispatch)

});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
