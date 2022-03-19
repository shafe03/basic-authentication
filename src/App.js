import "./App.css";
import Header from "./Components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "./Components/login";
import NotFound from "./Components/notFound";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
