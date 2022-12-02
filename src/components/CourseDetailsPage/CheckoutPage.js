import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckoutPage = () => {
    const singleCourseDetails = useLoaderData();

    const { rating, total_view, title, image, details, instructor, _id } = singleCourseDetails

    return (
        <div>
            <h2 className='text-center font-bold text-lg mt-12'>Make Payment</h2>
            <div className='bg-green-200 p-5 mt-5'>
                <form>
                    <h2 className='text-4xl font-semibold text-center mb-5'> <span className='text-orange-600'>{title}</span></h2>
                    <h4 className='text-2xl font-semibold text-center mb-5 '>Price: $200</h4>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>
                        <input type="text" name="fname" placeholder="Full name" className="input input-bordered w-full" required />
                        <input type="text" name="phone" placeholder=" Your Phone number" className="input input-bordered w-full" required />


                        <input type="text" name="email" placeholder=" Your email" className="input input-bordered w-full" required />
                        <input type="text" name="lname" placeholder="payment" className="input input-bordered w-full" />

                    </div>
                    <textarea name="message" className="textarea textarea-bordered h-24 w-3/4 my-5" placeholder="Your Message"></textarea>

                    <div class="flex items-center">
                        <input className="btn btn-warning mb-5" type="submit" value="Submit" />

                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckoutPage;