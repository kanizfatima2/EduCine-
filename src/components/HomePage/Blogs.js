import React from 'react';

const Blogs = () => {
    return (
        <div>
            <section className=" text-black my-12">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">

                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl"></h2>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                        <div>
                            <h3 className="font-bold text-xl"> What is cors?</h3>
                            <p className="mt-1 text-black">CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
                                CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">Why are you using firebase? What other options do you have to implement authentication?</h3>
                            <p className="mt-1 text-black">Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

                                Firebase alternatives are:
                                1. parse
                                2. Supabase
                                3. Kuzzle
                                4. Back4App.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">How does the private route work?</h3>
                            <p className="mt-1 text-black">The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl"> What is Node? How does Node work?</h3>
                            <p className="mt-1 text-black">Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.
                                Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.

                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;