import {
  ACTION_CHANGE_MESSAGEFOLDER,
  ACTION_CHANGE_ACTIVE_CONTACT,
  ACTION_CHANGE_ANSWER_FROM_CHAK,
  ACTION_CHANGE_NEW_MESSAGE,
  ACTION_CHANGE_TEXT_NEW_MESSAGE,
  ADD_NEW_MESSAGE
} from '../store/actionType';

export const changeMessageFolder = (newMessageFolder) => {
  return {
    type: ACTION_CHANGE_MESSAGEFOLDER,
    payload: newMessageFolder,
  };
};

export const changeActiveContact = (newActiveContact) => {
  return {
    type: ACTION_CHANGE_ACTIVE_CONTACT,
    payload: newActiveContact,
  };
};

export const changeAnswerFromChak = (newAnswerFromChak) => {
  return {
    type: ACTION_CHANGE_ANSWER_FROM_CHAK,
    payload: newAnswerFromChak,
  };
};

export const changeNewMessage = (newMessage) => {
  return {
    type: ACTION_CHANGE_NEW_MESSAGE,
    payload: newMessage,
  };
};

export const changeNewMessageText = (newMessageText) => {
  return {
    type: ACTION_CHANGE_TEXT_NEW_MESSAGE,
    payload: newMessageText,
  };
};

export const addNewMessage = (folderName, message) => {
  return {
    type: ADD_NEW_MESSAGE,
    payload: { folderName, message },
  };
};
