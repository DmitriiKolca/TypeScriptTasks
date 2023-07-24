import './title.css';
import React from 'react';

const Title = (title: { title: string }) => {
  return <h1 className="title"> {title.title} </h1>;
};

export default Title;
