import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteClient } from '../../redux/actions/clientActions';
import * as Icon from 'react-bootstrap-icons';

const ClientComponent = () => {

    const clients = useSelector((state) => state.allClients.clients);
    const dispatch = useDispatch();

    const handleDelete = async (clientID) => {
        await dispatch(deleteClient(clientID));
    }

    const renderClients = clients.map((client) => {
        const {clientID, clientName, email, address, phone} = client;
        return (
            <tr key={clientID}>
                <td>{clientName}</td>
                <td>{email}</td>
                <td>{address}</td>
                <td>{phone}</td>
                <td>
                    <button><Icon.Pen /></button>
                    <button onClick={() => handleDelete(clientID)} ><Icon.Trash /></button>
                </td>
            </tr>
        )
    })

    return(
        <>{renderClients}</>
    );

}

export default ClientComponent;