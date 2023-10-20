import { INCREMENT,DECREMENT } from "./action";

const initialvalue=10;

const reducer=(state=initialvalue,action)=>{
     switch(action.type){
        case INCREMENT:
            return state+1;
        case  DECREMENT:
            return state-1;
        default :
           return state;       
     }
}

export default reducer