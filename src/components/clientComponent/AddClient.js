import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addClient, updateClient } from '../../redux/actions/clientActions';
import { useHistory, useParams  } from "react-router-dom";

const AddClient = () => {
    const { clientID } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const allClients = useSelector((state) => state.allClients.clients);
    const [clientToUpdate, setClientToUpdate] = useState({
        clientName: "",
        email: "",
        address: "",
        phone: ""
    });

    useEffect(() => {
        if(clientID) {
            let foundClient = allClients.find(client => client.clientID == clientID)
            setClientToUpdate({...foundClient});
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(clientID) { //UPDATING EXSITING CLIENT
            await dispatch(updateClient(clientToUpdate));
        } else { //ADD NEW CLIENT
            await dispatch(addClient(clientToUpdate));
        }
        setClientToUpdate({
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
                <input type="text" className="form-control" id="clientName" value={clientToUpdate.clientName} 
                    onChange={(e) => {setClientToUpdate({...clientToUpdate, clientName: e.target.value})}} />
            </div> 
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" id="clientEmail" value={clientToUpdate.email} 
                    onChange={(e) => {setClientToUpdate({...clientToUpdate, email: e.target.value})}} />
            </div>
            <div className="mb-3">
                <label className="form-label">Address</label>
                <input type="text" className="form-control" id="clientAddress" value={clientToUpdate.address} 
                    onChange={(e) => {setClientToUpdate({...clientToUpdate, address: e.target.value})}} />
            </div> 
            <div className="mb-3">
                <label className="form-label">Phone</label>
                <input type="text" className="form-control" id="clientPhone" value={clientToUpdate.phone} 
                    onChange={(e) => {setClientToUpdate({...clientToUpdate, phone: e.target.value})}} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );

}

export default AddClient;