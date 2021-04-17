import React from 'react';
import './LatestBlog.css';

const latestBlogs = {
    'title': 'SOMETIMES ON PURPOSE ECTED...',
    'description': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam earum eius debitis perferendis odit?',

    'author': 'Aaron, Hank',
    'imgUrl': 'https://i.ibb.co/KFLzfrC/latest-Blog1.png',

    'author2': 'Klopstock, Friedrich Gottlieb',
    'imgUrl2': 'https://i.ibb.co/ch61VcF/latest-Blog2.png',

    'author3': 'Lalabalavu, Ratu Naiqama',
    'imgUrl3': 'https://i.ibb.co/nftzKRS/latest-Blog3.png',

    'author4': 'Michelangelo Buonarroti',
    'imgUrl4': 'https://i.ibb.co/M5kqMC7/latest-Blog4.jpg'

}

const LatestBlog = () => {

    const { title, author, description, imgUrl, author2, imgUrl2, author3, imgUrl3, author4, imgUrl4 } = latestBlogs

    return (
        <div className="container latest-blog my-5">

            <h1 className="py-5 text-center">LATEST BLOG</h1>

            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="row d-flex justify-content-center align-item-center">
                            <div className="col-md-6">
                                <div class="card mb-3">
                                    <img src={imgUrl} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{title}</h5>
                                        <p class="card-text">{description}</p>
                                        <p class="card-text"><small class="text-muted">by {author}</small></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="card mb-3">
                                    <img src={imgUrl2} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{title}</h5>
                                        <p class="card-text">{description}</p>
                                        <p class="card-text"><small class="text-muted">by {author2}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row d-flex justify-content-center align-item-center">
                            <div className="col-md-6">
                                <div class="card mb-3">
                                    <img src={imgUrl3} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{title}</h5>
                                        <p class="card-text">{description}</p>
                                        <p class="card-text"><small class="text-muted">by {author3}</small></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="card mb-3">
                                    <img src={imgUrl4} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{title}</h5>
                                        <p class="card-text">{description}</p>
                                        <p class="card-text"><small class="text-muted">by {author4}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestBlog;