import React from 'react';

function Product(props) {
    return (
    <div>
        <div >{props.image_url}</div>
        <div >{props.name}</div>
        <div >{props.price}</div>
    </div>    
    )
};

export default Product;