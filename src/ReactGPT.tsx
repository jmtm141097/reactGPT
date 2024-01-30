
import { RouterProvider } from 'react-router-dom'
import { router } from './presentation/routers/routers'

export const ReactGPT = () => {
  return (
    <RouterProvider router={router}/>
  )
}
