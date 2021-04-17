import React from 'react';
import './Services.css';
import ServicDetails from '../ServicDetails/ServicDetails';

const services = [{
    "id": 1,
    "name": "Home Delivery",
    "imgUrl": "https://i.ibb.co/5WKnwnQ/home-delivary.png"
}, {
    "id": 2,
    "name": "Plant Care",
    "imgUrl": "https://i.ibb.co/BLXRY9F/plant-care.jpg"
}, {
    "id": 3,
    "name": "Fertilizer Support",
    "imgUrl": "https://i.ibb.co/tqQnnJb/fertilizer.webp"
}, {
    "id": 4,
    "name": "Planting Seedlings",
    "imgUrl": "https://i.ibb.co/Q8gHvF3/planting-seedlings.jpg"
}, {
    "id": 5,
    "name": "Replanting",
    "imgUrl": "https://i.ibb.co/TBdNFWR/replanting.jpg"
}, {
    "id": 6,
    "name": "Insecticideing",
    "imgUrl": "https://i.ibb.co/wgrY4T9/insecticideing.jpg"
}]

const Services = () => {
    return (
        <section className="container my-5">
            <h1 className="text-center py-5">OUR SERVICES</h1>
            <div className="row">
                {
                    services.map((service) => <ServicDetails service={service}></ServicDetails>)
                }
            </div>
        </section>
    );
};

export default Services;