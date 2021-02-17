import { Progress } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Header from "../components/Header";
import MapComponent from "../components/MapComponent";
import Munro from "../components/Munro";
import MunroTable from "../components/MunroTable";
import NavBar from "../components/NavBar";

const MainContainer = ({ filteredMunroList, input, onChange }) => {
  return (
    <Router>
      <Header></Header>
      <NavBar></NavBar>
      <Switch>
        {filteredMunroList ? (
          <>
            <Route
              exact
              path="/map"
              render={() => (
                <MapComponent
                  filteredMunroList={filteredMunroList}
                  input={input}
                  onChange={onChange}
                />
              )}
            />
            <Route
              exact
              path="/list"
              render={() => (
                <MunroTable
                  filteredMunroList={filteredMunroList}
                  input={input}
                  onChange={onChange}
                />
              )}
            />
            <Route
              path="/munro/:id"
              render={() => <Munro munroList={filteredMunroList} />}
            />
          </>
        ) : (
          <Progress size="xs" isIndeterminate />
        )}

        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default MainContainer;
