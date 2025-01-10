import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import ViewPost from "./components/ViewPost";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} /> {/* Dashboard Route */}
          <Route path="/create" element={<CreatePost />} />{" "}
          {/* Create Post Route */}
          <Route path="/edit/:id" element={<EditPost />} />{" "}
          {/* Edit Post Route */}
          <Route path="/post/:id" element={<ViewPost />} />{" "}
          {/* View Post Route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
