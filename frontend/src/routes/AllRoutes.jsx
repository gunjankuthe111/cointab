import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { PageNotFound } from './PageNotFound'
import { UserDetails } from './UserDetails'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user-details' element={<UserDetails/>}/>
        <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  )
}
