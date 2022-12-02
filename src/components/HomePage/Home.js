import React from 'react';
import { Link } from 'react-router-dom';
import reader from '../../assets/reader.json';
import Lottie from 'lottie-react';

const Home = () => {
    return (
        <div>
            <section className=" text-black">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-2xl font-bold leading-none sm:text-6xl">Edu<span className='text-pink-600'>Cine</span>

                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">A Best to build your FUTURE! So.....Let's start Learning Here!!

                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded btn-info bg-gradient-to-r from-cyan-700 to-info bg-gray-100">Get Started</Link>

                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <Lottie animationData={reader} loop={true} className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;