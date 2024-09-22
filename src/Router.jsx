import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'

import {
  EASY_Q1,
  EASY_Q2,
  EASY_Q3,
  JUNIOR_Q1,
  JUNIOR_Q2,
  HOME
} from '@/routes.js'

import Home from '@/pages/Home.jsx'

import EasyQ1 from '@/pages/easy/q1/Q1.jsx'
import EasyQ2 from '@/pages/easy/q2/Q2.jsx'
import EasyQ3 from '@/pages/easy/q3/Q3.jsx'

import JuniorQ1 from '@/pages/junior/q1/Q1.jsx'
import JuniorQ2 from '@/pages/junior/q2/Q2.jsx'

const router = createBrowserRouter([
  {
    path: HOME,
    element: <Home />
  },
  {
    path: EASY_Q1,
    element: <EasyQ1 />
  },
  {
    path: EASY_Q2,
    element: <EasyQ2 />
  },
  {
    path: EASY_Q3,
    element: <EasyQ3 />
  },
  {
    path: JUNIOR_Q1,
    element: <JuniorQ1 />
  },
  {
    path: JUNIOR_Q2,
    element: <JuniorQ2 />
  },
])

function Router() {
  return (
    <RouterProvider router={router} />
  )}

export default Router
