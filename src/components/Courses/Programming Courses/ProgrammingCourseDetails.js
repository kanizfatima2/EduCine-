import React from 'react';
import { Link } from 'react-router-dom';

const ProgrammingCourseDetails = ({ programming }) => {
    const { rating, total_view, title, image, details, instructor, _id } = programming;
    return (
        <div>
            <div className="flex flex-col  p-6 space-y-6 overflow-hidden rounded-lg shadow-lg bg-gray-50 text-black ">
                <div className="flex space-x-4">
                    <img alt="" src={instructor.img} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <Link rel="noopener noreferrer" className="text-sm font-semibold">{instructor.name}</Link>
                        <span className="text-xs text-gray-600">21 nov 2022</span>
                    </div>
                </div>
                <div>
                    <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500 mx-auto" />
                    <h2 className="mb-1 text-xl font-semibold">{title}</h2>
                    <p className="text-sm text-gray-800">
                        {
                            details.length > 150 ?
                                <p>{details.slice(0, 150) + '...'}<Link to={`/courses/${_id}`}><span className='text-blue-600'>read more</span></Link></p>
                                :
                                <p>{details}</p>
                        }
                    </p>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="space-x-2">
                        <button aria-label="Share this post" type="button" className="p-2 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-violet-400">
                                <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
                            </svg>
                        </button>

                    </div>
                    <div className="flex space-x-2 text-sm text-gray-400">
                        <div className="rating flex items-center p-1 space-x-1.5">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                            <span className='text-gray-800'>{rating}</span>
                        </div>

                        <button type="button" className="flex items-center p-1 space-x-1.5 text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                            </svg>

                            <span className="text-gray-800"
                            >{total_view}</span>
                        </button>
                    </div>
                </div>
                <Link to={`/courses/${_id}`} type="button" className="flex items-center justify-center w-3/4 mx-auto p-3 font-semibold tracking-wide rounded-md btn-info bg-gradient-to-r from-cyan-600 to-info ">See Details</Link>
            </div>
        </div>
    );
};

export default ProgrammingCourseDetails;