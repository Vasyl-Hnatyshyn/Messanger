import React from 'react';
import  './Messages.css';
import { Scrollbars } from 'react-custom-scrollbars';




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

                { activeContact.message ?  (<div>
                    <div className="current-contact">
                        <div className="logo">
                            <div className="logo-img">
                                <img src={activeContact.img} alt={activeContact.name}/>
                            </div>
                            <div className="checked-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 512 512" width="20px">
                                    <g>
                                        <path
                                            d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0"
                                            data-original="#000000" className="active-path" data-old_color="#000000"
                                            fill="#17A30C"/>
                                        <path
                                            d="m232 341.332031c-4.097656 0-8.191406-1.554687-11.308594-4.691406l-69.332031-69.332031c-6.25-6.253906-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l58.023437 58.027344 127.363281-127.359375c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382812 0 22.632812l-138.667969 138.667969c-3.15625 3.136719-7.25 4.691406-11.347656 4.691406zm0 0"
                                            data-original="#000000" className="active-path" data-old_color="#000000"
                                            fill="#17A30C"/>
                                    </g>
                                </svg>
                            </div>


                        </div>
                        <div className="name">  {activeContact.name}  </div>
                    </div>

                    <Scrollbars style={{ width: '100%', height: '76vh' }}>
                    <div className="chat">
                        {  activeContact.message.map(item=>{
                            return(<div>
                                {item.author === "you" ? (<div className="my-message-wrapper">

                                        <p className="my-message">{item.text}</p>

                                    </div>):

                                    (<div className="contact-message-wrapper">
                                        <div className="logo">
                                            <div className="logo-img">
                                            <img src={activeContact.img} alt={activeContact.name}/>
                                            </div>
                                        </div>

                                        <p className="contact-message"> {item.text} </p>

                                    </div> )}

                            </div>)
                        })

                        } </div>

                        </Scrollbars>

                <div className="new-message-block">
                <div id="new-message-wrapper">
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
                <i className="material-icons" id="send-button">send</i>
                </button>
                </div>

                </div>

                    </div>):

                    (<div className='select-message'>  <p>Please select a chat to start messaging...  </p>   </div>)
            }

            </div>
        )


    }

}

export default Messages;
