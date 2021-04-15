import React from 'react';

export default function Button({
  navType,
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
        {navType === 'next' ? (
          <>
            <p className={buttonTextClass}>{buttonText}</p>
            <i className={iconClass}></i>
          </>
        ) : (
          <>
            <i className={iconClass}></i>
            <p className={buttonTextClass}>{buttonText}</p>
          </>
        )}
      </button>
    </a>
  );
}
