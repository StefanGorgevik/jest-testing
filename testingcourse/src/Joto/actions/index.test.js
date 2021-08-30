import moxios from 'moxios';
import {getSecretWord} from './';

describe('getSecretWord', () => {
    beforeEach(() => {
        moxios.install();//it tells axios to use moxios for requests
    });

    afterEach(() => {
        moxios.uninstall();
    })

    test('secretWord is returned', () => {
        moxios.wait(() => {
            const request  = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: 'party',
            })
        })

        //update to test app in Redux /context sections
        return getSecretWord() //return because the test function won't return until the promise is resolved
        .then((secretWord) => {
            expect(secretWord).toBe('party')
        })
    })
});