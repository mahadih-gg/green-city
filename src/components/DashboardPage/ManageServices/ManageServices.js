import React, { useEffect, useState } from 'react';
import './ManageServices.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageServices = () => {

    const [services, setServices] = useState([]);

    //Read services data
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [services])

    //Delete services data
    const handleServiceDelete = id => {

        fetch(`http://localhost:5000/deleteService/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log("🚀 ~ file: ManageServices.js ~ line 28 ~ ManageServices ~ data", data)
                    const remainServices = services.filter(service => service._id !== id);
                    setServices(remainServices);
                }
                notify();
            })
    }
    const notify = () => {
        toast.error("Service deleted successfully", {
            autoClose: 2000
        })
    };

    return (
        <div className="mt-5 manage-services-table">
            <ToastContainer />
            <table class="table table-borderless table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map((service, sNo) => {
                            return (
                                <tr>
                                    <th scope="row">{sNo + 1}</th>
                                    <td><img src={service.imgUrl} height="100px" alt="" /></td>
                                    <td>{service.title}</td>
                                    <td className="w-25">{service.description}</td>
                                    <td className="delete-row pe-5"><button className="btn-delete" onClick={() => handleServiceDelete(service._id)}><FontAwesomeIcon icon={faTrashAlt} /></button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageServices;