import { Outlet, useParams } from 'react-router'
import { Link } from 'react-router-dom'

export function Home() {
  return <>
    <h1>Home</h1>
    <ul>
      <div>Home</div>
      <Link to='/about'>About</Link>
      <Link to='/business'>Business</Link>
      <Link to='/upload'>File Upload</Link>
    </ul>
  </>
}

export function About() {
  return <>
    <h1>About</h1>
    <ul>
      <Link to='/'>Home</Link>
      <div>About</div>
      <Link to='/business'>Business</Link>
      <Link to='/upload'>File Upload</Link>
    </ul>
  </>
}

export function Business() {
  return <>
    <Outlet />
  </>
}

export function BusinessIndex() {
  return <>
    <ul>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <div>Business</div>
      <Link to='/upload'>File Upload</Link>
    </ul>
    <h1>Business (Home)</h1>
    <ul>
      <Link to='personal'>Personal</Link>
      <Link to='1'>1</Link>
      <Link to='2'>2</Link>
      <Link to='3'>3</Link>
      <Link to='something'>Something</Link>
      <Link to='very-good'>Very Good</Link>
      <Link to='fabulous'>Fabulous</Link>
    </ul>
  </>
}

export function BusinessItem() {
  const { id } = useParams()
  return <>
    <ul>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/business'>Business</Link>
      <Link to='/upload'>File Upload</Link>
    </ul>
    <h1>Business Item '{id}'</h1>
  </>
}

export function BusinessPersonal() {
  return <>
    <ul>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/business'>Business</Link>
      <Link to='/upload'>File Upload</Link>
    </ul>
    <h1>Personal Business</h1>
  </>
}
