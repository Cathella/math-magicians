import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, className, buttonClick } = props;
  return (
    <button onClick={buttonClick} className={className} type="button">{name}</button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  buttonClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: '',
};

export default Button;
