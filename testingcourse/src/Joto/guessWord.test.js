import React from 'react';
import {mount} from 'enzyme';
import App from '../App';
import { findByTestAttr } from './test/testUtils';

const setup = (state={}) => {
    const wrapper = mount(<App/>);

    const input = findByTestAttr(wrapper, 'input-box');
    input.simulate('change', {target: {value: 'train'}})

    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', {preventDefault(){}});
    return wrapper;
}

describe('invalid word guessed', () => {
    test.todo('guessedWords table does not get another row');
})

describe.skip('no words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({
            secretWord: 'party', 
            success: false,
            guessedWords: [],
        });
    }) 

    test('creates GuessedWords table with one row', () => {
        const table = findByTestAttr(wrapper, 'guessed-word');
        expect(table).toHaveLength(1);
    });
});

describe.skip('some words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({
            secretWord: 'party', 
            success: false,
            guessedWords: [
            { guessedWord: "agile", letterMatchCount: 1 },],
        });
    });
    test('adds word to table', () => {
        const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordNodes).toHaveLength(2);
    });
});

describe.skip('guess secret word', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({
            secretWord: 'party', 
            success: false,
            guessedWords: [],
        });
        const input = findByTestAttr(wrapper, 'input-box');
        input.simulate('change', {target: {value: 'party'}});
        const submitButton = findByTestAttr(wrapper,'guessed-word');
        submitButton.simulate('click', {preventDefault() {}});    
    })

    test('adds row to guessed table', () => {
        const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordNodes).toHaveLength(3);
    })

    test('display congrats component', () => {
        const congrats = findByTestAttr(wrapper, 'component-congrats');
        expect(congrats.text().length).toBeGreaterThan(0);
    })

    test('does not display input component contents', () => {
        const input = findByTestAttr(wrapper, 'input-box');
        expect(input.exists()).toBe(false);
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        expect(submitButton.exists()).toBe(false);
    })
})