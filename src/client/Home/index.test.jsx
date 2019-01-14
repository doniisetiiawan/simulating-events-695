import React from 'react';
import { shallow } from 'enzyme';

import Home from './index';

describe('Home', () => {
  const subject = shallow(<Home />);
  const subjectWithProps = shallow(<Home name="Carlos" />);

  it('should render Home component', () => {
    expect(subject.length).toBe(1);
  });
  it('should render by default Hello World', () => {
    expect(subject.text()).toEqual('Hello World');
  });
  it('should render the name prop', () => {
    expect(subjectWithProps.text()).toEqual('Hello Carlos');
  });
  it('should has .Home class', () => {
    expect(subject.find('h1').hasClass('Home')).toBe(true);
  });
});
