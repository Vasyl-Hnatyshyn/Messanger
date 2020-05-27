import React from 'react';
import './ContactList.css'




class ContactList extends React.Component {

    render (){
        return (
            <div  className="contact-block">
                <div className="search-block">
                    <div className="logo">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSin-Oq8qcKN7sGLnEkgUpWQWUgCyQmK1Y7HHY5R6Lt-N-PQ-ZO&usqp=CAU" alt=""/>
                        <span className="checked-icon" > </span>
                    </div>
                    <label htmlFor="contact-search"> </label>
                    <input type="text"
                       id="contact-search"
                       placeholder= " search or start new chart"

                    />



                </div>

                <div className="contact-list">
                    <p>Chats</p>

                    <div className="list">
                        <div className="contact-profile">


                        </div>





                    </div>








                </div>





            </div>
    )


    }



    }

    export default ContactList;
