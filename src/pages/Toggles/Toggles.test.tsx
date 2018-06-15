import * as React from 'react';
import { shallow } from 'enzyme';
import { Toggles } from './Toggles';
import { Card } from '../../components';

jest.mock('services/question', () => {
  return {
    questionService: {
      getQuestion:jest.fn(),
    },
  };
});

describe('<Toggles/>', () => {

  it('renders card', () => {
    const toggles = shallow(<Toggles/>);

    expect(toggles.find(Card)).toHaveLength(1);
  });

});
