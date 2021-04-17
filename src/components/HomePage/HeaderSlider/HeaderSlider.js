import React from 'react';
import './HeaderSlider.css'
const HeaderSlider = () => {
    return (
        <section id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active slider-custom slider-img-1">
                    <div className="ms-5 ps-5 slider-content">
                        <h4>Plant's give us happiness</h4>
                        <h1>DECOR RENTALS</h1>
                        <button className="btn btn-custom px-5 py-3">Shop Now</button>
                    </div>
                </div>

                <div className="carousel-item slider-custom slider-img-2">
                    <div className="ms-5 ps-5 slider-content">
                        <h4>Plant's give us happiness</h4>
                        <h1>DECOR RENTALS</h1>
                        <button className="btn btn-custom px-5 py-3">Shop Now</button>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                <span className="visually-hidden">Next</span>
            </button>
        </section>
    );
};

export default HeaderSlider;