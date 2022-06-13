import React, { Suspense } from "react";

//import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";
import { baseName } from "./config";
const Login = React.lazy(() => import("./components/Login"));
const Builder = React.lazy(() => import("./components/pages/builder"));
const Settings = React.lazy(() => import("./components/Settings.js"));

function App() {
  return (
    <BrowserRouter basename={baseName}>
      <Routes>
        <Route path="/" element={<Admin />} />

        <Route
          path="/login"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/home"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Builder />
            </Suspense>
          }
        />

        <Route
          path="/settings"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Settings />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
  {
    /*
    <BrowserRouter  basename={process.env.REACT_APP_BASE_NAME}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Builder} />
      </Switch>
    </BrowserRouter>
    */
  }
}

export default App;
