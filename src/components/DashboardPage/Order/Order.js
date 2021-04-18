import React, { useEffect, useState } from 'react';
import './Order.css';
import { useForm } from "react-hook-form";
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router';


const stripePromise = loadStripe('pk_test_51IeKPeIyo5mTdZ9OKPxzqloAN7kU2pjFpSOpz7BThrakveUDV6ImLCpdQQhAXNWrmhra3wZzj6ta2EGAUVHVZObs00wDkVi79i');


const Order = () => {

    const { serviceId } = useParams();
    console.log('serviceId', serviceId);

    const [service, setService] = useState([]);
    const { _id, imgUrl, title, price, description } = service;
    console.log(service);

    //Read services data
    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)

    };

    return (
        <section className="container">
            <div className="order-box row">
                <h1>Confirm Order</h1>
                <hr />

                <div className="order-card col-md-3">
                    <div className="card text-white order-card-box">
                        <img src={imgUrl} className="order-card-img" alt="..." />
                        <div className="card-img-overlay d-flex justify-content-center align-items-center order-text-box my-auto m-auto">
                            <div>
                                <h3 className="card-title">{title}</h3>
                                <p>
                                    {description}
                                </p>
                                <h4 className="order-service-price py-2 px-3 w-50 text-center">${price}</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="order-form col-md-8">


                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row w-100 p-5 add-service-form">

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
                                <input type="email" className="form-control" {...register("email", { required: true })} placeholder="E-mail" />
                                {errors.address && <span>This field is required</span>}
                            </div>

                            <div className="mb-3 col-md-12">

                                <Elements stripe={stripePromise}>

                                    <CardElement
                                        className="form-control"
                                        options={{
                                            style: {
                                                base: {
                                                    fontSize: '16px',
                                                    color: '#424770',
                                                    '::placeholder': {
                                                        color: '#aab7c4',
                                                    },
                                                },
                                                invalid: {
                                                    color: '#9e2146',
                                                },
                                            },
                                        }}
                                    />

                                </Elements>


                            </div>

                            <div className="w-100 d-flex justify-content-end px-5">
                                <button type="submit" className="btn btn-custom w-25">Submit</button>
                            </div>

                        </div>
                    </form>



                </div>
            </div>

        </section>
    );
};

export default Order;