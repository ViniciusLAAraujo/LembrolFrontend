import React from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RoutesEnum } from './RoutesEnum'




export const router = createBrowserRouter([{
    path: RoutesEnum.ROOT,
    element: <><Outlet/></>,
    children:[
    {index: true, element:<><h1>Lembrol2.0</h1></> },
  ]},
])

const AppRoutes:React.FC = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRoutes
