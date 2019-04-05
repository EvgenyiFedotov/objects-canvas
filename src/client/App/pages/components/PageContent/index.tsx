import React, { ReactChild } from 'react';
import './styles.css';
import { FlexDirectionProperty, JustifyContentProperty, AlignItemsProperty } from 'csstype';

interface Props {
  children: ReactChild | ReactChild[];
  direction?: FlexDirectionProperty;
  justify?: JustifyContentProperty;
  align?: AlignItemsProperty;
};

const getStyle = (props: Props) => {
  const {
    direction = 'column',
    justify = 'center',
    align = 'center'
  } = props;

  return {
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
  };
};

export default (props: Props) => (
  <div
    className="page-content"
    style={getStyle(props)}
  >
    {props.children}
  </div>
);
