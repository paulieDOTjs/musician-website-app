import React from "react";
import StyleProvider from "./State/Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import TourPage from "./Pages/TourPage";
import StorePage from "./Pages/StorePage";
import "./App.css";
import Links from "./Components/Links/Links";
import Button from "./Components/Button/Button";

function App() {
  return (
    <StyleProvider>
      <Router>
        <div className="App">
          <Route exact path="/" component={HomePage} />
          <Route path="/tour" component={TourPage} />
          <Route path="/store" component={StorePage} />
          <Links />
          <Button />
          <link
            rel="stylesheet"
            href={`${process.env.PUBLIC_URL}/media/styles/layout/layoutA.css`}
          />
        </div>
      </Router>
    </StyleProvider>
  );
}

export default App;
