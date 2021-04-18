import React from 'react';
import './AddReview.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddReview = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = data => {

        fetch('http://localhost:5000/addServices', {
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
                                <label htmlFor="title" className="form-label">Service Title</label>
                                <input type="text" className="form-control" {...register("title", { required: true })} id="title" placeholder="Enter service title" />
                                {errors.title && <span>This field is required</span>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea className="form-control" {...register("description", { required: true })} id="description" cols="30" rows="5" placeholder="Write service description here"></textarea>
                                {errors.description && <span>This field is required</span>}
                            </div>

                        </div>
                        <div className="col-md-6">

                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Identity</label>
                                <input type="number" className="form-control" {...register("price", { required: true })} name="price" id="price" placeholder="Add service price" />
                                {errors.title && <span>This field is required</span>}
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