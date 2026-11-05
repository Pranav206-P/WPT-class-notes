import { Route, Routes } from "react-router-dom";
import { AppLayout } from "../AppLayout/AppLayout";
import { Dashboard } from "../../pages/Dashboard/Dashboard";
import { ProductsList } from "../../pages/ProductsList/ProductsList";
import { CreateProduct } from "../../pages/CreateProduct/CreateProduct";
import { memo } from "react";

export const AppRouter = memo(()=>{
    return (
        <Routes>
          <Route path="/" element={<AppLayout/>}>
              <Route path="/" element={<Dashboard/>}></Route>
              <Route path="/products-list" element={<ProductsList/>}></Route>
              <Route path="/add-product" element={<CreateProduct/>}></Route>
          </Route>
      </Routes>
    )
}) 