import { Alert, Box, Button, Grid, TextField } from "@mui/material";
import { useEffect, useState, type ChangeEvent, type SubmitEvent } from "react";
import { useParams } from "react-router-dom";
import type { IFormData } from "../CreateProduct/types";
import { apiClient } from "../../api-client/ApiClient";
import { showErrorToast, showSuccessToast } from "../../utils/ToastUtil";
import type { IProduct } from "../ProductsList/types";

export function UpdateProduct() {

    const { id } = useParams();

    const [formData, setFormData] = useState<IFormData>({ name: "", description: "", price: "", qty: "" });

    const fetchById = async ()=>{
        try {
            const response = await apiClient.get(`/product/${id}`);
            const productData: IProduct = response.data;
            setFormData({name:productData.name, description: productData.description, price: productData.price.toString(), qty:  productData.qty.toString() });
        } catch (error) {
            console.log(error);
             showErrorToast("Unable to fetch the data !");
        }
    }

    useEffect(() => {
        fetchById();
    }, []);


    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
        try {
            const response = await apiClient.put(`/product/${id}`, formData);
            console.log(response);
            console.log(response.data);
            showSuccessToast("Product Updated !");
            // setFormData({ name: "", description: "", price: "", qty: "" });
        } catch (error) {
            console.log(error);
            showErrorToast("Product Update Failed !");
        }
    }


    return (
        <Box>
            <Alert severity="success">
                Edit and Update the product
            </Alert>
            <Box component="form" onSubmit={handleSubmit} sx={{ marginTop: '30px' }}>
                <Grid container rowSpacing={4} columnSpacing={5} sx={{ mb: 4 }}>
                    <Grid size={4}>
                        <TextField label="Name" variant="outlined" value={formData.name} name="name" onChange={handleChange} fullWidth />
                    </Grid>
                    <Grid size={4}>
                        <TextField label="Description" variant="outlined" value={formData.description} name="description" onChange={handleChange} fullWidth />
                    </Grid>
                </Grid>
                <Grid container rowSpacing={4} columnSpacing={5} sx={{ mb: 4 }}>
                    <Grid size={4}>
                        <TextField label="Price" variant="outlined" value={formData.price} name="price" onChange={handleChange} fullWidth />
                    </Grid>
                    <Grid size={4}>
                        <TextField label="Quantity" variant="outlined" value={formData.qty} name="qty" onChange={handleChange} fullWidth />
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained">Update Product</Button>

            </Box>
        </Box>
    )

}