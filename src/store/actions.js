
import {ACTION_CHANGE_MESSAGEFOLDER } from '../index'


export const changeMessageFolder= (newMessageFolder)=> {
    return {
        type: ACTION_CHANGE_MESSAGEFOLDER,
        payload: newMessageFolder
    };
}

