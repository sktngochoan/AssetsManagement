import "./assets/styles/MainLayout.css";
import React, { Suspense, useEffect, useState } from "react";
import {
  Route,
  BrowserRouter,
  Routes,
  Navigate,
  useRoutes,
} from "react-router-dom";
import Main from "./layouts/MainLayout";
import RequireAuth from "./components/RequiredAuth/RequireAuth";
const home = React.lazy(() => import("./modules/home/pages/Home.js"));
const login = React.lazy(() => import("./modules/login/pages/Login.js"));
const Unauthorization = React.lazy(() =>
  import("./modules/unauthorized/pages/Unauthorized.js")
);
const assest = React.lazy(() =>
  import("./modules/assetsMangement/pages/AssetsMangement.js")
);
const assignment = React.lazy(() =>
  import("./modules/assignmentManagement/pages/AssignmentManagement.js")
);
const user = React.lazy(() =>
  import("./modules/userManagement/pages/UserManagement.js")
);
const report = React.lazy(() => import("./modules/report/pages/Report.js"));
const requestReturnAssets = React.lazy(() =>
  import(
    "./modules/returningRequestManagement/pages/ReturningRequestMangement.js"
  )
);
let isLoggined = false;
if (window.localStorage.getItem("user")) {
  isLoggined = true;
}
console.log(isLoggined);
const loading = () => <div className="" />;

export const LoadComponent = ({ component: Component }) => (
  <Suspense fallback={loading()}>
    <Component />
  </Suspense>
);
const ROLES = {
  ADMIN: "ADMIN",
  STAFF: "STAFF",
};
export default function () {
  return (
    <div>
      <Routes>
        <Route
          path="auth"
          element={<LoadComponent component={Unauthorization} />}
        />
        <Route path="login" element={<LoadComponent component={login} />} />
        <Route path="/" element={<Main />}>
          <Route path="/" element={<LoadComponent component={home} />} />
          {isLoggined ? (
            <>
              <Route element={<RequireAuth allowedRoles="ADMIN" />}>
                <Route
                  path="/assignment"
                  element={<LoadComponent component={assignment} />}
                />
                <Route
                  path="/user"
                  element={<LoadComponent component={user} />}
                />
                <Route
                  path="/assets"
                  element={<LoadComponent component={assest} />}
                />
              </Route>
              <Route element={<RequireAuth allowedRoles="USER" />}>
                <Route
                  path="/return"
                  element={<LoadComponent component={requestReturnAssets} />}
                />
                <Route
                  path="/report"
                  element={<LoadComponent component={report} />}
                />
              </Route>
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Route>
      </Routes>
    </div>
  );
}
