import React from 'react';
import styled from 'styled-components';
import styledButton from '../../styles/Button.style'

function Button({ className, children, ...props }) {
  return (
    <button
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

export default styled(Button)`${styledButton}`