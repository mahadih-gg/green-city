import React from 'react';
import './Dashboard.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
} from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar';
import AddService from '../AddService/AddService';
import ManageServices from '../ManageServices/ManageServices';


const Dashboard = () => {

    let { path } = useRouteMatch();

    return (
        <main>

            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <Switch>
                        <Route path={`${path}/addService`}>
                            <AddService></AddService>
                        </Route>

                        <Route path={`${path}/manageServices`}>
                            <ManageServices></ManageServices>
                        </Route>
                    </Switch>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;