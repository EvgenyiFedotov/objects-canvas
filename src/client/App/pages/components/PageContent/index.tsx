import React, { ReactChild } from 'react';
import './styles.css';

interface Props {
  children: ReactChild | ReactChild[];
};

export default (props: Props) => (
  <div className="page-content">
    {props.children}
  </div>
);
