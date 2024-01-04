import React from 'react';
import PropTypes from 'prop-types';
import { CloseBtn } from './IconBtn.styled';

export default function IconBtn({ children, onClick }) {
  return (
    <CloseBtn className="btn" type="button" onClick={onClick}>
      {children}
    </CloseBtn>
  );
}

IconBtn.defaultProps = {
  onClick: () => null,
  children: null,
};

IconBtn.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};
