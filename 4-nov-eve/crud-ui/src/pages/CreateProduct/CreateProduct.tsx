import { Alert, Box, Button, Grid, TextField } from "@mui/material";
import { memo, useState, type ChangeEvent, type SubmitEvent } from "react";
import type { IFormData } from "./types";
import { apiClient } from "../../api-client/ApiClient";
import { showErrorToast, showSuccessToast } from "../../utils/ToastUtil";

export const CreateProduct = memo(() => {


    const [formData, setFormData] = useState<IFormData>({ name: "", description: "", price: "", qty: "" });

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
        try {
            const response = await apiClient.post("/product", formData);
            console.log(response);
            console.log(response.data);
            showSuccessToast("Product Created !");
            setFormData({ name: "", description: "", price: "", qty: "" });
        } catch (error) {
            console.log(error);
            showErrorToast("Product Creation Failed !");
        }
    }

    return (
        <Box>
            <Alert severity="success">
                Add a new product
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
                <Button type="submit" variant="contained">Add Product</Button>

            </Box>
        </Box>
    )
}) 