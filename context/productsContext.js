import { createContext, useState } from "react"


export const ProductsContext = createContext({})

function ProductContextProvider({ children }) {
    const [products, setProducts] = useState([]);

    return (
        <ProductsContext.Provider value={{products, setProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductContextProvider;


