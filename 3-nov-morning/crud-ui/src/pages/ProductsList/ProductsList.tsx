/* eslint-disable react-hooks/exhaustive-deps */
import { Alert, Box, Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { memo } from "react";
import { useProductsList } from "./useProductsList";

export const ProductsList = memo(() => {

        const {
            products
        } = useProductsList();

    return (
        <Box>
            <Alert severity="success">
                List of Products
            </Alert>
            <TableContainer component={Paper} sx={{ marginTop: '20px' }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Quantity</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            products.map((product) => {
                                return (
                                    <TableRow key={product.id}>
                                        <TableCell>{product.name}</TableCell>
                                        <TableCell>{product.description}</TableCell>
                                        <TableCell>{product.price}</TableCell>
                                        <TableCell>{product.qty}</TableCell>
                                    </TableRow>
                                )
                            })
                        }
                        {/* {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))} */}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}) 