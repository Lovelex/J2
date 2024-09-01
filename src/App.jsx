import { Link } from 'react-router-dom'
import { EASY_Q1, EASY_Q2 } from './routes'

const routes = [
  {path: EASY_Q1, name: 'Q1'},
  {path: EASY_Q2, name: 'Q2'}
]

function App() {
  return (
    <>
      <ul>
        {
          routes.map(({ path, name }) => (
            <li key={name}>
              <Link to={path}>{name}</Link>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default App
