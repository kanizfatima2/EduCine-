import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProgrammingCourseDetails from './ProgrammingCourseDetails';

const ProgrammingCourse = () => {
    const programmingCourse = useLoaderData();
    console.log(programmingCourse)
    return (
        <div>
            <><h2 className='text-3xl font-bold mx-16 my-8 underline'>Programming Courses </h2><div className='grid grid-cols-1 md:grid-cols-2 gap-12 my-2'>
                {
                    programmingCourse?.map(p => <ProgrammingCourseDetails key={p._id} programming={p}></ProgrammingCourseDetails>)
                }
            </div></>
        </div>
    );
};

export default ProgrammingCourse;