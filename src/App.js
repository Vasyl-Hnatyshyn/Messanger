import React from 'react';
import './App.css';
import ContactList from './components/contact-list/ContactList';
import Messages from './components/messages/Messages';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {changeMessageFolder,changeActiveContact,changeAnswerFromChak,changeNewMessage}  from './store/actions';


const mapStateToProps=(state)=> {

    return {
       MessageFolder:  state.MessageFolder,
       ActiveContact: state.ActiveContact,
       AnswerFromChak: state.AnswerFromChak,
       newMessage: state.newMessage
    }
}

const mapDispatchToProps=(dispatch)=> {

    return {
        changeMessageFolder: bindActionCreators(changeMessageFolder,dispatch),
        changeActiveContact: bindActionCreators(changeActiveContact,dispatch),
        changeAnswerFromChak: bindActionCreators(changeAnswerFromChak,dispatch),
        changeNewMessage: bindActionCreators(changeNewMessage,dispatch)


    }

}


function App (props){

   const {MessageFolder,changeActiveContact,ActiveContact,AnswerFromChak,changeAnswerFromChak ,newMessage ,changeNewMessage}= props
      return (


            <div className="App">

                <ContactList
                    MessageFolder={MessageFolder}
                    changeActiveContact={changeActiveContact}
                />

                <Messages
                    newMessage={newMessage}
                    ActiveContact={ActiveContact}
                    AnswerFromChak={AnswerFromChak}
                    changeAnswerFromChak={changeAnswerFromChak}
                    changeNewMessage={changeNewMessage}

                />


            </div>
    )






}

export default connect(mapStateToProps,mapDispatchToProps)(App);
