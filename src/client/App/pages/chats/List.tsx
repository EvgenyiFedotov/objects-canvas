import React from 'react';

export interface ListItem {
  link: string;
  name: string;
};

interface Props {
  children: ListItem[];
};

export default (props: Props) => (
  <div>
    {props.children.reduce((result: Array<Object>, item, index) => {
      const { link, name } = item;

      result.push(
        <div key={index}>
          <a href="#">{link}</a> | {name}
        </div>
      );

      return result;
    }, [])}
  </div>
);

