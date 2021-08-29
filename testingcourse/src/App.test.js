import {shallow }from 'enzyme';
import { findByTestAttr } from './Joto/test/testUtils';
import App from './App';

const setup = () => {
    return shallow(<App/>);
}

describe('App', () => {
    test('renders without error', ()=>{
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'component-app');
        // expect(component.length).toBe(1);
        expect(component).toHaveLength(1);

    })
})