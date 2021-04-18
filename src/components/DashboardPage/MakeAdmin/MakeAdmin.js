import React from 'react';
import './MakeAdmin.css';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MakeAdmin = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch('http://localhost:5000/addAdmin', {
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
        toast.success("Service deleted successfully", {
            autoClose: 2000
        })
    };


    return (
        <div className="container">
            <ToastContainer />
            <div className="admin-form w-50 mt-5 p-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control" type="email" {...register("email", { required: true })} placeholder="Enter new admin email" />
                    {errors.email && <span>This field is required</span>}

                    <button className="btn btn-custom mt-3 w-100" type="submit">Submit</button>
                </form>

            </div>
        </div>
    );
};

export default MakeAdmin;