import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { BackLink } from './BackBtn.styled';

export const BackBtn = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  return (
    <div>
      <BackLink to={backLinkRef.current} type="button">
        <BiArrowBack size="1.5em" />
        Go back
      </BackLink>
    </div>
  );
};
