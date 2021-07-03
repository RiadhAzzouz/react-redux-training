import { ActionTypes } from '../actions/constatnts';

const initialState = {
    clients: []
};

const clientReducer = (state=initialState, action) => {
    switch(action.type) {
    
        case ActionTypes.ADD_CLIENT:
            state.clients.push(action.payload);
            return {...state};
            
        case ActionTypes.DELETE_CLIENT:
            return {...state, clients: state.clients.filter((client) => client.clientID !== action.payload)};
        
            case ActionTypes.UPDATE_CLIENT:
            let updatedList = state.clients.map((client, index) => {
                if(client.id === action.payload.id) {
                    client = action.payload;
                }
                return state.clients;
            });
            return {...state, clients: updatedList};
        
        case ActionTypes.LIST_CLIENTS:
            return {...state, clients:action.payload}
        
        default:
            return state;
    }
}

export default clientReducer;