import React from 'react';
import './App.css';
import ContactList from './components/contact-list/ContactList';
import Messages from './components/messages/Messages';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {changeMessageFolder}  from './store/actions';

const mapStateToProps=(state)=> {

    return {
       MessageFolder:  state.MessageFolder
    }
}

const mapDispatchToProps=(dispatch)=> {

    return {
        changeMessageFolder: bindActionCreators(changeMessageFolder,dispatch),

    }

}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            currentMessage:[]
        }
    }

    getAnswerFromChak =()=>{

        fetch("https://api.chucknorris.io/jokes/random").then((res) => res.json())
            .then((data) => {
                console.log(data.value)
            });
    }


    currentContactData=(item)=>{
        this.setState({
            currentMessage:item

        })
        console.log(item)
    }



    render (){

        const { MessageFolder,changeMessageFolder} = this.props;




        return (


            <div className="App">

                <ContactList
                    MessageFolder={MessageFolder}
                    currentContactData={this.currentContactData}
                />
                <Messages currentMessage={this.state.currentMessage}/>


            </div>
    )


    }



}

export default connect(mapStateToProps,mapDispatchToProps)(App);
