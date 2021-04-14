import React from 'react';
import Button from '../../components/Button';

export default function Lipstick({
}) {
  return (
    <section id='section-lipstick' className='section-base centered'>
      <img src='' alt='Batom'></img>
      <Button
        buttonLink='#section-lipstick'
        buttonClass='nav-button'
        buttonTextClass='nav-button-text'
        buttonText='Veja o tutorial'
        iconClass='icon-arrow-down fas fa-chevron-down'
      />
    </section>
  )
}
