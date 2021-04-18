import React, { useEffect, useState } from 'react';
import './OrderList.css';
import image from '../../../images/plant-care.jpg';
import OrderListCard from './OrderListCard';


const OrderList = () => {

    const [serviceOrder, setServiceOrder] = useState([]);

    //Read services data
    useEffect(() => {
        fetch('http://localhost:5000/serviceOrder')
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