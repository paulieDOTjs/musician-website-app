import React from "react";
import StyleProvider from "./State/Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import TourPage from "./Pages/TourPage";
import StorePage from "./Pages/StorePage";
import "./App.css";
import Links from "./Components/Links/Links";

function App() {
  const darkMode = false;
  return (
    <StyleProvider>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/tour" component={TourPage} />
        <Route path="/store" component={StorePage} />
        <Links />
        <div className="App">
          <link
            rel="stylesheet"
            href={`${process.env.PUBLIC_URL}/media/styles/${
              darkMode ? "DarkMode.css" : "LightMode.css"
            }`}
          />
        </div>
      </Router>
    </StyleProvider>
  );
}

export default App;
