import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RoutesEnum } from './RoutesEnum'
import MainNavigation from '../components/MainNavigation'
import RegisterItem from '../pages/RegisterItem/RegisterItem'
import Gps from '../pages/Gps/Gps'
import { getTagById } from '../modules/tag/tagService'
import EditItem from '../pages/EditItem/EditItem'




export const router = createBrowserRouter([{
    path: RoutesEnum.ROOT,
    element: <MainNavigation/>,
    children:[
    {index: true, element: <h1>Page1</h1>},
    {path: RoutesEnum.NEW, element: <RegisterItem/>},
    {path: RoutesEnum.GPS, element: <Gps/>},
    { 
      path: RoutesEnum.EDIT, 
      element: <EditItem />,
      loader: async ({ params }) => {
        const { id } = params
        return await getTagById(id)
      }
    },
  ]},
])

const AppRoutes:React.FC = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRoutes
