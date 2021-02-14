import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import ErrorPage from "../components/ErrorPage";
import Header from "../components/Header";
import MapComponent from "../components/MapComponent";
import NavBar from "../components/NavBar";

const MainContainer = () => {
  const [munroList, setMunroList] = useState([]);

  useEffect(() => {
    fetch("https://bikemunros-backend.herokuapp.com/munros")
      .then((res) => res.json())
      .then((data) => {
        setMunroList(data);
      })
      .then();
  }, []);

  return (
    <Router>
      <Header></Header>
      <NavBar></NavBar>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <MapComponent munroList={munroList} />}
        />

        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default MainContainer;
