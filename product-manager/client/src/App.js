import {BrowserRouter, Switch, Route} from "react-router-dom"
import Dashboard from "./views/Dashboard"
import Create from "./views/Create"
import OneProduct from "./views/OneProduct"
import Edit from "./views/Edit"

function App() {
  return (
    <BrowserRouter>
      <h1>Products</h1>
      <Switch>
        <Route exact path="/products">
          <Dashboard/>
        </Route>
        <Route exact path="/products/new">
          <Create/>
        </Route>
        <Route exact path="/products/:id">
          <OneProduct/>
        </Route>
        <Route exact path="/products/:id/edit">
          <Edit/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
