import './comparing.css';
import { useEffect, useRef, useState } from 'react';

import Title from './Title';
import { getSymbolOfComparing } from '../domain/getSymbolOfComparing';

const Comparing = () => {
  const [firstNumber, setFirstNumber] = useState<number>();
  const [secondNumber, setSecondNumber] = useState<number>();
  const [symbol, setSymbol] = useState('');

  const refInputLeft = useRef<any>();
  const refInputRight = useRef<any>();

  useEffect(() => {
    if (firstNumber && secondNumber)
      setSymbol(getSymbolOfComparing(firstNumber, secondNumber));
  }, [firstNumber, secondNumber]);

  function cleanInputs() {
    refInputLeft.current.value = '';
    refInputRight.current.value = '';
  }

  return (
    <>
      <Title title="Comparing" />

      <div className="comparingMainContainer">
        <input
          placeholder="Input number"
          type="number"
          className="comparingNumberLeft"
          ref={refInputLeft}
          onChange={(event) => setFirstNumber(parseInt(event.target.value))}
        />

        <h1 className="comparingSymbol" onClick={() => {}}>
          {' '}
          {symbol}
        </h1>

        <input
          placeholder="Input number"
          type="number"
          className="comparingNumberRight"
          ref={refInputRight}
          onChange={(event) => setSecondNumber(parseInt(event.target.value))}
        />

        <div
          className="resetComparing"
          onClick={() => {
            cleanInputs();
            setSymbol('');
          }}
        >
          {' '}
          Reset{' '}
        </div>
      </div>
    </>
  );
};

export default Comparing;
