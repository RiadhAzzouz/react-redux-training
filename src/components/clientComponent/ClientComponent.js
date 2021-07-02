import React from 'react';
import { useSelector } from 'react-redux';

const ClientComponent = () => {

    const clients = useSelector((state) => state.allClients.clients);

    const renderClients = clients.map((client) => {
        const {id, clientName, email, address, phone} = client;
        return (
            <tr key={id}>
                <td>{clientName}</td>
                <td>{email}</td>
                <td>{address}</td>
                <td>{phone}</td>
            </tr>
        )
    })

    return(
        <>{renderClients}</>
    );

}

export default ClientComponent;