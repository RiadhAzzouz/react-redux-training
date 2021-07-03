import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { listClients } from '../../redux/actions/clientActions';
import ClientComponent from './ClientComponent';
import * as Icon from 'react-bootstrap-icons';
import { Link } from "react-router-dom";

const ListingClients = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listClients());
    }, []);

    return(
        <div>
             <table className="table">
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
             <Link to={"/addClient"}><Icon.PersonPlusFill />Add Client</Link>
        </div>
    );

};

export default ListingClients;