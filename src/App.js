import React from 'react';
import './App.css';
import ContactList from './components/contact-list/ContactList';
import Messages from './components/messages/Messages';



class App extends React.Component {

    render (){
        return (
            <div className="App">
                <Messages/>
                <ContactList/>

            </div>
    )


    }



}

export default App;
