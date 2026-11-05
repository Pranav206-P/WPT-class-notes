import { useCallback, useEffect, useState } from "react";
import type { IProduct } from "./types";
import { apiClient } from "../../api-client/ApiClient";
import { showErrorToast } from "../../utils/ToastUtil";

export function useProductsList(){

    const [products, setProducts] = useState<IProduct[]>([]);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(0);

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

    const deleteProduct = async () => {
        try {
            const response = await apiClient.delete(`/product/${selectedProductId}`);
            console.log(response.data);
            setOpenDeleteDialog(false);
            fetchProductsData();
        } catch (error) {
            console.log(error);
            showErrorToast("Deletion Failed !");
        }
    }

    return {
        products,
        openDeleteDialog,
        setOpenDeleteDialog,
        selectedProductId, 
        setSelectedProductId,
        deleteProduct
    }

}