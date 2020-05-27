import React from 'react';
import  './Messages.css';




class Messages extends React.Component {

    render (){

        const { currentMessage}= this.props;
        return (
            <div  className="chat-block">
               <div className="current-contact">
                   <div className="logo">
                       <img src={currentMessage.img} alt={currentMessage.name}/>
                       <span className="checked-icon" > </span>
                   </div>
                   <div className="name">  {currentMessage.name}  </div>
               </div>

                <div className="chat">
                    {currentMessage.message ?  (currentMessage.message.map(item=>{
                         return(<div>
                              {item.author === "you" ? (<div className="my-message-wrapper">

                                     <p className="my-message">{item.text}</p>

                              </div>):

                                  (<div className="contact-message-wrapper">
                                      <div className="logo">
                                          <img src={currentMessage.img} alt={currentMessage.name}/>
                                      </div>

                                     <p className="contact-message"> {item.text} </p>

                                  </div> )}

                              </div>)











                              })):(<div></div>)

                         }



                </div>






            </div>
        )


    }



}

export default Messages;
