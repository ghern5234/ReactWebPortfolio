import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index:true,
        element: <About/>,

      },
      {
        path: 'contact',
        element: <Contact/>,
      },
      {
        path: 'resume',
        element: <Resume/>,
      },
      {
        path: 'projects',
        element: <Projects/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);