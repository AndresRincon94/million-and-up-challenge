import React from 'react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import backButtonStyle from './BackButton.style';

const BackButtonComponent = styled.a`${backButtonStyle.button}`;

function BackButton() {
  const navigate = useNavigate();

  const onClickHandler = useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <BackButtonComponent onClick={onClickHandler} aria-label='back button' />
  );
}

export default BackButton;
