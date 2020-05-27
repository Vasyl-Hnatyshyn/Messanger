import React from 'react';
import './ContactList.css'




class ContactList extends React.Component {

    render (){
        const{MessageFolder,currentContactData}=this.props;

        // console.log(MessageFolder)
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
                    <p id="chats">Chats</p>

                    <div className="list">


                        {MessageFolder.map((item)=>{
                            return (<div className="contact-profile" key={item.id} onClick={()=>{currentContactData(item)}}>
                                <div className="logo">
                                    <img src={item.img} alt={item.name}/>
                                    <span className="checked-icon" > </span>
                                </div>
                                <div  className= 'profile-text-block'  >
                                    <p className='contact-name'>{item.name} </p>
                                    <p className='last-message'>{ item.message.reverse()[0].text}</p>

                                </div>
                                <div className='last-message-date'>
                                    12 .02 22

                                </div>


                            </div>)
                        }) }







                    </div>








                </div>





            </div>
    )


    }



    }

    export default ContactList;
