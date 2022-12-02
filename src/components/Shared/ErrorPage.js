import React from 'react'
import { Link, useRouteError } from 'react-router-dom'


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <>

            <div className='flex flex-col min-h-[700px] justify-center items-center'>
                <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
                {
                    error &&
                    (<div>
                        <img src="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?size=626&ext=jpg&ga=GA1.2.666858839.1669576398" alt="" />
                        <p className='text-red-600 py-3 text-center'>{error.status} {error.statusText}</p>
                    </div>)
                }
                <Link to='/home' className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900">Back to Homepage</Link>
            </div>

        </>
    )
}

export default ErrorPage
