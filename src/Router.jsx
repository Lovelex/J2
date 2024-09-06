import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'

import { EASY_Q1, EASY_Q2, EASY_Q3, HOME } from './routes.js'

import Home from './pages/Home.jsx'
import Q1 from './pages/easy/q1/Q1.jsx'
import Q2 from './pages/easy/q2/Q2.jsx'
import Q3 from './pages/easy/q3/Q3.jsx'

const router = createBrowserRouter([
  {
    path: HOME,
    element: <Home />
  },
  {
    path: EASY_Q1,
    element: <Q1 />
  },
  {
    path: EASY_Q2,
    element: <Q2 />
  },
  {
    path: EASY_Q3,
    element: <Q3 />
  },
])

function Router() {
  return (
    <RouterProvider router={router} />
  )}

export default Router
