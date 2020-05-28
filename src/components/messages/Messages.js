import React from 'react';
import  './Messages.css';




class Messages extends React.Component {
    constructor() {
        super();
        this.state={
            newUserMessage:"",
            messageBlock:[],
            answerFromChak:null,


        }
    }

    componentDidMount() {
        this.getAnswerFromChak()
    }

    newMessageToState=(e)=>{
        let m= e.target.value;
        let ident =+`${Math.floor(Math.random() * 1000)}`;
        let a = {date: "", text: m,  id: ident, author: "you"}

        this.setState({
            messageBlock:a,
            newUserMessage:m

        })

    }

    getAnswerFromChak =()=>{

        fetch("https://api.chucknorris.io/jokes/random").then((res) => res.json())
            .then((data) => {
                let ident =+`${Math.floor(Math.random() * 1000)}`;
                let author= this.props.activeContact.name
                let message=data.value
                let a = {date: "", text: message,  id: ident, author: author}

                this.setState({
                    answerFromChak:a
                })
            });
    }

        sendNewMessage=()=>{
                   this.getAnswerFromChak();
                 this.props.activeContact.message.push(this.state.messageBlock)
                 this.props.activeContact.message.push(this.state.answerFromChak)


                    this.setState({
                      newUserMessage:""
                  })
     }



    render (){

        const { activeContact}= this.props;
        return (
            <div  className="chat-block">
               <div className="current-contact">
                   <div className="logo">
                       <img src={activeContact.img} alt={activeContact.name}/>
                       <span className="checked-icon" > </span>
                   </div>
                   <div className="name">  {activeContact.name}  </div>
               </div>


                <div className="chat">
                    {activeContact.message ?  (activeContact.message.map(item=>{
                         return(<div>
                              {item.author === "you" ? (<div className="my-message-wrapper">

                                     <p className="my-message">{item.text}</p>

                              </div>):

                                  (<div className="contact-message-wrapper">
                                      <div className="logo">
                                          <img src={activeContact.img} alt={activeContact.name}/>
                                      </div>

                                     <p className="contact-message"> {item.text} </p>

                                  </div> )}

                              </div>)
                              })):(<div> </div>)

                        }</div>


               <div className="new-message-block">

                   <input
                       type="text"
                       id="new-message"
                       value={this.state.newUserMessage}
                       onChange={this.newMessageToState}
                       placeholder="Type your message"
                   />
                   <button
                    id="send-message"
                    onClick={this.sendNewMessage}>
                        send
                   </button>


               </div>





            </div>
        )


    }



}

export default Messages;
