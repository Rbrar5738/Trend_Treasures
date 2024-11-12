import React from "react";
import { Route, Routes } from "react-router-dom";

import AdminPannel from "../Admin/AdminPannel";
import DemoAdmin from "../Admin/Views/DemoAdmin";
import UpdateProductForm from "../Admin/componets/updateProduct/UpdateProduct";

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminPannel />}></Route>
        <Route
          path="/admin/update/:productId"
          element={<UpdateProductForm />}
        ></Route>

        {/* <Route path="/demo" element={<DemoAdmin />}></Route> */}
      </Routes>
    </div>
  );
};

export default AdminRoutes;
