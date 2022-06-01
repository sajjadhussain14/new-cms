import React, { Suspense } from "react";

//import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Login = React.lazy(() => import("./components/Login"));
const Builder = React.lazy(() => import("./components/pages/builder"));
let baseName = "";

const base_url = window.location.origin;
console.log("base name", base_url);

if (base_url == "http://localhost:5500") {
  baseName = process.env.REACT_APP_BASE_NAME_TEMP;
} else {
  baseName = process.env.REACT_APP_BASE_NAME;
}
function App() {
  return (
    <BrowserRouter basename={baseName}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          exact
          path="/home"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Builder />{" "}
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
