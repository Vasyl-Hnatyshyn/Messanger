import React from 'react';
import './ContactList.css';
import Icon from '../Icon'
import List from './list/List'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeActiveContact } from '../../store/actions';



class ContactList extends React.Component {
  constructor() {
    super();
    this.state={
      searchText:''
    }
  }

  searchFieldText =(e)=>{

    this.setState({
      searchText:e.target.value
          })
  }


  render() {
    const { MessageFolder, changeActiveContact } = this.props;

    return (
      <div className="contact-block">
        <div className="search-block">
          <div className="logo">
            <div className="logo-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSin-Oq8qcKN7sGLnEkgUpWQWUgCyQmK1Y7HHY5R6Lt-N-PQ-ZO&usqp=CAU"
                alt="default-user-logo"
              />
            </div>
            <div className="checked-icon">
              <Icon/>
            </div>
          </div>

          <div className="search-wrapper">
            <i className="material-icons" id="search-icon">
              search
            </i>

            <input
              type="text"
              id="contact-search"
              placeholder="Search or start new chart"
              onChange={this.searchFieldText}
            />
          </div>
        </div>

        <div className="contact-list">
          <p id="chats">Chats</p>

          <List MessageFolder={MessageFolder}
                changeActiveContact={changeActiveContact}
                searchText={this.state.searchText}
          />


        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
     MessageFolder: state.MessageFolder,
  });

const mapDispatchToProps = (dispatch) => ({
  changeActiveContact: bindActionCreators(changeActiveContact, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
