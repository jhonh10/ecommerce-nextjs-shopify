import React, { createContext, useState, useEffect } from 'react';

export const ProductsContext = createContext()

function ProductsContextProvider({ children }) {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        await db.collection('products').onSnapshot(snapshot => {
            const docs = [];
            snapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
            })
            setProducts(docs);
        })
    }
    
   

    const contextValues = {
        products
    }
    return (
        <ProductsContext.Provider value={contextValues} >
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductsContextProvider;