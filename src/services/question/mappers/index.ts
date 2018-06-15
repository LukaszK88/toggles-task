import { Answer, Option } from '../../../types';

export const mapQuestion = (question:any) => ({
  title: question.title,
  options: mapOptions(question.options),
});

const mapOptions = (options:any[]):Option[] => options.map(mapOption);

const mapOption = (option:any) => ({
  id: option.id,
  answers: mapAnswers(option.answers),
});

const mapAnswers = (answers:any[]):Answer[] => answers.map(mapAnswer);

const mapAnswer = (answer:any) => ({
  id:answer.id,
  correct:!!+answer.correct,
  title:answer.title,
  active:!!+answer.active,
});
