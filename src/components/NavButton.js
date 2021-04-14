import React from 'react';

export default function NavButton({
  buttonLink,
  buttonClass,
  buttonTextClass,
  buttonText,
  iconClass,
}) {
  return (
    <a href={buttonLink}>
      <button className={buttonClass}>
        <p className={buttonTextClass}>{buttonText}</p>
        <i className={iconClass}></i>
      </button>
    </a>
  );
}
