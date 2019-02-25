import {init} from '../utils/init';
const loginReducer=(state=init,actions)=>{
   if(actions.type=="LOGIN"){
       state={
           ...state,
           'u':actions.payload['u'],
           'p':actions.payload['p']
       }
   }
   return state;
}

export default loginReducer;