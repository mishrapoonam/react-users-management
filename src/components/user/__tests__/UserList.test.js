import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import UserList from '../UserList';


describe('UserList.test.js', () => {

    it('renders without crashing', () => {
        const props = {
            users: [
                { id: 1, title: 'Java Clean Code' },
                { id: 2, title: 'Java The Good Pards' },                
            ],
            handleRowSelect: jest.fn()            
        };
        
        const wrapper = shallow(<UserList {...props}/>);
    
        expect(wrapper).toHaveLength(1);
        expect(wrapper.find('table')).toHaveLength(1);

        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();
    });
});