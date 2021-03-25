import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import List from "./List";
import Create from "./CreateTask";


function App() {
    return (
        <Router>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link" href="#"><Link to="/">List</Link></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><Link to="/create">Create</Link></a>
                </li>
            </ul>
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
