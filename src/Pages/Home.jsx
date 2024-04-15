import React from 'react'
import { useSelector } from 'react-redux'
import Course from '../Features/Course';

const Home = () => {

  const courses = useSelector((state) => state.courseReducer);

 

  return (
    <div>
     {courses.map((c) => 
      <Course key={c.id} title = {c.title} course_fee={c.course_fee} id={c.id} />
     )}
    </div>
  )
}

export default Home