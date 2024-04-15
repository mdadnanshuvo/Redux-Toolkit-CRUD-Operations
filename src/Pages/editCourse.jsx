import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { editCourse } from '../Features/courseSlice';
import './course.css';

const EditCourse = () => {

  

    const {id} = useParams();
    
    const courses = useSelector((state) => state.courseReducer);

    const selectedCourse = courses.find((course) => course.id == id);
    

    const [title, setTitle] = useState("");
    const [courseFee, setCourseFee] = useState();
  
    const dispatch = useDispatch();
  
    const navigate = useNavigate();


    useEffect(() => {
      if(selectedCourse){
        setCourseFee(selectedCourse.course_fee || "");
        setTitle(selectedCourse.title || null);
        
      }
    },[selectedCourse]);

    const handleSubmit = (e) =>
    {
      e.preventDefault();
  
      const course = {id, title,course_fee:courseFee};

      dispatch(editCourse(course));

      navigate("/", {replace:true});
    }
   
  return (
    <div>
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
        <button>Edit Course</button>
      </form>
    </div>
  )
};

export default EditCourse;