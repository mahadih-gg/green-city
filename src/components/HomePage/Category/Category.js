import React from 'react';
import './Category.css';
import CategotyDetails from './CategotyDetails';

const categories = [
    {
        title: 'Catus',
        type: 'Product',
        background: 'https://i.ibb.co/0D49Cmp/category1.png'
    },
    {
        title: 'House',
        type: 'New 2020',
        background: 'https://i.ibb.co/YkrRRNH/category2.png'
    },
    {
        title: 'Spring',
        type: 'Save 30%',
        background: 'https://i.ibb.co/G9kYqpw/category3.png'
    },
    {
        title: 'Collection',
        type: 'Save 30%',
        background: 'https://i.ibb.co/X728QLF/category4.png'
    }
]

const Category = () => {
    return (
        <div className="row mb-5">
            {
                categories.map(category => <CategotyDetails category={category}></CategotyDetails>)
            }
        </div>
    );
};

export default Category;