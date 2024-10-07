import React, { useState } from 'react';
import './index.css';

const InputForm = ({ onPrediction }) => {
    const [formData, setFormData] = useState({
        gender: 1.0,
        age: 0.833,

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: parseFloat(value) });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                onPrediction(data.prediction);
            } else {
                onPrediction('Prediction error.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            onPrediction('Prediction error.');
        }
    };

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <label className='center-form'>
                    Choose your gender:
                    <input
                        type="number"
                        step="any"
                        name="Choose your gender"
                        value={formData["Choose your gender"]}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label className='center-form'>
                    Age:
                    <input
                        type="number"
                        step="any"
                        name="Age"
                        value={formData.Age}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label className='center-form'>
                    What is your course?:
                    <input
                        type="number"
                        step="any"
                        name="What is your course?"
                        value={formData["What is your course?"]}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label className='center-form'>
                    Your current year of study:
                    <input
                        type="number"
                        step="any"
                        name="Your current year of study"
                        value={formData["Your current year of study"]}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label className='center-form'>
                    Marital status:
                    <input
                        type="number"
                        step="any"
                        name="Marital status"
                        value={formData["Marital status"]}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label className='center-form'>
                    Do you have Depression?:
                    <input
                        type="number"
                        step="any"
                        name="Do you have Depression?"
                        value={formData["Do you have Depression?"]}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label className='center-form'>
                    Do you have Anxiety?:
                    <input
                        type="number"
                        step="any"
                        name="Do you have Anxiety?"
                        value={formData["Do you have Anxiety?"]}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label className='center-form'>
                    Do you have Panic attack?:
                    <input
                        type="number"
                        step="any"
                        name="Do you have Panic attack?"
                        value={formData["Do you have Panic attack?"]}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label className='center-form'>
                    Did you seek any specialist for treatment?:
                    <input
                        type="number"
                        step="any"
                        name="Did you seek any specialist for treatment?"
                        value={formData["Did you seek any specialist for treatment?"]}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label className='center-form'>
                    CGPA Midpoint:
                    <input
                        type="number"
                        step="any"
                        name="CGPA Midpoint"
                        value={formData["CGPA Midpoint"]}
                        onChange={handleChange}
                        required
                    />
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>

    );
};

export default InputForm;
