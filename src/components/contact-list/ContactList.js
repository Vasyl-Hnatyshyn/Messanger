import React from 'react';
import './ContactList.css';
import { Scrollbars } from 'react-custom-scrollbars';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeActiveContact } from '../../store/actions';

const mapStateToProps = (state) => {
  return {
    MessageFolder: state.MessageFolder,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeActiveContact: bindActionCreators(changeActiveContact, dispatch),
  };
};

class ContactList extends React.Component {
  filter = (e) => {
    let input = e.target.value;
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

  render() {
    const { MessageFolder, changeActiveContact } = this.props;

    return (
      <div className="contact-block">
        <div className="search-block">
          <div className="logo">
            <div className="logo-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSin-Oq8qcKN7sGLnEkgUpWQWUgCyQmK1Y7HHY5R6Lt-N-PQ-ZO&usqp=CAU"
                alt=""
              />
            </div>
            <div className="checked-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 0 512 512"
                width="20px"
              >
                <g>
                  <path
                    d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0"
                    data-original="#000000"
                    className="active-path"
                    data-old_color="#000000"
                    fill="#17A30C"
                  />
                  <path
                    d="m232 341.332031c-4.097656 0-8.191406-1.554687-11.308594-4.691406l-69.332031-69.332031c-6.25-6.253906-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l58.023437 58.027344 127.363281-127.359375c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382812 0 22.632812l-138.667969 138.667969c-3.15625 3.136719-7.25 4.691406-11.347656 4.691406zm0 0"
                    data-original="#000000"
                    className="active-path"
                    data-old_color="#000000"
                    fill="#17A30C"
                  />
                </g>
              </svg>
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
              onChange={this.filter}
            />
          </div>
        </div>

        <div className="contact-list">
          <p id="chats">Chats</p>
          <Scrollbars style={{ width: '100%', height: '75vh' }}>
            {MessageFolder.map((item) => {
              return (
                <div
                  className="contact-profile"
                  key={item.id}
                  onClick={() => {
                    changeActiveContact(item);
                  }}
                >
                  <div className="logo">
                    <div className="logo-img">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className="checked-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        viewBox="0 0 512 512"
                        width="20px"
                      >
                        <g>
                          <path
                            d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0"
                            data-original="#000000"
                            className="active-path"
                            data-old_color="#000000"
                            fill="#17A30C"
                          />
                          <path
                            d="m232 341.332031c-4.097656 0-8.191406-1.554687-11.308594-4.691406l-69.332031-69.332031c-6.25-6.253906-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l58.023437 58.027344 127.363281-127.359375c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382812 0 22.632812l-138.667969 138.667969c-3.15625 3.136719-7.25 4.691406-11.347656 4.691406zm0 0"
                            data-original="#000000"
                            className="active-path"
                            data-old_color="#000000"
                            fill="#17A30C"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="profile-text-block">
                    <p className="contact-name">{item.name} </p>
                    <p className="last-message">{item.message.reverse()[0].text}</p>
                  </div>
                  <div className="last-message-date">12 .02 22</div>
                </div>
              );
            })}
          </Scrollbars>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
