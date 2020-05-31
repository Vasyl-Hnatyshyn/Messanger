import React from 'react';
import {Scrollbars} from "react-custom-scrollbars";
import Icon from "../../Icon";


function List (props) {
    const {MessageFolder,changeActiveContact,searchText}=props
    const filteredFolders = searchText ?
        MessageFolder.filter(({ name }) => name.toLowerCase().includes(searchText.toLowerCase()))
        : MessageFolder;

    return(
        <Scrollbars style={{ width: '100%', height: '75vh' }}>
            {filteredFolders.map((item) => {
                let index =+item.message.length-1;
                let date = item.message[index].date;
                const month= ['Jan', 'Feb', 'Mar','Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'];
                return (
                    <div
                        className="contact-profile"
                        key={item.id}
                        onClick={() => {
                            changeActiveContact(item.name);
                        }}
                    >
                        <div className="logo">
                            <div className="logo-img">
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div className="checked-icon">
                                <Icon/>
                            </div>
                        </div>
                        <div className="profile-text-block">
                            <p className="contact-name">{item.name} </p>
                            <p className="last-message">{item.message[index].text}</p>
                        </div>
                        <div className="last-message-date">{`${month[date.slice(3,4)-1]}  ${date.slice(0,2)},  ${'20'+date.slice(5,7)}`}</div>
                    </div>
                );
            })}
        </Scrollbars>



    )

}

export default List;