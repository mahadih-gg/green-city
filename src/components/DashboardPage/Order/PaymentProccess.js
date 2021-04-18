import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentProccess = ({ setPayment, setPersonaData }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            // console.log('[error]', error);
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            // console.log('[PaymentMethod]', paymentMethod);
            setPayment(paymentMethod);
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
            setPersonaData(true);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement className="form-control p-3" />
                <button type="submit" className="btn btn-custom mt-3" disabled={!stripe}>Pay</button>
            </form>
            {
                paymentError && <h5 className="text-danger mt-3">{paymentError}</h5>
            }
            {
                paymentSuccess && <h5 className="text-success mt-3">Your payment was successfully done.</h5>
            }
        </div>
    );
};

export default PaymentProccess;