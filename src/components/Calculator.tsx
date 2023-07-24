import './calculator.css';
import { useRef, useState } from 'react';

import Average from './Average';
import Display from './Display';
import Title from './Title';
import { setDisplayMinus, setDisplayPlus } from '../domain/display';

const Calculator = () => {
  const [inputNumber, setInputNumber] = useState(0);
  const [summ, setSumm] = useState(0);
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState('');

  const ref = useRef<any>();

  // TODO: сделать так что бы инпут не перерендеривал страницу
  const clearInput = () => {
    ref.current.value = '';
  };
  const onClickPlus = () => {
    setSumm((prevState) => prevState + inputNumber);
    setInputNumber(0);
    setCount((prevState) => prevState + 1);
    setHistory((prevState) => setDisplayPlus(prevState, inputNumber));
    clearInput();
  };

  const onClickMinus = () => {
    setSumm((prevState) => {
      if (inputNumber > 0) {
        return prevState - inputNumber;
      } else {
        return prevState + inputNumber;
      }
    });
    setInputNumber(0);
    setCount((prevState) => prevState + 1);
    setHistory((prevState) => setDisplayMinus(prevState, inputNumber));
    clearInput();
  };

  return (
    <div className="mainContainer">
      <Title title={'Calculator'}></Title>
      <div className="unitContainer">
        <Display history={history} />
        <input
          placeholder="Input number"
          ref={ref}
          type="number"
          className="input"
          onChange={(event) => {
            setInputNumber(parseInt(event.target.value));
          }}
          onClick={clearInput}
        />

        <div className="countPlus" onClick={onClickPlus}>
          {' '}
          +{' '}
        </div>

        <div className="countMinus" onClick={onClickMinus}>
          {' '}
          -{' '}
        </div>

        <div className="summ"> Summ: {summ} </div>

        <div className={'separator'}></div>

        <Average
          summ={summ}
          count={count}
          onResetClick={() => {
            setSumm(0);
            setCount(0);
            setHistory('');
            clearInput();
          }}
        />
      </div>
    </div>
  );
};
export default Calculator;
