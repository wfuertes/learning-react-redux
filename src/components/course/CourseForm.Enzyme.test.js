import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import CourseForm from './CourseForm';

function setup(saving = false) {
    let props = {
        course: {},
        errors: {},
        allAuthors: [],
        saving: saving,
        onSave: () => { },
        onChange: () => { }
    };

    return shallow(<CourseForm {...props}/>);
}

describe('CourseForm via Enzyme', () => {
    it('renders form and h1', () => {
        const wrapper = setup(false);
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h1').text()).toBe('Manage Course');
    });

    it('save button is labeled "Save" when not saving', () => {
        const wrapper = setup(false);
        const submitButton = wrapper.find('input');
        expect(submitButton.props().value).toBe('Save');
    });

    it('save button is labeled "Saving..." when saving', () => {
        const wrapper = setup(true);
        const submitButton = wrapper.find('input');
        expect(submitButton.props().value).toBe('Saving...');
    });
});