import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { FoodDataContext } from '../App';

const ProductDetails = () => {
    const { id } = useParams();
    const { state, dispatch } = useContext(FoodDataContext);
    const { product } = state;

    useEffect(() => {
        dispatch({
            type: 'GET_PRODUCT',
            payload: {
                id: id
            }
        })
    }, [dispatch, id]);

    const handleAddToCart = (product) => event => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                product: {
                    ...product,
                    quantity: 1,
                }
            }
        })
    }
console.log(state);


    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <h1>{product?.title} </h1>
                    <p>{product?.description}</p>
                    <button className="btn btn-primary" onClick={handleAddToCart(product)}>Add to Cart</button>
                </div>
                <div className="col-md-6">
                    <img src={product?.img} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;