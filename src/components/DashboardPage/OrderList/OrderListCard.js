import React from 'react';

const OrderListCard = ({ order }) => {

    const { _id, imgUrl, title, description } = order.serviceData;

    return (
        <div className="col-md-3 mb-3">
            <div className="card text-white order-card-box">
                <img src={imgUrl} className="order-card-img" alt="..." />
                <div className="card-img-overlay d-flex justify-content-center align-items-center order-text-box my-auto m-auto">
                    <div>
                        <h6 className="w-50 text-center ms-auto status">Pending</h6>
                        <h3 className="card-title">{title}</h3>
                        <p>
                            {description}
                        </p>

                        <button className="btn btn-danger">Cancel Order</button>
                    </div>
                </div>
            </div>
        </div>);
};

export default OrderListCard;