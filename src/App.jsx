import { Link } from 'react-router-dom'
import { EASY_Q1 } from './routes'

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to={EASY_Q1}>Q1</Link>
        </li>
      </ul>
    </>
  )
}

export default App
