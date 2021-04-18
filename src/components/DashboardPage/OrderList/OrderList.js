import React, { useContext, useEffect, useState } from 'react';
import './OrderList.css';
import image from '../../../images/plant-care.jpg';
import OrderListCard from './OrderListCard';
import { UserContext } from '../../../App';


const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    const [serviceOrder, setServiceOrder] = useState([]);

    //Read services data
    useEffect(() => {
        fetch(`http://localhost:5000/serviceOrder?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setServiceOrder(data))
    }, [])

    return (
        <div className="container">
            <div className="row mt-3">
                {
                    serviceOrder.map((order => <OrderListCard order={order}></OrderListCard>))
                }
            </div>

        </div>
    );
};

export default OrderList;