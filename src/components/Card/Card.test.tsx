import * as React from 'react';
import { shallow } from 'enzyme';
import { Card, CardInterface } from './Card';
import { Answer, Question } from '../../types';
import { Toggle } from '../index';

const mockQuestion:Question = {
  title: 'What are the ideal conditions inside an office?',
  options: [
    {
      id: 1,
      answers: [
        { active: false, correct: true, id: 1, title: 'Good pay' },
        { active: true, correct: false, id: 2, title: 'Bad pay' },
      ],
    },
    {
      id: 2,
      answers: [
        { active: true, correct: false, id: 3, title: 'A lot of meetings' },
        { active: false, correct: true, id: 4, title: 'Less meetings' },
      ],
    },
    {
      id: 3,
      answers: [
        { active: false, correct: true, id: 5, title: 'Free Coffee' },
        { active: true, correct: false, id: 6, title: 'Expensive Coffee' },
      ],
    },
    {
      id: 4,
      answers: [
        { active: false, correct: true, id: 7, title: 'Bear in office' },
        { active: true, correct: false, id: 8, title: 'Dog in office' },
      ],
    },
  ],
};

const mockAnswer:Answer = { active: false, correct: true, id: 1, title: 'Good pay' };

const props:CardInterface = {
  question:mockQuestion,
};

describe('<Card/>', () => {

  it('renders options', () => {
    const card = shallow(<Card {...props}/>);

    expect(card.find(Toggle)).toHaveLength(4);
  });

  it('can select answer and increment/decrement count', () => {

    const card = shallow(<Card {...props}/>);

    (card.instance() as Card).selectAnswer(mockAnswer);

    expect(card.state().correctAnswers).toEqual(1);

    (card.instance() as Card).selectAnswer({ ...mockAnswer, correct:false });

    expect(card.state().correctAnswers).toEqual(0);
  });

});
