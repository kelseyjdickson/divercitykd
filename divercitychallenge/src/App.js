import "./App.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import Container from "./Components/MainContainer/Container";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

function App() {
  const [data, setData] = useState({ jobs: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://divercity-test.herokuapp.com/jobs");

      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <Banner />
          <Container data={data} />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
