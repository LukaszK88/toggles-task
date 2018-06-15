import * as React from 'react';
import { shallow } from 'enzyme';
import { Toggle, ToggleInterface } from './Toggle';
import { Option } from '../../types';

const mockOption:Option =
  {
    id: 1,
    answers: [
      { active: false, correct: true, id: 1, title: 'Good pay' },
      { active: true, correct: false, id: 2, title: 'Bad pay' },
    ],
  };

const props:ToggleInterface = {
  option:mockOption,
  selectAnswer:jest.fn(),
};

describe('<Toggle/>', () => {

  it('renders answers', () => {
    const toggle = shallow(<Toggle {...props}/>);

    expect(toggle.find('div')).toHaveLength(4);
  });

  it('can select inactive answer', () => {
    const toggle = shallow(<Toggle {...props}/>);

    const firstAnswer = toggle.find('div').at(1);
    const secondAnswer = toggle.find('div').at(2);

    secondAnswer.simulate('click');

    expect(props.selectAnswer).not.toHaveBeenCalled();

    firstAnswer.simulate('click');

    expect(props.selectAnswer).toHaveBeenCalled();
    expect(props.selectAnswer).toHaveBeenCalledWith(mockOption.answers[0]);
  });

});
