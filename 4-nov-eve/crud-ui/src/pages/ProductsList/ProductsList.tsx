/* eslint-disable react-hooks/exhaustive-deps */
import { Alert, Box, Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Typography } from "@mui/material";
import { memo } from "react";
import { useProductsList } from "./useProductsList";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import ListAltIcon from '@mui/icons-material/ListAlt';

export const ProductsList = memo(() => {

    const {
        products,
        openDeleteDialog,
        setOpenDeleteDialog,
        setSelectedProductId,
        deleteProduct
    } = useProductsList();

    const navigate = useNavigate();

    return (
        <Box>
            <Box className="p-6 bg-white rounded-xl shadow-md border-l-4 border-indigo-600 flex items-center gap-4">
                <Box className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                    <ListAltIcon />
                </Box>
                <Box>
                    <Typography className="text-2xl font-bold text-gray-800">List of Products</Typography>
                    <Typography className="text-sm text-gray-500">View your all of the products here</Typography>
                </Box>
            </Box>
            <TableContainer component={Paper} sx={{ marginTop: '20px' }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Options</TableCell>
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
                                        <TableCell>
                                            <IconButton sx={{ mr: 2 }} onClick={() => {
                                                setOpenDeleteDialog(true);
                                                setSelectedProductId(product.id);
                                            }}>
                                                <DeleteIcon color="error"></DeleteIcon>
                                            </IconButton>
                                            <IconButton onClick={() => {
                                                navigate(`/edit-product/${product.id}`);
                                            }}>
                                                <EditIcon color="success"></EditIcon>
                                            </IconButton>
                                        </TableCell>
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
            <Dialog
                open={openDeleteDialog}
                onClose={() => { setOpenDeleteDialog(false) }}
                fullWidth
            >
                <DialogTitle id="alert-dialog-title">
                    {"Confirmation"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure, you want delete ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={deleteProduct} color="success">Yes</Button>
                    <Button variant="contained" onClick={() => { setOpenDeleteDialog(false) }} color="error">No</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}) 