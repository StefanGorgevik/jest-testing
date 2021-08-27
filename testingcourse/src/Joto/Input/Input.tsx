import React from 'react';

interface InputProps {
    secretWord: boolean
}
const Input: React.FC<InputProps> = ({ secretWord }) => {
    const [currentGuess, setCurrentGuess] = React.useState('');

    return (<div data-test='component-input'>
        <form>
            <input type='text' data-test='input-box' placeholder='Enter guess' value={currentGuess} onChange={(e) => setCurrentGuess(e.target.value)} />
            <button type='submit' data-test='submit-button'>
                Submit
            </button>
        </form>
    </div>)
}

export default Input;