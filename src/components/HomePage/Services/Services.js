import React, { useEffect, useState } from 'react';
import './Services.css';
import ServicDetails from '../ServicDetails/ServicDetails';


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [services])

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