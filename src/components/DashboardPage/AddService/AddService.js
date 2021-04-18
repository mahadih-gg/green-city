import React, { useState } from 'react';
import './AddService.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddService = () => {

    const [imageUrl, setImageUrl] = useState(null)

    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = data => {
        data.imgUrl = imageUrl;

        fetch('http://localhost:5000/addServices', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    notify();
                    setImageUrl('')
                }
            })
    };

    const notify = () => {
        toast.success("New service added successfully", {
            autoClose: 2000
        })
    };

    const handleImgUpload = e => {
        const imageData = new FormData();
        imageData.set('key', '3f363e85e94ff32374398424e5766ed5')
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => setImageUrl(res.data.data.display_url))
            .catch(error => console.log(error))
    }
    console.log(imageUrl);
    return (
        <div className="container">
            <ToastContainer />
            <div className="add-service-box">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row w-100 mt-5 p-5 add-service-form">
                        <div className="col-md-6">

                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Service Title</label>
                                <input type="text" className="form-control" {...register("title", { required: true })} name="title" id="title" placeholder="Enter service title" />
                                {errors.title && <span>This field is required</span>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea className="form-control" name="description" {...register("description", { required: true })} id="description" cols="30" rows="5" placeholder="Write service description here"></textarea>
                                {errors.description && <span>This field is required</span>}
                            </div>

                        </div>
                        <div className="col-md-6">

                            <div className="mb-3 w-50">
                                <label htmlFor="price" className="form-label">Service Price</label>
                                <input type="number" className="form-control" {...register("price", { required: true })} name="price" id="price" placeholder="Add service price" />
                                {errors.title && <span>This field is required</span>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="serviceImg" className="form-label">Upload Image</label>
                                <input type="file" onChange={handleImgUpload} id="serviceImg" required />
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

export default AddService;