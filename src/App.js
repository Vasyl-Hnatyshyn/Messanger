import React from 'react';
import './App.css';
import ContactList from './components/contact-list/ContactList';
import Messages from './components/messages/Messages';



class App extends React.Component {
    constructor() {
        super();
        this.setState={}
    }

    getAnswerFromChak =()=>{

        fetch("https://api.chucknorris.io/jokes/random").then((res) => res.json())
            .then((data) => {
                console.log(data.value)
            });





    }

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
