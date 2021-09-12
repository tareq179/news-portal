import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Single from "./Components/Single/Single";
import TopBar from './Components/TopBar/TopBar';
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import Write from "./Components/Write/Write";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://peaceful-refuge-93681.herokuapp.com/isAdmin?email=${loggedInUser?.email}`
      )
      .then((res) => {
        setIsAdmin(res.data);
      })
      .catch((error) => console.log(error.message));
  }, [loggedInUser?.email]);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, isAdmin]}>
      <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">{loggedInUser ? <Home /> : <Login />}</Route>
        <Route path="/write">{isAdmin ? <Write /> : <Login />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
