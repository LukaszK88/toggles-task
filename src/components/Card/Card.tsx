import * as React from 'react';
import {Answer, Option, Question} from "../../types";
import {Toggle} from "../index";

const styles = require('./Card.scss');

interface CardInterface {
  question:Question;
}

interface CardStateInterface {
  options:Option[];
  correctAnswers:number;
}

class Card extends React.Component<CardInterface> {
  constructor(props:CardInterface) {
    super(props);

    this.selectAnswer = this.selectAnswer.bind(this);
  }

  public state:CardStateInterface = {
    options: null,
    correctAnswers:0,
  };

  static getDerivedStateFromProps(nextProps:CardInterface, nextState:CardStateInterface) {
    if (!nextState.options) {
      return {
        options: nextProps.question.options,
      }
    }
    return nextState;
  }

  select() {
    return this.props.question.options.reduce((answers,currentOption) => {
      return answers.concat(currentOption.answers);
    }, []);
  }

  selectAnswer(selectedAnswer:Answer) {
    const options = this.state.options.reduce((previousValue:any,currentOption:Option) => {
      const matchAnswer = currentOption.answers.find(answer => answer.id === selectedAnswer.id);

      if (matchAnswer === undefined) {
        return previousValue.concat(currentOption);
      }

      const updatedAnswers = currentOption.answers.map((answer) => {
        if (answer.id === matchAnswer.id) {
          return {...answer, active:1 };
        }
        return {...answer, active:0 };
      });

      return previousValue.concat({
        ...currentOption,
        answers:updatedAnswers
      });
    }, []);


    let correctAnswers = this.state.correctAnswers;

    if (selectedAnswer.correct) {
      correctAnswers += 1;
    } else {
      correctAnswers -= 1;
    }

    this.setState({ options, correctAnswers });
  }

  renderOptions() {
    const { options } = this.state;
    return options.map((option:Option) => {
      return <Toggle selectAnswer={this.selectAnswer} option={option}/>
    })
  }

  render() {
    const { title, options } = this.props.question;
    const { correctAnswers } = this.state;

    const correctAnswerRatio = Math.round(correctAnswers / options.length * 100);
    const inlineStyle =
      {
        backgroundImage:
          `linear-gradient(to bottom, rgba(250, ${145 + correctAnswerRatio}, 97, 0.7)
          ,rgba(247, ${59 + correctAnswerRatio}, 28, 0.69))`
      };
    const answerStatus = (correctAnswerRatio === 100 ? 'correct' : 'incorrect');
    return (
      <div
        className={(correctAnswerRatio === 100 ? styles.cardCorrect : styles.cardIncorrect)}
        style={(correctAnswerRatio !== 100 ? inlineStyle : null)}
      >
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.content}>
          {this.renderOptions()}
        </div>
        <div className={styles.answerStatus}>
          <span>
            The answer is {answerStatus}
          </span>
        </div>
      </div>
    );
  }
}

export default Card;
