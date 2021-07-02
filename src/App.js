import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const RedirectHoc = props => {
  const { location: { search } } = props;
  if (search) {
    const [, redirectPageUrl] = search.split('p=');
    if (redirectPageUrl) {
      return <Redirect to={redirectPageUrl} />;
    }
  }
  return <Route exact path="/" component={Home} />;
};

function App() {
  return (
    <BrowserRouter basename="/" >
      <Switch>
        <RedirectHoc exact path="/" component={Home} />
        <Route exact path="/" component={Home} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
