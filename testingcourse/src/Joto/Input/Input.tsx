import React, { useState } from 'react';

interface InputProps {
    success: boolean,
    secretWord: boolean
}
const Input: React.FC<InputProps> = ({ success, secretWord }) => {
    const [currentGuess, setCurrentGuess] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        setCurrentGuess('');
    }
    if (success) {
        return (<div data-test='component-input'></div>)
    }

    return (<div data-test='component-input'>
        <form>
            <input type='text' data-test='input-box' placeholder='Enter guess' value={currentGuess} onChange={(e) => setCurrentGuess(e.target.value)} />
            <button type='submit' data-test='submit-button' onClick={submitHandler}>
                Submit
            </button>
        </form>
    </div>)
}

export default Input;