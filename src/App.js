import React from "react";

import { InformationProvider } from "./InformationContext";
import Divider from "./divider";
import Nav from "./nav";
import Gallery from "./gallery";
import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";
import MovieDetail from "./movieDetail";
import RandomGallery from "./random-gallery";

function App() {
  return (
    <InformationProvider>
      <HashRouter>
        <Switch>
          <div>
            <Route path="/all" component={RandomGallery} />
            <Route path="/" exact component={Divider} />
            <Route path="/" exact component={Nav} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/movie/:id" component={MovieDetail} />
          </div>
        </Switch>
      </HashRouter>
    </InformationProvider>
  );
}

export default App;
