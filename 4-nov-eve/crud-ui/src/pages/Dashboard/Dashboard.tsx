import { Box, Button, Grid, Typography } from "@mui/material";
import { memo } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const Dashboard = memo(() => {
    return (
        <Box>
            <Box className="bg-white p-8 rounded-xl shadow-lg">
                <Typography className="font-bold text-gray-800 text-3xl">
                    Welcome to CRUD UI
                </Typography>
                <Typography className="mt-2 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
            </Box>
            <Grid container spacing={4} className="mt-8">
                <Grid size={4}>
                    <Box className="bg-white p-6 rounded-xl shadow-lg h-full">
                        <Box className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                            <AddCircleIcon/>
                        </Box>
                        <Typography className="mt-4 text-lg font-semibold text-gray-800">
                            Add New Product
                        </Typography>
                        <Typography className="mt-2 text-sm text-gray-500">
                            You can create new product
                        </Typography>
                        <Button
                            variant="contained"
                            className="mt-4 rounded-lg bg-indigo-600"
                        >
                            Add Product
                        </Button>
                    </Box>
                </Grid>
                <Grid size={4}>
                    <Box className="bg-white p-6 rounded-xl shadow-lg h-full">
                        <Box className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                            <AddCircleIcon/>
                        </Box>
                        <Typography className="mt-4 text-lg font-semibold text-gray-800">
                            Add New Product
                        </Typography>
                        <Typography className="mt-2 text-sm text-gray-500">
                            You can create new product
                        </Typography>
                        <Button
                            variant="contained"
                            className="mt-4 rounded-lg bg-indigo-600"
                        >
                            Add Product
                        </Button>
                    </Box>
                </Grid>
                <Grid size={4}>
                    <Box className="bg-white p-6 rounded-xl shadow-lg h-full">
                        <Box className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                            <AddCircleIcon/>
                        </Box>
                        <Typography className="mt-4 text-lg font-semibold text-gray-800">
                            Add New Product
                        </Typography>
                        <Typography className="mt-2 text-sm text-gray-500">
                            You can create new product
                        </Typography>
                        <Button
                            variant="contained"
                            className="mt-4 rounded-lg bg-indigo-600"
                        >
                            Add Product
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
})