import foods from '../data/products.json';
export const init = {
    products: foods || [],
    product: {},
    cart: [],
    wishlist: [],
}

export const reducer = (state = init, action) => {
    switch (action.type) {
        case 'GET_PRODUCT': {
            const id = action.payload.id;
            console.log("id", id);
            const product = state.products.find(product => product.id == id);

            return {
                ...state,
                product: product
            }
        }

        case 'ADD_TO_CART': {
            const selectedProduct = action.payload.product;

            const hasProduct = state.cart.find(p => p.id == selectedProduct.id);
            console.log("hasProduct", hasProduct);

            if(hasProduct){
                hasProduct.quantity = hasProduct.quantity + 1;
                console.log(" After Has  hasProduct", hasProduct);
            }

            return {
                ...state,
                cart: [selectedProduct, ...state.cart]
            }
        }

        default:
            return state;
    }
}


