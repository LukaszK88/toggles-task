import { Answer, Option, Question } from '../../types';
import { mapQuestion } from './mappers';

const question = require('../../data/questionResponse.json');

class QuestionService {

  getQuestion(numberOfOptions:number = 4):Question {
    const response:Question = mapQuestion(question);

    return {
      ...response,
      options:
      response.options.slice(0, numberOfOptions),
    };
  }

  updateAnswer(options:Option[], selectedAnswer:Answer):Option[] {
    return options.reduce((previousValue:any, currentOption:Option) => {
      const matchAnswer = currentOption.answers.find(answer => answer.id === selectedAnswer.id);

      if (matchAnswer === undefined) {
        return previousValue.concat(currentOption);
      }

      const updatedAnswers = currentOption.answers.map((answer) => {
        if (answer.id === matchAnswer.id) {
          return { ...answer, active:true };
        }
        return { ...answer, active:false };
      });

      return previousValue.concat({
        ...currentOption,
        answers:updatedAnswers,
      });
    }, []);
  }
}

const questionService = new QuestionService();

export default questionService;
