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
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#"><Link to="/">List</Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#"><Link to="/create">Create</Link></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
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
