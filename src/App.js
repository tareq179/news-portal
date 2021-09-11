import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Single from "./Components/Single/Single";
import TopBar from './Components/TopBar/TopBar';
import Home from './pages/Home/Home';

function App() {

  return (
    <>
      <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route> */}
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
