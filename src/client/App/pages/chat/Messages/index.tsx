import React from 'react';
import classNames from 'classnames';
import { Message } from './common';
import './styles.css';

export type MessagesList = Array<Message>;

export type MessagesState = [MessagesList, Function];

interface Props {
  author: string;
  children: MessagesList;
};

const getClassNameMessage = (author: string) =>
  (message: Message) =>
    classNames('chat-message-wrapper', {
      [`chat-message-wrapper__i-author`]: author === message.author,
    });

const Messages = (props: Props) => {
  const { children, author } = props;

  console.log(children);

  return (
    <div className="chat-messages-wrapper">
      <div className="chat-messages">
        {children.reduce((res, message, index) => {
          res.push(
            <div
              className={getClassNameMessage(author)(message)}
              key={index}
            >
              <div className="chat-message">
                <div className="chat-message__text">
                  {message.text}
                </div>
              </div>
            </div>
          );

          return res;
        }, [])}
      </div>
    </div>
  );
};

export default Messages;
