import React from 'react';
import styled from 'styled-components';

import IError from './IError';
import errorStyle from './Error.style';

const ErrorWrapper = styled.div`${errorStyle.wrapper}`;
const ErrorMessage = styled.h3`${errorStyle.message}`;
const ErrorLink = styled.a`${errorStyle.link}`;

/**
 * Render the Error component
 *
 * @param IError - Error props 
 * @param IError.message - Error message to show
 */
function Error({
  message,
}: IError) {
  return (
    <ErrorWrapper>
      <ErrorMessage>Error: {message}</ErrorMessage>
      <ErrorLink href="/">Go Home</ErrorLink>
    </ErrorWrapper>
  );
}

export default Error;
