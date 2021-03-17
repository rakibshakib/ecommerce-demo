import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { addToCart } from '../../provider/actions/cartAction';
import { FoodDataContext } from '../../provider/reducers/cartProvider';

const Home = () => {
    const { state, dispatch } = useContext(FoodDataContext);
 
    const addToCartHandler = (product) => {
        dispatch(addToCart(product, 1))
    }

    return (
        <div className="container">
            <div className="row">
                {state.products.map((product) => (
                    <div className="col-md-3" key={product.id}>
                        <div className="card">
                            <img src={product.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"> {product.title} </h5>
                                <p className="card-text"> {product.shotDescription} </p>
                                <Link to={`/product/${product.id}`} className="btn btn-primary">Go somewhere</Link> 
                                <button className="btn btn-secondary" onClick={() => addToCartHandler(product)}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;