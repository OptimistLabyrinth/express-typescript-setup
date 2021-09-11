import { Outlet } from 'react-router'
import { Link } from "react-router-dom"

export default function FileUpload() {
  return <Outlet />
}

export function FileUploadLinks() {
  return <>
    <ul>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/business'>Business</Link>
      <div>File Upload</div>
    </ul>
    <h1>How would you upload file?</h1>
    <ul>
      <Link to='single'>Upload Single</Link>
      <Link to='array'>Upload Array</Link>
      <Link to='fields'>Upload Fields</Link>
    </ul>
  </>
}
