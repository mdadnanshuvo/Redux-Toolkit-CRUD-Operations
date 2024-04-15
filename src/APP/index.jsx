import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Error from '../Pages/Error'
import AddCourse from '../Pages/addCourse'
import NavBar from '../Features/NavBar'
import EditCourse from '../Pages/editCourse'

const Index = () => {
  return (

    <BrowserRouter>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='add-course' element={<AddCourse/>}/>
        <Route path={`/edit/:id`} element={<EditCourse/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default Index