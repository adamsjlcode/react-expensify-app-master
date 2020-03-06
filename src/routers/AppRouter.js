import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";
import ExpenseDashboardPage from "../js/components/ExpenseDashboardPage";
import AddExpensePage from "../js/components/AddExpensePage";
import EditExpensePage from "../js/components/EditExpensePage";
import HelpPage from "../js/components/HelpPage";
import NotFoundPage from "../js/components/NotFoundPage";
import Header from "../js/components/Header";

const AppRouter = () => (
    <BrowserRouter>
        <div className="">
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;