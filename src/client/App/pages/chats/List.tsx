import React from 'react';

export interface ListItem {
  name: string;
};

interface Props {
  children: ListItem[];
};

export default (props: Props) => (
  <div>
    {props.children.reduce((result: Array<Object>, item, index) => {
      const { name } = item;

      result.push(
        <div key={index}>
          {name}
        </div>
      );

      return result;
    }, [])}
  </div>
);
