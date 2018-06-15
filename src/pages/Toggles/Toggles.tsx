import * as React from 'react';
import { Card } from '../../components';
import { questionService } from '../../services/question';

const styles = require('./Toggles.scss');

export class Toggles extends React.Component {
  render() {
    const question = questionService.getQuestion();

    return (
      <div className={styles.container}>
       <Card
         question={question}
       />
      </div>
    );
  }
}

export default Toggles;
