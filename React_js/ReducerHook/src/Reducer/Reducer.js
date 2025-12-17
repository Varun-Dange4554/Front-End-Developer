import { DELETE_TODO_ITEMS, ADD_TODO_ITEMS, EDITS_TODO_ITEMS } from "./Action";
import { initialValue } from './Store'

export  const reducer = ( state = initialValue, action) =>{
    switch (action.type){
        case ADD_TODO_ITEMS:
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        id: Date.now(),
                        text: action.payload,
                        isEdits: false,
                        isComplete: false,
                    },
                ],
            };

            case DELETE_TODO_ITEMS:
                return {
                    ...state,
                    items: state.items.filter((el)=> el.id !== action.payload),
                };
            
            default:
                return state;
    }
};
 


