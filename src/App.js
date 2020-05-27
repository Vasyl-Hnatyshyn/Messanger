import React from 'react';
import './App.css';
import ContactList from './components/ContactList';
import Messages from './components/Messages';



class App extends React.Component {

    render (){
        return (
            <div className="App">

                <ContactList/>
                <Messages/>
            </div>
    )


    }



}

export default App;
