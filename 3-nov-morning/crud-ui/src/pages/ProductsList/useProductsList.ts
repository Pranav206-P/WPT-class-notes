import { useCallback, useEffect, useState } from "react";
import type { IProduct } from "./types";
import { apiClient } from "../../api-client/ApiClient";

export function useProductsList(){
    const [products, setProducts] = useState<IProduct[]>([]);

    const fetchProductsData = useCallback(async () => {
        try {
            const response = await apiClient.get("/product");
            const productsData = response.data;
            setProducts(productsData);
        } catch (error) {
            console.log(error);
        }

    }, []);

    useEffect(() => {
        fetchProductsData();
    }, []);

    return {
        products
    }

}