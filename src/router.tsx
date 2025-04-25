import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./pages/Homepage";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";

import { LoginForm } from "./components/login-form";
import AuthLayout from "./components/AuthLayout";

import FoodsPage from "./pages/FoodsRepo/FoodsPage";
import UsersPage from "./pages/UsersRepo/UsersPage";
import TestPage from "./pages/TestRepo/TestPage";


export const router = createBrowserRouter([
    {path:'/',element: <HomePage/>},

    {path:'/login',element: <AuthLayout/>,
        children:[{path:'/login',element: <LoginForm/>}]},

    {path:'/',element: <AppLayout/>,
        children:[
            {path:'/',element:< Navigate to="/dashboard"/>},
            {path:'/dashboard',element: <Dashboard/>},

            {path:'/items',element: <FoodsPage/>},
            {path:'/users',element: <UsersPage/>},
            {path:'/tests',element: <TestPage/>},
          
        ]},
]);


