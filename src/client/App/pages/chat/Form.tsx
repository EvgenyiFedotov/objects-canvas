import React, { Fragment, useState } from 'react';
import { MessagesState } from './Messages';
import { createMessage } from './Messages/common';

interface Props {
  messagesState: MessagesState;
  author: string;
};

type TextState = [string, Function];

const onChageMessage = (setText: Function) =>
  (e) => setText(e.target.value);

const onClick = (messagesState: MessagesState) =>
  (author: string) =>
  (textState: TextState) =>
  () => {
    const [text, setText] = textState;
    const [messages, setMessages] = messagesState;
    const message = createMessage({
      author,
      text,
    });

    setText('');
    setMessages([
      ...messages,
      message,
    ]);
  };

const Form = (props: Props) => {
  const { author, messagesState } = props;
  const textState = useState('');
  const [text, setText] = textState;

  return (
    <Fragment>
      <input value={text} onChange={onChageMessage(setText)} />

      <button onClick={onClick(messagesState)(author)(textState)}>
        Send
      </button>
    </Fragment>
  );
}

export default Form;
