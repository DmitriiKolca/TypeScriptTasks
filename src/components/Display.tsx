import './display.css';
const Display = (history: { history: string }) => {
  return <div className="display">{history.history}</div>;
};

export default Display;
