import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Nav } from '../Nav/Nav';
import { Footer } from '../Footer/Footer';

export const QuizContext = createContext([]);
const Root = () => {
    const quizData = useLoaderData();
    return (
        <QuizContext.Provider value={quizData}>
            <Nav />
            <Outlet />
            <Footer />
        </QuizContext.Provider>
    );
};

export default Root;
