import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { PropsChat } from './common';

const onBack = (setIsBack: Function) => () =>
  setIsBack(true);

const Top = (props: PropsChat) => {
  const { link } = props;
  const [isBack, setIsBack] = useState(false);

  if (isBack === true) {
    return (
      <Redirect to="/chats" />
    );
  }

  return (
    <Fragment>
      <button onClick={onBack(setIsBack)}>
        Back
      </button>

      {link}
    </Fragment>
  );
};

export default Top;
