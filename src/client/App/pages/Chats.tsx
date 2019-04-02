import React from 'react';
import PageContent from './components/PageContent';
import Form from './components/Form';

interface Props {
  userState: [any, Function];
};

export default (props: Props) => {
  const { userState } = props;
  const [user] = userState;

  return (
    <PageContent>
      <div>
        Login: {user}
      </div>

      <Form>
        <input />
        <button>
          Create chat
        </button>
      </Form>
    </PageContent>
  );
;}
