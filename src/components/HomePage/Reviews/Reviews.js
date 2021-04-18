import React, { useEffect, useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import './Reviews.css';

// const reviews = [
//     {
//         name: 'Ana Rhodues',
//         identity: 'Student',
//         profileImg: 'https://i.ibb.co/g6FRDRt/profile.jpg',
//         reviewHeader: 'Amazing Site Wow!!',
//         reviewDetails: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, velit.',
//         rating: '4.7'
//     },
//     {
//         name: 'James Lio',
//         identity: 'House wife',
//         profileImg: 'https://i.ibb.co/g6FRDRt/profile.jpg',
//         reviewHeader: 'I find my best plants',
//         reviewDetails: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, velit.',
//         rating: '4.8'
//     },
//     {
//         name: 'Lofi candle',
//         identity: 'Teacher',
//         profileImg: 'https://i.ibb.co/g6FRDRt/profile.jpg',
//         reviewHeader: 'I love this site',
//         reviewDetails: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, velit.',
//         rating: '4.5'
//     },
// ]


const Reviews = () => {

    const [reviews, setReview] = useState([])

    useEffect(() => {
        fetch('https://dry-peak-12747.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <div className="container my-5">
            <h1 className="text-center my-5 py-3">OUR CUSTOMER'S REVIEWS</h1>
            <div className="row">
                {
                    reviews.map(review => <ReviewDetails review={review}></ReviewDetails>)
                }
            </div>
        </div>
    );
};

export default Reviews;