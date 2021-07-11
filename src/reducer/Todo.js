import {ADD_TODO,REMOVE_TODO} from "../action/action-type"


const initialState=[];

export default (state=initialState, action)=>{
    console.log("reducer called");
    console.log("action = ",action)
    switch (action.type) {
      case ADD_TODO:
          console.log("returning ",[...state,action.payload])
          return [...state,action.payload]
      case REMOVE_TODO:
          return state.filter(todo=> todo.id!==action.payload)
      default:
          console.log("returning default")
          return state;
    }
}