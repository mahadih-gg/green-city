import React, { useEffect, useState } from 'react';
import './ManageOrders.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const ManageOrders = () => {


    const [serviceOrder, setServiceOrder] = useState([]);

    //Read services data
    useEffect(() => {
        fetch('http://localhost:5000/serviceOrder')
            .then(res => res.json())
            .then(data => setServiceOrder(data))
    }, [])

    const notify = () => {
        toast.error("Service deleted successfully", {
            autoClose: 2000
        })
    };
    return (
        <div className="mt-5 manage-services-table">
            <ToastContainer />
            <table className="table table-borderless table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Service</th>
                        <th scope="col">Name</th>
                        <th scope="col">Number</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        serviceOrder.map((order, sNo) => {
                            return (
                                <tr>
                                    <th scope="row">{sNo + 1}</th>
                                    <td>{order.serviceData.title}</td>
                                    <td>{order.name}</td>
                                    <td>{order.number}</td>
                                    <td>{order.email}</td>
                                    <td>
                                        <div className="dropdown">
                                            <button className="btn btn-secondary btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                Status
                                            </button>

                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><Link className="dropdown-item" to="/">Pending</Link></li>
                                                <li><Link className="dropdown-item" to="/">On Going</Link></li>
                                                <li><Link className="dropdown-item" to="/">Done</Link></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;