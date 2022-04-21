import React from "react";
import '../style/product-title.css';

const ProductTitle = (props) => {
    return (
        <>
            <h1>{props.children}</h1>
            <h2>{props.subtitle}</h2>
        </>
    )
}

export default ProductTitle