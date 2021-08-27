import React from 'react';

interface GuessedProps {
    guessedWords: {
        guessedWord: string,
        letterMatchCount: number
    }[]
}

const Guessed: React.FC<GuessedProps> = (props) => {
    let contents;
    if (props.guessedWords.length === 0) {
        contents = (
            <span data-test='guess-instructions'>Try to guess the secret word!</span>
        )
    } else {
        const guessedWordsRows = props.guessedWords.map((word, i) => (
            <tr data-test='guessed-word' key={i}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        ))

        contents = (
            <div data-test='guessed-words'>
                <h3>Guessed words</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Guess</th>
                            <th>Matching letters</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            guessedWordsRows
                        }
                    </tbody>
                </table>
            </div>
        );
    }

    return (
        <div data-test="component-guessed-words">{contents}</div>
    )
};

export default Guessed;