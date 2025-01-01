import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add/Add";
import Orders from "./pages/Orders/Orders";
import List from "./pages/List/List";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <hr />
      <div className="app-content">
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/add" element={<Add></Add>} />
          <Route path="/list" element={<List></List>} />
          <Route path="/orders" element={<Orders></Orders>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
