import React, { useContext, useEffect, useState } from 'react';
import './Order.css';
import { useForm } from "react-hook-form";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import ServiceOrderCard from './ServiceOrderCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PaymentProccess from './PaymentProccess';


const stripePromise = loadStripe('pk_test_51IeKPeIyo5mTdZ9OKPxzqloAN7kU2pjFpSOpz7BThrakveUDV6ImLCpdQQhAXNWrmhra3wZzj6ta2EGAUVHVZObs00wDkVi79i');


const Order = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { serviceId } = useParams();
    const [personaData, setPersonaData] = useState(false);
    const [payment, setPayment] = useState(null);
    const [service, setService] = useState([]);

    //Read services data
    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        data.email = loggedInUser.email;
        data.userName = loggedInUser.displayName;
        data.userProfile = loggedInUser.photoURL;
        data.serviceData = service;
        data.paymentData = payment;

        console.log(data)

        fetch('http://localhost:5000/addServiceOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    notify();
                }
            })

    };
    const notify = () => {
        toast.success("New service added successfully", {
            autoClose: 2000
        })
    };


    return (
        <section className="container">
            <ToastContainer />
            <div className="order-box row">
                <h1>Confirm Order</h1>
                <hr />

                <div className="order-card col-md-3">
                    <ServiceOrderCard service={service} key={service._id}></ServiceOrderCard>
                </div>

                <div className="order-form col-md-8">

                    <div className="add-service-form p-5">

                        {
                            personaData &&
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row w-100">

                                    <div className="mb-3 col-md-6">
                                        <input type="text" className="form-control" {...register("name", { required: true })} placeholder="Name" />
                                        {errors.name && <span>This field is required</span>}
                                    </div>

                                    <div className="mb-3 col-md-6">
                                        <input type="number" className="form-control" {...register("number", { required: true })} placeholder="Phone number" />
                                        {errors.title && <span>This field is required</span>}
                                    </div>

                                    <div className="mb-3 col-md-12">
                                        <input type="text" className="form-control" {...register("address", { required: true })} placeholder="Address" />
                                        {errors.address && <span>This field is required</span>}
                                    </div>

                                    <div className="mb-3 col-md-12">
                                        <input type="email" className="form-control" {...register("email", { required: true })} placeholder="E-mail" value={loggedInUser.email} />
                                        {errors.address && <span>This field is required</span>}
                                    </div>

                                    <div className="w-100 d-flex justify-content-end px-5">
                                        <button type="submit" className="btn btn-custom w-25">Submit</button>
                                    </div>

                                </div>
                            </form>

                        }

                        {personaData === false &&
                            <div>
                                <Elements stripe={stripePromise}>
                                    <PaymentProccess setPayment={setPayment} setPersonaData={setPersonaData}></PaymentProccess>
                                </Elements>
                            </div>
                        }
                    </div>



                </div>
            </div>

        </section>
    );
};

export default Order;