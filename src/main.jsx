import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './Provider/AuthProvider'
import { RouterProvider } from 'react-router-dom'
import router from './Router/router'

ReactDOM.createRoot(document.getElementById('root')).render(


  <div className="max-w-7xl mx-auto overflow-hidden font-serif ">
    <React.StrictMode>
      <Toaster />
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>

    </React.StrictMode>
  </div>

)
