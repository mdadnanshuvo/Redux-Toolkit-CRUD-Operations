import React from 'react';
import "./courseStyle.css"
import { useDispatch } from 'react-redux';
import { deleteCourse } from './courseSlice';
import { Link } from 'react-router-dom';

const Course = (props) => {
    const {id,title,course_fee} = props;

    const dispatch = useDispatch();


    const handleDelete = (id) => {
     
       dispatch(deleteCourse(id)); 

    }

  return (

    <div className='container'>

    <div className='course-container'>
        <div className="course-title">{title}</div>
        <div className="course-details">
            <p>ID : {id}</p>
            <p>Course Fee : {course_fee} $</p>
        </div>
        <div className='edit-delete'>
            <button onClick={() => handleDelete(id)}>Delete</button>
            <Link to={`/edit/${id}`}>
            <button>Edit</button>
            </Link>
        </div>
    </div>

    </div>
  )
}

export default Course