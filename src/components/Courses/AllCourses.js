import React from 'react';
import { useLoaderData } from 'react-router-dom';


const AllCourses = () => {

    const allCourses = useLoaderData();
    // console.log(allCourses)
    return (
        <><h2 className='text-3xl font-bold mx-16 my-8 underline'>All Courses</h2><div className='grid grid-cols-1 md:grid-cols-2 gap-12 mt-2 mb-16'>
            {allCourses.map(courses => <AllCoursesDetails key={courses._id} courses={courses}></AllCoursesDetails>)}
        </div></>
    );
};

export default AllCourses;