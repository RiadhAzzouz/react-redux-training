import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { listClients } from '../../redux/actions/clientActions';
import ClientComponent from './ClientComponent';

const ListingClients = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listClients());
    }, []);

    return(
        <div>
             <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Client Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <ClientComponent />
                </tbody>
             </table>
        </div>
    );

};

export default ListingClients;