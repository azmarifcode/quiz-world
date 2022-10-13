import React from 'react';
import Lottie from 'lottie-react';
import quiz from '../../assets/quiz.json';

const Header = () => {
    return (
        <div className="relative px-5 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
            <div className="max-w-xl mx-auto lg:max-w-screen-xl">
                <div className="mb-16 lg:max-w-lg lg:mb-0">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
                                Quiz World
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Quiz World
                            <br className="hidden md:block" />
                            The Best Quiz{' '}
                            <span className="inline-block text-teal-700">
                                Platform
                            </span>
                            <br />
                            for their teachers and students.
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            <span className="inline-block font-semibold text-teal-700">
                                Interactive lessons
                            </span>
                            <br />
                            Easily embed images and video, import existing
                            slides, and seamlessly blend in assessment
                        </p>
                    </div>
                    <div className="flex items-center">
                        <a
                            href="/"
                            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-700 hover:bg-teal-700 focus:shadow-outline focus:outline-none">
                            Get started
                        </a>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-teal-700 hover:text-teal-800">
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
                <div>
                    <Lottie animationData={quiz} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Header;
