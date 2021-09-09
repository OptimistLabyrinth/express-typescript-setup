import { Outlet, useParams } from 'react-router'

export function Home() {
  return <h1>Home</h1>
}

export function About() {
  return <h1>About</h1>
}

export function Business() {
  return <Outlet />
}

export function BusinessIndex() {
  return <h1>Business (Home)</h1>
}

export function BusinessItem() {
  const { id } = useParams()
  return <h1>Business Item '{id}'</h1>
}

export function BusinessPersonal() {
  return <h1>Personal Business</h1>
}
