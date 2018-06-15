import * as React from 'react';
import {Card} from "../../components";

const styles = require('./Toggles.scss');

const question = require('../../data/questionResponse.json');

class Toggles extends React.Component {
  render() {
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
