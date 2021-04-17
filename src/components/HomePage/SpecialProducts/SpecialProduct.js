import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './SpecialProduct.css';

const trees = [{
    "id": 1,
    "name": "Valuptata Veli",
    "image": "https://i.ibb.co/GC263Sh/tree1.png",
    "price": 213
}, {
    "id": 2,
    "name": "Suscipit",
    "image": "https://i.ibb.co/Wx5wrvr/tree2.png",
    "price": 253
}, {
    "id": 3,
    "name": "Rawley",
    "image": "https://i.ibb.co/XYbsQcT/tree3.png",
    "price": 268
}, {
    "id": 4,
    "name": "Money Plant",
    "image": "https://i.ibb.co/BtcGWqR/tree4.jpg",
    "price": 285
}, {
    "id": 5,
    "name": "Malorun",
    "image": "https://i.ibb.co/d20mWHJ/tree5.png",
    "price": 215
}, {
    "id": 6,
    "name": "Letraset",
    "image": "https://i.ibb.co/jfVkBkh/tree6.png",
    "price": 384
}, {
    "id": 7,
    "name": "Randomised",
    "image": "https://i.ibb.co/swcmqBt/tree7.png",
    "price": 220
}, {
    "id": 8,
    "name": "De Finibus",
    "image": "https://i.ibb.co/qBRHDGv/tree8.png",
    "price": 217
}]

const SpecialProduct = () => {
    return (
        <section className="special-product">

            <div className="container">
                <h1 className="text-center my-5 special-product-title">SPECIAL PRODUCT</h1>

                <div className="row">
                    {
                        trees.map(tree => <ProductCard tree={tree} key={tree.id}></ProductCard>)
                    }
                </div>

            </div>
        </section>
    );
};

export default SpecialProduct;