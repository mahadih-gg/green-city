import React, { useContext } from 'react';
import './AddReview.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../../App';

const AddReview = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = data => {

        data.email = loggedInUser.email
        data.userProfile = loggedInUser.photoURL;
        console.log('data', data);

        fetch('https://dry-peak-12747.herokuapp.com/addReview', {
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
        <div className="container">
            <ToastContainer />
            <div className="add-service-box">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row w-100 mt-5 p-5 add-service-form">
                        <div className="col-md-6">

                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Your Name</label>
                                <input type="text" className="form-control" {...register("name", { required: true })} id="name" placeholder="Enter your name" />
                                {errors.name && <span>This field is required</span>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Review Title</label>
                                <input type="text" className="form-control" {...register("title", { required: true })} id="title" placeholder="Enter rating title" />
                                {errors.title && <span>This field is required</span>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Review Description</label>
                                <textarea className="form-control" {...register("description", { required: true })} id="description" cols="30" rows="5" placeholder="Description"></textarea>
                                {errors.description && <span>This field is required</span>}
                            </div>

                        </div>
                        <div className="col-md-6">

                            <div className="mb-3">
                                <label htmlFor="identity" className="form-label">Your Identity</label>
                                <input type="text" className="form-control" {...register("identity", { required: true })} id="identity" placeholder="Ex: Doctor, Teachers, House-wife..." />
                                {errors.identity && <span>This field is required</span>}
                            </div>

                            <div className="mb-3 w-50">
                                <label htmlFor="rating" className="form-label">Rating</label>
                                <input type="text" className="form-control" {...register("rating", { required: true })} id="rating" placeholder="Rating" />
                                {errors.rating && <span>This field is required</span>}
                            </div>

                        </div>
                        <div className="w-100 d-flex justify-content-end px-5">
                            <button type="submit" className="btn btn-custom w-25">Submit</button>
                        </div>

                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddReview;