import {createStore} from 'redux'

function counter(state={color:"red",text:"默认文字"},active){
    switch (active.type){
        case "CHANGE_COLOR":
            return{
                ...state,
                color:active.color
            };
        case "CHANGE_TEXT":
            return{
                ...state,
                text:active.text
            };
        default:
            return state;
    }
}

let store=createStore(counter);

export default store;