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
import Order from '../Order/Order';
import ManageOrders from '../ManageOrders/ManageOrders';
import OrderList from '../OrderList/OrderList';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddReview from '../AddReview/AddReview';


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

                        <Route exact path={`${path}/order/:serviceId`}>
                            <Order></Order>
                        </Route>

                        <Route path={`${path}/manageOrders`}>
                            <ManageOrders></ManageOrders>
                        </Route>

                        <Route path={`${path}/orderList`}>
                            <OrderList></OrderList>
                        </Route>

                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>

                        <Route path={`${path}/addReview`}>
                            <AddReview></AddReview>
                        </Route>

                    </Switch>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;