import React from 'react';
 import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
 import Home from './components3/Home.jsx';
 import Layout from './components3/Layout.jsx';
import Register from './components3/Register.jsx';
import Login from './components3/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout>
            <Outlet />

    </Layout>,
            

    children: [

       {
          path: "",
          element: <Home />,
       },

       {
          path: "/register",
          element: <Register />,
        },

      {
        path: "/login",
        element: <Login />,

      },


      ]
            
  },
]);
        
    function App() {
      return <RouterProvider router={router} >
          {/* <div>
            <Home />
            <Register /> 
          </div>  */}
        </RouterProvider>
        

}
 

 export default App;
    
     
 