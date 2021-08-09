import React from "react";
import { shallow, mount } from "enzyme";
import SearchBar from "./Searchbar";

describe('Search Bar', () => {
    it('Should contain all componets', () => {
        const wrapper = shallow(<SearchBar />);
        const search = wrapper.findWhere(node => node.prop('placeholder') === 'Search Trainers');
        expect(search).toHaveLength(1);

        const picker = wrapper.find('Picker')
        expect(picker).toHaveLength(1);
    })
})