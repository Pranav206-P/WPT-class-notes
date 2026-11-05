/* eslint-disable react-hooks/exhaustive-deps */
import { Alert, Box, Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import { memo } from "react";
import { useProductsList } from "./useProductsList";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const ProductsList = memo(() => {

    const {
        products,
        openDeleteDialog,
        setOpenDeleteDialog,
        setSelectedProductId,
        deleteProduct
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
                                            <IconButton sx={{ mr: 2 }} onClick={()=>{
                                                setOpenDeleteDialog(true);
                                                setSelectedProductId(product.id);
                                            }}>
                                                <DeleteIcon color="error"></DeleteIcon>
                                            </IconButton>
                                            <IconButton>
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
                onClose={()=>{setOpenDeleteDialog(false)}}
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
                    <Button variant="contained" onClick={()=>{setOpenDeleteDialog(false)}} color="error">No</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}) 