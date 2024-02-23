import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'

import { EASY_Q1, MAIN } from './routes.js'

import App from './App.jsx'
import Q1 from './pages/easy/q1/Q1.jsx'

const router = createBrowserRouter([
  {
    path: MAIN,
    element: <App />
  },
  {
    path: EASY_Q1,
    element: <Q1 />
  },
])

function Router() {
  return (
    <RouterProvider router={router} />
  )}

export default Router
