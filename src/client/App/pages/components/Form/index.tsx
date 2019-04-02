import React, { ReactChild } from 'react';
import './styles.css';

interface Props {
  children: ReactChild | ReactChild[];
};

export default (props: Props) => (
  <div className="page-form">
    {props.children}
  </div>
);
