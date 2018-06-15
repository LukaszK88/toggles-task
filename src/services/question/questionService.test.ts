import { questionService } from './index';
import { Answer, Question } from '../../types';

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

describe('Question Service', () => {

  it('can get mapped question with number of options', () => {
    expect(questionService.getQuestion()).toEqual(mockQuestion);
    expect(questionService.getQuestion().options).toHaveLength(4);
    expect(questionService.getQuestion(2).options).toHaveLength(2);
  });

  it('can update answer', () => {
    expect(questionService.updateAnswer(mockQuestion.options, mockAnswer)[0].answers[0].active)
      .toBeTruthy();
    expect(questionService.updateAnswer(mockQuestion.options, mockAnswer)[0].answers[1].active)
      .toBeFalsy();
  });

});
