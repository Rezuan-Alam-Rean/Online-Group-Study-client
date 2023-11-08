import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import CreateAssignment from "../Pages/CreateAssingnment/CreateAssignment";
import Assignments from "../Pages/Assignments/Assignments";
import MyAssignment from "../Pages/MyAssignment/MyAssignment";
import Update from "../Pages/Update/Update";
import Details from "../Pages/Details/Details";
import SubmittedAssignments from "../Pages/SubmittedAssignments/SubmittedAssignments";
import UpdatedAssignment from "../Pages/UpdatedAssignment/UpdatedAssignment";
import GiveMarks from "../Pages/SubmittedAssignments/GiveMarks/GiveMarks";
import PrivetRoute from "./PrivetRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,

        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/AllAssignment',
                element: <Registration></Registration>
            },
            {
                path: '/home/:id',
                element: <PrivetRoute><Details></Details></PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/assignment/home/${params.id}`)
            },
            {
                path: '/SubmitAssignment',
                element: <SubmittedAssignments />
            },
            {
                path: '/CreateAssignment',
                element:<PrivetRoute> <CreateAssignment /></PrivetRoute> 
            },
            {
                path: '/MyAssignment',
                element: <PrivetRoute>
                    <MyAssignment />
                </PrivetRoute>



            },
            {
                path: '/Assignments',
                element: <Assignments />
            },
            {
                path: '/updatedAssignments',
                element: <UpdatedAssignment></UpdatedAssignment>
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({ params }) => fetch(`http://localhost:5000/assignment/home/${params.id}`)
            },
            {
                path: '/GiveMarks/:id',
                element: <GiveMarks></GiveMarks>,
                loader: ({ params }) => fetch(`http://localhost:5000/assignment/home/${params.id}`)
            },


        ]
    },
]);

export default router;