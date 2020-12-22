import React from "react"
import Navbar from "./components/Navbar"
import './App.css';

import { Switch, Route, BrowserRouter} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostDetails from "./pages/PostDetails";

import AuthProvider from "./context/AuthProvider";
import AuthRoute from "./utils/AuthRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div id="app-root">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/posts/:postId" component={PostDetails} />
            <AuthRoute exact path="/login" component={Login} />
            <AuthRoute exact path="/register" component={Register} />
          </Switch>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
