import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/auth/Login";
import Navbar from "./pages/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import IssueDetails from "./pages/IssueDetails/IssueDetails";
import Subscription from "./pages/Subscription/Subscription";
import SignUp from "./pages/auth/SignUp";
import Auth from "./pages/auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./Redux/Auth/Action";
import { fetchProjects } from "./Redux/Project/Action";
import UpgradeSuccess from "./pages/Subscription/UpgradeSuccess";

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.auth);

  useEffect(() => {
    dispatch(getUser());
    dispatch(fetchProjects({}));
  }, [auth.jwt]);

  console.log(auth);

  return (
    <>
      {auth.user ? (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route
              path="/project/:projectId/issue/:issueId"
              element={<IssueDetails />}
            />
            <Route path="/upgrade_plan" element={<Subscription />} />
            <Route path="/upgrade_plan/success" element={<UpgradeSuccess />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      ) : (
        <Auth />
      )}
    </>
  );
};

export default App;
