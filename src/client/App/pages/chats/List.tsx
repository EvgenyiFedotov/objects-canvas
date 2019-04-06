import React from 'react';
import { Link } from 'react-router-dom';

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
          <Link to={`/chat/${link}`}>{link}</Link> | {name}
        </div>
      );

      return result;
    }, [])}
  </div>
);

