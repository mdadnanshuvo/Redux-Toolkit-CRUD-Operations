import { createSlice } from "@reduxjs/toolkit";

const initialCourseState = [
    {id : 1,
     title : "Introduction to Computer Science",
     course_fee : 10.00
    },
    {id : 2,
     title : "Advanced Python",
     course_fee : 8.00
    },
    {id : 3,
     title : "The Complete Javascript for Beginners",
     course_fee : 15.00
    },
    {id : 4,
     title : "React Rockstar",
     course_fee : 25.00
    },
    {id : 5,
     title : "The Complete NodeJS",
     course_fee : 15.00
    },
]

export const courseSlice = createSlice({

    name : "courses",
    initialState : initialCourseState,
    reducers : {
      showCourses : (state) => state,
      addCourse : (state,action) => {
        state.push(action.payload);
      },
      deleteCourse : (state,action) => {
        const id = action.payload;
        return state.filter(s => s.id !== id);
      },
    
      editCourse : (state, action) => {
       
        const {id, title, course_fee} = action.payload;
        const index = state.findIndex(course => course.id == id);
        if(index != -1)
        {
          state[index] = {...state[index], title, course_fee}
        }
      }

    },
});

export const {showCourses, addCourse,deleteCourse,editCourse} = courseSlice.actions;
export default courseSlice.reducer;