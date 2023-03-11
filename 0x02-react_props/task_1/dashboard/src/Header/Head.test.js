import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';


describe('Testing <Header /> Component', () => {
  let wrapper;

  // beforeEach(() => {
  //   wrapper = shallow(<Header />);
  // });

  it("Renders with out crashing", () => {
    expect(wrapper).toBeDefined();
  });


  
});

