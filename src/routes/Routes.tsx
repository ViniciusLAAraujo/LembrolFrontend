import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RoutesEnum } from './RoutesEnum'
import MainNavigation from '../components/MainNavigation'
import RegisterItem from '../pages/RegisterItem/RegisterItem'
import Gps from '../pages/Gps/Gps'
import { getTagById, tagsOfDay } from '../modules/tag/tagService'
import EditItem from '../pages/EditItem/EditItem'
import TagsOfDay from '../pages/TagsOfDay/TagsOfDay'




export const router = createBrowserRouter([{
    path: RoutesEnum.ROOT,
    element: <MainNavigation/>,
    children:[
    {
      index: true,
      element: <TagsOfDay/>,
      loader: async() => {
        return await tagsOfDay()
      }
    },
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
