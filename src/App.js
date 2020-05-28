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


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            activeContact:[],
            messageFolder:[]

        }
    }

    componentDidMount() {
        const folder = this.props.MessageFolder
        this.setState({
            messageFolder:folder
        })
    }




    filter = (input) => {

        let filter = input.toLowerCase();
        let filterItems = document.querySelectorAll('.contact-profile');

        filterItems.forEach((item) => {
            if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    };

    currentContactData=(item)=>{

        this.setState({
            activeContact:item
          })
    }



    render (){
   const {changeMessageFolder  }= this.props
      return (


            <div className="App">

                <ContactList
                    filter={this.filter}
                    MessageFolder={this.state.messageFolder}
                    currentContactData={this.currentContactData}
                />

                <Messages
                    activeContact={this.state.activeContact}

                />


            </div>
    )


    }



}

export default connect(mapStateToProps,mapDispatchToProps)(App);
