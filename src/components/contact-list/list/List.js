import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Icon from '../../Icon';
import { month, styleScrollbar } from './ListData';

function List({ messageFolder, changeActiveContact, searchText }) {
  const filteredFolders = searchText
    ? messageFolder.filter(({ name }) => name.toLowerCase().includes(searchText.toLowerCase()))
    : messageFolder;

  return (
    <Scrollbars style={styleScrollbar}>
      {filteredFolders.map((item) => {
        let index = +item.message.length - 1;
        let date = item.message[index].date;

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
                <Icon />
              </div>
            </div>
            <div className="profile-text-block">
              <p className="contact-name">{item.name} </p>
              <p className="last-message">{item.message[index].text}</p>
            </div>
            <div className="last-message-date">{`${month[date.slice(2, 3) - 1]}  ${date.slice(0,1)},
              ${'20' + date.slice(4, 6)}`}</div>
          </div>
        );
      })}
    </Scrollbars>
  );
}

export default List;
