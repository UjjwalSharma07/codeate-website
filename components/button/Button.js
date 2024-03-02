import React from 'react';
// import './Button.css'
// import Link from 'next/link';

const STYLES = ['btn--primary', 'btn--outline', 'btn--sub'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
  stylee={}
  }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    //<Link to='/sign-up' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize} ${stylee}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    //</Link>
  );
};
