
export const ProductReducer = (state, action) => {
    switch (action.type) {
        case 'PRODUCT_DETAILS':
            return {
                ...state,
                productData: action.payload
            }
        default:
            return state;
    }
}