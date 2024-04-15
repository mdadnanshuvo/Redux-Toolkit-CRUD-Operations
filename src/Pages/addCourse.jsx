import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCourse } from '../Features/courseSlice';
import { useNavigate } from 'react-router-dom';
import './course.css';

const AddCourse = () => {

  const [title, setTitle] = useState("");
  const [courseFee, setCourseFee] = useState();

  const dispatch = useDispatch();

  const numOfCourse = useSelector((state) => state.courseReducer);
  
  const navigate = useNavigate();
  const handleSubmit = (e) =>
  {
    e.preventDefault();

    const course = {id : numOfCourse.length + 1, title,course_fee:courseFee};
    dispatch(addCourse(course));
    navigate("/", {replace:true});
  }

  return (
    <div className='course-form'>
      <h2>Add Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title </label>
          <input type="text" 
          id='title'
          name='title' value={title} 
          onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-field">
          <label htmlFor="course-fee">Course Fee </label>
          <input type="text" 
          id='course-fee'
          name='course-fee' value={courseFee} 
          onChange={(e) => setCourseFee(e.target.value)} />
        </div>
        <button>Add Course</button>
      </form>
    </div>
  )
}

export default AddCourse;