import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RoutesEnum } from './RoutesEnum'
import MainNavigation from '../components/MainNavigation'




export const router = createBrowserRouter([{
    path: RoutesEnum.ROOT,
    element: <MainNavigation/>,
    children:[
    {index: true, element: <h1>Page1</h1>},
    {path: RoutesEnum.NEW, element: <h1>Page2</h1>},
    {path: RoutesEnum.GPS, element: <h1>Page3</h1>},
  ]},
])

const AppRoutes:React.FC = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRoutes
