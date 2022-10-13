import React, { useContext } from 'react';
import Header from '../Header/Header';
import { QuizContext } from '../Root/Root';
import Topic from '../Topic/Topic';

const Topics = () => {
    const quizTopics = useContext(QuizContext);

    const quizzesTopics = quizTopics.data;

    return (
        <div>
            <Header />
            <div className="grid md:grid-cols-4">
                {quizzesTopics.map((quizzes) => (
                    <Topic quizzes={quizzes} key={quizzes.id}></Topic>
                ))}
            </div>
        </div>
    );
};

export default Topics;
