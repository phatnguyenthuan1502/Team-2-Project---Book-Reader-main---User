import React from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Read from "./components/read";
import BookList from "./components/bookList";


const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <BookList />
      </Route>
      
      <Route path="/read/:id" component={Read} />

    </div>
  );
};

/*
const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <RecordList />
      </Route>
      
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create">
        <Create />
      </Route>
    </div>
  );
};
*/

export default App;
