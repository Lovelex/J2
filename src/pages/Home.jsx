import { Link } from 'react-router-dom'
import { EASY_Q1, EASY_Q2, EASY_Q3 } from '../routes'

const routes = [
  {path: EASY_Q1, name: 'Q1'},
  {path: EASY_Q2, name: 'Q2'},
  {path: EASY_Q3, name: 'Q3'},
]

function Home() {
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

export default Home
