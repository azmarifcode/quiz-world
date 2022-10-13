import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizzes from '../Quizzes/Quizzes';

const Quiz = () => {
    const quizLoaderData = useLoaderData();
    const quizLoad = quizLoaderData.data;
    const { id, name, questions } = quizLoad;
    return (
        <div>
            <h1 className="text-center font-semibold text-4xl mt-3 mb-10">
                Quiz of: {name}
            </h1>
            <div>
                {questions.map((quizzesData) => (
                    <Quizzes quizzesData={quizzesData} key={id}></Quizzes>
                ))}
            </div>
        </div>
    );
};

export default Quiz;
