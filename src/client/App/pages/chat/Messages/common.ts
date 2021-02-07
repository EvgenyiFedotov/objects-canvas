export interface Message {
  author: string;
  text?: string;
};

export const createMessage = ({
  author,
  text = '',
}: Message) =>
  ({
    author,
    text,
  });
