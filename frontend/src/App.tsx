import React from 'react'
import { useRoutes } from 'react-router'
import { routes } from './routes'

export default function App() {
  return useRoutes(routes)
}
