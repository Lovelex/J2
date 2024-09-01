import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'

import { EASY_Q1, EASY_Q2, MAIN } from './routes.js'

import App from './App.jsx'
import Q1 from './pages/easy/q1/Q1.jsx'
import Q2 from './pages/easy/q2/Q2.jsx'

const router = createBrowserRouter([
  {
    path: MAIN,
    element: <App />
  },
  {
    path: EASY_Q1,
    element: <Q1 />
  },
  {
    path: EASY_Q2,
    element: <Q2 />
  },
])

function Router() {
  return (
    <RouterProvider router={router} />
  )}

export default Router
