import React, { useState } from 'react';
import './AddService.css';
import { useForm } from "react-hook-form";
import axios from 'axios';


const AddService = () => {

    const [imageUrl, setImageUrl] = useState(null)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
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
        <div className="container" onSubmit={handleSubmit(onSubmit)}>
            <div className="add-service-box">
                <form>
                    <div className="row w-100 mt-5 p-5 add-service-form">
                        <div className="col-md-6">

                            <div class="mb-3">
                                <label for="title" class="form-label">Service Title</label>
                                <input type="text" class="form-control" {...register("title", { required: true })} name="title" id="title" placeholder="Enter service title" />
                                {errors.title && <span>This field is required</span>}
                            </div>

                            <div class="mb-3">
                                <label for="description" class="form-label">Description</label>
                                <textarea class="form-control" name="description" {...register("description", { required: true })} id="description" cols="30" rows="5" placeholder="Write service description here"></textarea>
                                {errors.description && <span>This field is required</span>}
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div class="mb-3">
                                <label for="serviceImg" class="form-label">Upload Image</label>
                                <input type="file" onChange={handleImgUpload} id="serviceImg" />
                            </div>

                        </div>
                        <div className="w-100 d-flex justify-content-end px-5">
                            <button type="submit" class="btn btn-custom w-25">Submit</button>
                        </div>

                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddService;