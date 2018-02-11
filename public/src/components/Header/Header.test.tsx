import {shallow} from 'enzyme';
import * as React from 'react';
import Header from './Header';

describe('Header', () => {
    it('should have logo', () => {
        const logo = shallow(<Header/>).find('Logo');
        expect(logo.length).toEqual(1);
    });

    it('should have menu links', () => {
        const logo = shallow(<Header/>).find('a');
        expect(logo.length).toBeGreaterThanOrEqual(2);
    });
});