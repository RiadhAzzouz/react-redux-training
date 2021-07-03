import React from 'react';
import { useSelector } from 'react-redux';
import * as Icon from 'react-bootstrap-icons';

const ClientComponent = () => {

    const clients = useSelector((state) => state.allClients.clients);

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
                    <button><Icon.Trash /></button>
                </td>
            </tr>
        )
    })

    return(
        <>{renderClients}</>
    );

}

export default ClientComponent;