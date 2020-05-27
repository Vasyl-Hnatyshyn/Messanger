import {ACTION_CHANGE_MESSAGEFOLDER} from "../index";

const initialState={
    MessageFolder: [
       {
            name: 'Richard ',
            img: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg',
            message: [{date: "", text: 'hi there ', id: 1231, author:'Richard ' },
                {date: "", text: 'hi there ', id: 121, author:'you' },
                {date: "", text: 'hello ', id: 1123, author:'Richard' },

            ],

        },
        {
            name: 'Jackie Chan',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIbG63feLqNXCa4QHl_TcqjGRv4nfXrPqY-pj_40ve3NZf7P4I&usqp=CAU',
            message: [{date: "", text: 'how are you', id: 12e1, author: 'Jackie Chan '},
                {date: "", text: 'asdmkadskmmkdas ', id: 1e21, author: 'you'},
                {date: "", text: 'damkkmadskm ', id: 11233, author: 'Jackie Chan'}, ]


        },

        {
            name: 'Mary',
            img: 'https://s2.funon.cc/img/orig/201711/02/59fb2e5070eff.jpg',
            message: [{date: "", text: 'how are you', id: 12e1, author: 'Mary '},
                {date: "", text: 'asdmkadskmmkdas ', id: 1e21, author: 'you'},
                {date: "", text: 'look greate ', id: 11233, author: 'mary'}, ]


        }
]

};

 export const rootReducer =( state = initialState, action)=>{

    switch (action.type) {
        case ACTION_CHANGE_MESSAGEFOLDER:
            return {...state,MessageFolder: action.payload}


    }
    return state;
}