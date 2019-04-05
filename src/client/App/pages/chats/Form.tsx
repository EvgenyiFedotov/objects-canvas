import React, { Fragment, useState, SyntheticEvent } from 'react';

interface Props {
  onSubmit: Function;
};

const onChange = (setNameChat: Function) =>
  (e: SyntheticEvent) => setNameChat(e.target.value);

export default (props: Props) => {
  const { onSubmit } = props;
  const nameState = useState('');
  const [name, setName] = nameState;

  return (
    <Fragment>
      <input
        value={name}
        onChange={onChange(setName)}
      />
  
      <button onClick={onSubmit(nameState)}>
        Create chat
      </button>
    </Fragment>
  );
};
