import React from 'react';

export default function Button({
  buttonLink,
  buttonType,
  buttonClass,
  buttonOnClick,
  buttonTextClass,
  buttonText,
  iconClass,
}) {
  return (
    <a href={buttonLink}>
      <button
        type={buttonType}
        className={buttonClass}
        onClick={buttonOnClick}
      >
        <p className={buttonTextClass}>{buttonText}</p>
        <i className={iconClass}></i>
      </button>
    </a>
  );
}
