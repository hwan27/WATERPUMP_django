import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import "./styles.module.scss";
import FeedScreen from "screens/FeedScreen";
import TownScreen from "screens/TownScreen";
import SectorScreen from "screens/SectorScreen";
import LoginScreen from "screens/LoginScreen";

const App = props => [
    props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoutes key={2} />
];

App.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};
const PrivateRoutes = props => (
    <Switch>
        <Route key="1" exact path="/" component={FeedScreen} />
        <Route exact path="/town/:id" component={TownScreen} />
        <Route exact path="/sector/:id" component={SectorScreen} />
    </Switch>
);

const PublicRoutes = props => (
    <Switch>
        <Route exact path="/" component={LoginScreen} />
        <Route exact path="/recover" render={() => "recover password"} />
    </Switch>
);

export default App;
