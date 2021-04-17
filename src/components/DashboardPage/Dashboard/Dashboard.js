import React from 'react';
import './Dashboard.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
} from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar';


const Dashboard = () => {
    return (
        <main>

            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <Switch>

                    </Switch>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;