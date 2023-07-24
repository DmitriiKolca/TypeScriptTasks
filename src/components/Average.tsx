import './average.css';
import { useEffect, useState } from 'react';

interface Average {
  summ: number;
  count: number;
  onResetClick: () => void;
}

const Average = ({ summ, count, onResetClick }: Average) => {
  const [average, setAverage] = useState(0);

  useEffect(() => {
    if (summ !== 0) setAverage(summ / count);
  }, [count]);

  return (
    <>
      <div className="average">
        Среднее арифметическое: {average.toFixed(1)}
      </div>

      <div
        className="resetCalculator"
        onClick={() => {
          onResetClick();
          setAverage(0);
        }}
      >
        {' '}
        Reset
      </div>
    </>
  );
};
export default Average;
