import { useContext, useEffect } from "react";
import { ProductsContext } from "../context/productsContext";
import { getProducts } from "../services/getProducts";

export function useProducts() {

    const { products, setProducts } = useContext(ProductsContext)

    useEffect(() => {
        getProducts(setProducts)

    }, [setProducts]);

    return { products }
}
