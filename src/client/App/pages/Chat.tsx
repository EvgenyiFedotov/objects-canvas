import React from 'react';
import PageComponent from './components/PageContent';
import Form from './components/Form';

interface Props {
  link: string;
};

export default (props: Props) => {
  const { link } = props;

  return (
    <PageComponent
      justify="space-between"
    >
      <div className="page-chat">
        <button>Back</button>
        {link}
      </div>

      <Form>
        <input />
        <button>Send</button>
      </Form>
    </PageComponent>
  );
};
