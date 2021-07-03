import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addClient } from '../../redux/actions/clientActions';
import { useHistory } from "react-router-dom";

const AddClient = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [client, setClient] = useState({
        clientName: "",
        email: "",
        address: "",
        phone: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(addClient(client));
        setClient({
            clientName: "",
            email: "",
            address: "",
            phone: ""
        });
        history.push("/");
    }

    return(
        <form onSubmit = {handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Client Name</label>
                <input type="text" className="form-control" id="clientName" value={client.clientName} 
                    onChange={(e) => {setClient({...client, clientName: e.target.value})}} />
            </div> 
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" id="clientEmail" value={client.email} 
                    onChange={(e) => {setClient({...client, email: e.target.value})}} />
            </div>
            <div className="mb-3">
                <label className="form-label">Address</label>
                <input type="text" className="form-control" id="clientAddress" value={client.address} 
                    onChange={(e) => {setClient({...client, address: e.target.value})}} />
            </div> 
            <div className="mb-3">
                <label className="form-label">Phone</label>
                <input type="text" className="form-control" id="clientPhone" value={client.phone} 
                    onChange={(e) => {setClient({...client, phone: e.target.value})}} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );

}

export default AddClient;