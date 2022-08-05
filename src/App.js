import "./App.css";
import SideBar from "./SideBar";
import Chat from "./Chat";
// import { Switch } from '@mui/material';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="app_body">
        <Router>
          <SideBar />
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
