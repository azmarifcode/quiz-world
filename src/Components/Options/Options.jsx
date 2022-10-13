import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Options = ({ option, correctState }) => {
    return (
        <div className="border-4 w-full mb-4 text-center hover:bg-teal-200 border-teal-300 bg-teal-100 rounded-md shadow-2xl">
            <div className="form-control">
                <label
                    onClick={() => correctState(option)}
                    className="label cursor-pointer">
                    <span className="label-text text-center py-3 px-4">
                        {option}
                    </span>
                    <input
                        type="radio"
                        name="radio-6"
                        className="radio checked:bg-teal-500"
                    />
                </label>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Options;
