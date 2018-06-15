import * as React from 'react';
import { Answer, Option } from '../../types';
import * as classNames from 'classnames';

const styles = require('./Toggle.scss');

interface ToggleInterface {
  option:Option;
  selectAnswer:(answer:Answer) => void;
}

const Toggle: React.SFC<ToggleInterface> = ({
  option,
  selectAnswer,
}) => {
  return (
    <div className={styles.toggleContainer}>
      {option.answers.map((answer:Answer, index:number) => (
        <div
          onClick={() => (!answer.active ? selectAnswer(answer) : null)}
          className={classNames(
            styles.option,
            (answer.active ? styles.activeOption : null),
            )
          }
        >
          {answer.title}
          {index === 0 &&
          <div
            className={classNames(
              styles.active,
              (answer.active ? styles.out : styles.in),
            )}
          />
          }
        </div>
      ))}
    </div>
  );
};

export default Toggle;
