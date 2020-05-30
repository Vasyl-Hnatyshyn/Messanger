
import {ACTION_CHANGE_MESSAGEFOLDER,ACTION_CHANGE_ACTIVE_CONTACT,ACTION_CHANGE_ANSWER_FROM_CHAK } from '../index'


export const changeMessageFolder= (newMessageFolder)=> {
    return {
        type: ACTION_CHANGE_MESSAGEFOLDER,
        payload: newMessageFolder
    };
}


export const changeActiveContact = (newActiveContact)=> {
    return {
        type: ACTION_CHANGE_ACTIVE_CONTACT,
        payload: newActiveContact
    };

}

export const changeAnswerFromChak = (newAnswerFromChak)=> {
    return {
        type: ACTION_CHANGE_ANSWER_FROM_CHAK,
        payload: newAnswerFromChak
    };
}

