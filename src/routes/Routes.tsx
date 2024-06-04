import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RoutesEnum } from './RoutesEnum'
import MainNavigation from '../components/MainNavigation'
import RegisterItem from '../pages/RegisterItem/RegisterItem'
import Gps from '../pages/Gps/Gps'
import { getTagById, tagsOfDay } from '../modules/tag/tagService'
import EditItem from '../pages/EditItem/EditItem'
import TagsOfDay from '../pages/TagsOfDay/TagsOfDay'
import { publishTagIds } from '../modules/mqtt/tagService'
import Oops from '../pages/error/Oops/Oops'
import NotFound from '../pages/error/NotFound/NotFound'




export const router = createBrowserRouter([{
    path: RoutesEnum.ROOT,
    element: <MainNavigation/>,
    errorElement: <Oops error={{ message: 'An unknown error occurred' }}/>,
    children:[
    {
      index: true,
      element: <TagsOfDay/>,
      loader: async() => {
        try {
          var tags = await tagsOfDay()

          if (!tags) throw new Error('No tags found')

          var tagIds = tags.reduce((acc, tag) => {
            return acc + tag.tagId + ','
          }, "")

          publishTagIds(tagIds)

          return tags
        } 
        catch (error) {
          console.error('Error loading tags of the day:', error)
        }
      },
      errorElement: <NotFound/>
    },
    {path: RoutesEnum.NEW, element: <RegisterItem/>},
    {path: RoutesEnum.GPS, element: <Gps/>},
    { 
      path: RoutesEnum.EDIT, 
      element: <EditItem />,
      loader: async ({ params }) => {
        try {
          const { id } = params
          if (!id) throw new Error('No ID provided')
          const tag = await getTagById(id)
          if (!tag) throw new Error(`No tag found with ID: ${id}`)
          return tag
      } catch (error) {
          console.error('Error loading tag by ID:', error)
      }
      },
      errorElement: <NotFound/>
    },
    { path: '*', element: <NotFound/> }
  ]},
])

const AppRoutes:React.FC = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRoutes
