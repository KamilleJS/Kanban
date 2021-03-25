import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import List from "./List";
import Create from "./CreateTask";

function App(props) {
    return (
        <Router>
            <Link to="/">List</Link> <span>  </span>
            <Link to="/create">Create</Link><span>  </span>
            <Switch>
                <Route path="/create">
                    <Create/>
                </Route>
                <Route path="/">
                    <List/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
