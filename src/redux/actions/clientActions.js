import { ActionTypes } from './constatnts';
import clientApi from '../../apis/clientApi';

export const addClient = (client) => async (dispatch) => {
    const response = await clientApi.post('/add', client);
    dispatch({type: ActionTypes.ADD_CLIENT, payload: response.data});
};

export const deleteClient = (idClient) => async (dispatch) => {
    const response = await clientApi.delete('/delete/'+idClient);
    dispatch({type: ActionTypes.DELETE_CLIENT, payload: idClient});
};

export const updateClient = (client) => {
    return {
        type: ActionTypes.UPDATE_CLIENT,
        payload: client
    };
};

export const listClients = () => async (dispatch) => {
    const response = await clientApi.get('/all');
    dispatch({type: ActionTypes.LIST_CLIENTS, payload: response.data});
};